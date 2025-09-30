import type { SizeType } from '@ui/constants/SizeType';
import type { WeightType } from '@ui/constants/WeightType';

export interface UiCaptionProps {
	tag?: string;
	size?: SizeType;
	weight?: WeightType;
	uppercase?: boolean;
	noWrap?: boolean;
	inline?: boolean;
}
