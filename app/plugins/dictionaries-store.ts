import type { DictionariesStore, Dictionary } from '~/types/dictionaries-store';

export default defineNuxtPlugin((nuxtApp) => {
	const { $apiModule, $i18n } = useNuxtApp();

	const store: DictionariesStore = {
		inflight: new Map<string, Promise<void>>(),
		loaded: new Map<string, Set<string>>(),
	};

	if (import.meta.client) {
		const i18n = $i18n;

		const merge = (locale: string, messages: Record<string, string>) =>
			i18n.mergeLocaleMessage(locale, messages);

		async function loadDictionaryFor(localeCode: string, ns: string) {
			const key = `${localeCode}:${ns}`;
			if (store.inflight.has(key))
				return store.inflight.get(key);

			const set = store.loaded.get(localeCode) ?? new Set<string>();
			store.loaded.set(localeCode, set);
			if (set.has(ns))
				return;

			const p = (async () => {
				try {
					const dict = await $apiModule.get<Dictionary>(
						`/api/translations/${localeCode}/${ns}`,
					);
					merge(localeCode, dict);
					set.add(ns);
				}
				catch (e) {
					console.error('[dict] load error', { localeCode, ns, e });
				}
				finally {
					store.inflight.delete(key);
				}
			})();

			store.inflight.set(key, p);
			return p;
		}

		nuxtApp.hook('i18n:beforeLocaleSwitch', async ({ oldLocale, newLocale }) => {
			const previouslyLoaded = store.loaded.get(oldLocale) ?? new Set<string>();
			const newLocaleDictionaryNamespaces = store.loaded.get(newLocale) ?? new Set<string>();

			const namespacesToLoad = Array.from(previouslyLoaded).filter(namespace => !newLocaleDictionaryNamespaces.has(namespace));

			if (namespacesToLoad.length) {
				await Promise.all(namespacesToLoad.map(ns => loadDictionaryFor(newLocale, ns)));
			}
		});
	}

	return {
		provide: { dictionariesStore: store },
	};
});
