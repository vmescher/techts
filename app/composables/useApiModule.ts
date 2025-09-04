export function useApiModule() {
	const { $apiModule } = useNuxtApp();

	return $apiModule;
}
