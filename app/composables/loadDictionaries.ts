export async function loadDictionaries(namespaces: string[]) {
	const promises = namespaces.map(ns => loadDictionary(ns));
	await Promise.all(promises);
}
