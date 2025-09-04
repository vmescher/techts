export enum UiIconSize {
	S16 = 16,
	S20 = 20,
	S22 = 22,
	S24 = 24,
	S32 = 32,
	S48 = 48,
}

export interface UiIconProps {
	name: string;
	size?: UiIconSize;
	label?: string;
	decorative?: boolean;
}
