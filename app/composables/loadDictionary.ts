import type { Dictionary } from '~/types/dictionaries-store';

export async function loadDictionary(namespace: string) {
	const { $apiModule, $dictionariesStore } = useNuxtApp();
	const { inflight, loaded } = $dictionariesStore;

	const { locale, mergeLocaleMessage } = useI18n();
	const localeAtStart = locale.value;
	const key = `${locale.value}:${namespace}`;

	if (inflight.has(key))
		return inflight.get(key);

	const p = (async () => {
		const set = loaded.get(localeAtStart) ?? new Set<string>();
		loaded.set(localeAtStart, set);

		if (set.has(namespace))
			return;

		try {
			const dictionary = await $apiModule.get<Dictionary>(
				`/api/translations/${localeAtStart}/${namespace}`,
			);

			if (locale.value !== localeAtStart)
				return;

			mergeLocaleMessage(locale.value, dictionary);
			set.add(namespace);
		}
		catch (e) {
			console.error(e);
		}
		finally {
			inflight.delete(key);
		}
	})();

	inflight.set(key, p);
	return p;
}
