import type { RouteLocationRaw } from '#vue-router';
import type { AnchorHTMLAttributes } from 'vue';

export interface UiLinkProps {
	to?: RouteLocationRaw | string;
	isExternalLink?: boolean;
	isButton?: boolean;
	target?: '_blank' | '_self';
	disabled?: boolean;
	theme?: 'default' | 'white';
	additionalAttrs?: AnchorHTMLAttributes;
}

export type UiLinkComponent = 'a' | typeof import('#components')['NuxtLink'] | 'div' | 'button';

interface BaseAttrs extends AnchorHTMLAttributes {
	'aria-disabled'?: 'true';
	'tabindex'?: number;
}

interface AnchorAttrs extends BaseAttrs {
	href: string;
	target: '_blank' | '_self';
	rel?: string;
}

interface NuxtLinkAttrs extends BaseAttrs {
	to: RouteLocationRaw | string;
	target?: '_blank' | '_self';
}

interface DivAttrs extends BaseAttrs {}

export type UiLinkAttributes = AnchorAttrs | NuxtLinkAttrs | DivAttrs;
