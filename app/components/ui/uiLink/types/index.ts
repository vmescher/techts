import type { RouteLocationRaw } from '#vue-router';

export interface UiLinkProps {
	to?: RouteLocationRaw | string;
	isExternalLink?: boolean;
	target?: '_blank' | '_self';
	disabled?: boolean;
	theme?: 'default' | 'white';
}

export type UiLinkComponent = 'a' | typeof import('#components')['NuxtLink'] | 'div';

interface BaseAttrs {
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
