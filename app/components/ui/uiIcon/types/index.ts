export enum UiIconSize {
	S16 = 'xs',
	S20 = 's',
	S22 = 'm',
	S24 = 'l',
	S32 = 'xl',
	S48 = 'xxl',
}

export interface UiIconProps {
	name: string;
	size?: UiIconSize;
	label?: string;
	decorative?: boolean;
}
