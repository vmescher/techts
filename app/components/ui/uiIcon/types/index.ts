export enum UiIconSize {
	S16 = 'xs',
	S20 = 's',
	S22 = 'm',
	S24 = 'l',
	S28 = 'xl',
	S32 = 'xxl',
	S48 = 'xxxl',
}

export interface UiIconProps {
	name: string;
	size?: UiIconSize;
	label?: string;
	decorative?: boolean;
}
