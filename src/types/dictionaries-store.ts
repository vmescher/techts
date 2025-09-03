export interface DictionariesStore {
	inflight: Map<string, Promise<void>>;
	loaded: Map<string, Set<string>>;
}

export type Dictionary = Record<string, string>;
