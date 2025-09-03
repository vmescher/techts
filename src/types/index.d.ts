import type { ApiModule } from '~/types/api-module';
import type { DictionariesStore } from '~/types/dictionaries-store';

declare module '#app' {
	interface NuxtApp {
		$apiModule: ApiModule;
		$dictionariesStore: DictionariesStore;
	}
}

declare module 'nuxt/app' {
	interface NuxtApp {
		$apiModule: ApiModule;
		$dictionariesStore: DictionariesStore;
	}
}

declare module 'vue' {
	interface ComponentCustomProperties {
		$apiModule: ApiModule;
		$dictionariesStore: DictionariesStore;
	}
}

export {};
