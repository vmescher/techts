import type { FetchOptions, MappedResponseType, ResponseType } from 'ofetch';
import type { ApiModule } from '~/types/api-module';
import { ofetch } from 'ofetch';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const baseURL = config.public.apiBase;

	const core = ofetch.create({
		baseURL,
		retry: config.public.http?.retry ?? 0,
		onRequest({ options }) {
			const headers = new Headers(options.headers as HeadersInit);
			headers.set('Accept', 'application/json');

			options.headers = headers;

			const timeoutMs = (options as any).timeout ?? config.public.http?.timeoutMs ?? 15_000;
			if (!options.signal && timeoutMs > 0) {
				const controller = new AbortController();
				options.signal = controller.signal;
				setTimeout(() => controller.abort(new DOMException('Timeout', 'TimeoutError')), timeoutMs);
			}

			if (import.meta.dev && import.meta.client) {
				// eslint-disable-next-line no-console
				console.debug('[API] →', options.method ?? 'GET', (options as any)._url, options);
			}
		},

		onResponse({ response }) {
			if (import.meta.dev && import.meta.client) {
				// eslint-disable-next-line no-console
				console.debug('[API] ←', response.status, response._data);
			}
		},

		onRequestError({ error }) {
			if (import.meta.dev)
				console.error('[API] request error', error);
		},

		onResponseError({ response }) {
			const status = response?.status ?? 0;
			const data = response?._data;
			const problem = (data ?? {});
			const message
				= problem.title
					|| problem.detail
					|| (status ? `HTTP ${status}` : 'Network error');

			throw new Error(message);
		},
	});

	interface RetryFlag { _retried?: boolean }

	function request<T>(url: string, opts?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function request<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		opts: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	async function request<T, R extends ResponseType = 'json'>(
		url: string,
		opts: (FetchOptions<R> & RetryFlag) = {} as FetchOptions<R>,
	): Promise<MappedResponseType<R, T>> {
		return await core<T, R>(url, opts);
	}

	function get<T>(url: string, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function get<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function get(url: string, opt?: any) {
		return request(url, { ...opt, method: 'GET' } as any);
	}

	function post<T, B = unknown>(url: string, body?: B, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function post<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string,
		body: B,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function post(url: string, body?: any, opt?: any) {
		return request(url, { ...opt, method: 'POST', body } as any);
	}

	function put<T, B = unknown>(url: string, body?: B, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function put<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string,
		body: B,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function put(url: string, body?: any, opt?: any) {
		return request(url, { ...opt, method: 'PUT', body } as any);
	}

	function patch<T, B = unknown>(url: string, body?: B, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function patch<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string,
		body: B,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function patch(url: string, body?: any, opt?: any) {
		return request(url, { ...opt, method: 'PATCH', body } as any);
	}

	function del<T>(url: string, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function del<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function del(url: string, opt?: any) {
		return request(url, { ...opt, method: 'DELETE' } as any);
	}

	function upload<T>(url: string, form: FormData, opt?: (FetchOptions<'json'> & RetryFlag)): Promise<T>;
	function upload<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		form: FormData,
		opt: (FetchOptions<R> & RetryFlag)
	): Promise<MappedResponseType<R, unknown>>;
	function upload(url: string, form: FormData, opt?: any) {
		const method = opt?.method ?? 'POST';
		return request(url, { ...opt, method, body: form } as any);
	}

	const apiModule: ApiModule = {
		fetch: request,
		get,
		post,
		put,
		patch,
		delete: del,
		upload,
	};

	return { provide: { apiModule } };
});
