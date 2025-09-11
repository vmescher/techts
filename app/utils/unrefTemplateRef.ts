import type { TemplateRef } from 'vue';

export function unrefTemplateRef(templateRef: TemplateRef<HTMLElement>): HTMLElement | undefined {
	const refValue = unref(templateRef);
	if (!refValue) {
		return;
	}

	return refValue;
}
