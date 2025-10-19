import type { AutoComplete } from '@ui/uiInput/constants/AutoComplete';

export interface UiInputProps {
	name: string;
	id?: string;
	labelKey?: string;
	labelTag?: 'label' | 'span';
	errorMessage?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	autocomplete?: AutoComplete;
}
