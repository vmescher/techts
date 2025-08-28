import type { RouteLocation } from '#vue-router';

export interface UiLinkProps {
	to?: RouteLocation | string;
	isExternalLink?: boolean;
	target?: '_blank' | '_self';
}

export type UiLinkComponent = 'a' | Component | 'div';

export type UiLinkAttributes = { href: UiLinkProps['to']; target: string } | { to: UiLinkProps['to'] } | undefined;
