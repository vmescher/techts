export default defineEventHandler(async (event) => {
	const { locale, ns } = getRouterParams(event);

	const key = `assets:server:locales/${locale}/${ns}.json`;
	try {
		const storage = useStorage();
		const raw = await storage.getItem(key);

		if (!raw)
			return {};

		if (typeof raw === 'object' && !(raw instanceof Uint8Array)) {
			return raw;
		}

		if (typeof raw === 'string') {
			return JSON.parse(raw);
		}

		if (raw instanceof Uint8Array) {
			const text = new TextDecoder().decode(raw);
			return JSON.parse(text);
		}
	}
	catch {
		return {};
	}
});
