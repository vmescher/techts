import type { FetchOptions, MappedResponseType, ResponseType } from 'ofetch';

/* eslint-disable ts/method-signature-style */
export interface ApiModule {
	fetch<T>(url: string, opts?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	fetch<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		opts: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	get<T>(url: string, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	get<R extends Exclude<ResponseType, 'json'>>(
		url: string,
		opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	post<T, B = unknown>(url: string, body?: B, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	post<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string, body: B, opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	put<T, B = unknown>(url: string, body?: B, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	put<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string, body: B, opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	patch<T, B = unknown>(url: string, body?: B, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	patch<R extends Exclude<ResponseType, 'json'>, B = unknown>(
		url: string, body: B, opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	delete<T>(url: string, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	delete<R extends Exclude<ResponseType, 'json'>>(
		url: string, opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;

	upload<T>(url: string, form: FormData, opt?: FetchOptions<'json'> & { _retried?: boolean }): Promise<T>;
	upload<R extends Exclude<ResponseType, 'json'>>(
		url: string, form: FormData, opt: FetchOptions<R> & { _retried?: boolean }
	): Promise<MappedResponseType<R, unknown>>;
}
