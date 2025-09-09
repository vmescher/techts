import type { RouteLocationRaw } from '#vue-router';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'vue';

export type UiButtonComponent = 'button' | 'a' | typeof import('#components')['NuxtLink'] | Component;

export interface UiButtonProps {
	tag?: UiButtonComponent;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	to?: RouteLocationRaw | string;
	target?: '_self' | '_blank';
	attrs?: Record<string, any> | AnchorHTMLAttributes | ButtonHTMLAttributes;
	theme?: 'default' | 'white';
}
