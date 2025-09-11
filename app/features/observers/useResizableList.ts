import type { TemplateRef } from 'vue';

export function useResizableList<T>({
	target,
	items,
	minVisibleAmount = 0,
}: {
	target: TemplateRef<HTMLElement>;
	items: MaybeRef<T[]>;
	minVisibleAmount?: MaybeRef<number>;
}) {
	const visibleAmount = ref(0);

	const maxItemsAmount = computed(() => unref(items).length);
	const visibleItems = computed(() => unref(items).slice(0, unref(visibleAmount)));
	const invisibleItems = computed(() => unref(items).slice(unref(visibleAmount)));

	const setVisibleAmount = (value: number) => {
		visibleAmount.value = value;
	};

	const getTargetEl = () => unrefTemplateRef(target);

	const getElementOffsetExact = (element: HTMLElement) => {
		const { right } = element.getBoundingClientRect();

		return Math.round(right * 10) / 10;
	};

	const getElementOffset = (element?: HTMLElement) => element ? getElementOffsetExact(element) : 0;

	const getMaxOffset = () => getElementOffset(getTargetEl());

	const getOffsetLastChild = () => {
		const targetEl = getTargetEl();

		if (!targetEl) {
			return 0;
		}

		const { lastElementChild } = targetEl;

		return getElementOffset(lastElementChild as HTMLElement);
	};

	const runTemporaryStyle = async (callback: () => any) => {
		const targetEl = getTargetEl();

		if (targetEl) {
			const tmpStyle = targetEl.style.overflow;

			targetEl.style.overflow = 'hidden';
			await callback();
			targetEl.style.overflow = tmpStyle;
		}
	};

	const growUntilFits = async () => {
		while (
			visibleAmount.value < unref(maxItemsAmount)
			&& getOffsetLastChild() <= getMaxOffset()
		) {
			setVisibleAmount(visibleAmount.value + 1);
			await nextTick();
		}

		if (getOffsetLastChild() > getMaxOffset()) {
			setVisibleAmount(visibleAmount.value - 1);
		}
	};

	const shrinkUntilFits = async () => {
		while (
			visibleAmount.value > unref(minVisibleAmount)
			&& getOffsetLastChild() > getMaxOffset()
		) {
			setVisibleAmount(visibleAmount.value - 1);
			await nextTick();
		}
	};

	const updateAmount = async () => {
		await nextTick();
		await runTemporaryStyle(async () => {
			const offset = getOffsetLastChild();
			const max = getMaxOffset();

			if (offset <= max) {
				await growUntilFits();
			}
			else {
				await shrinkUntilFits();
			}
		});
	};

	const debouncedUpdateAmount = debounce(updateAmount, 200, {
		leading: false,
		trailing: true,
	});

	watch(() => unref(items).length, () => debouncedUpdateAmount());

	onMounted(async () => {
		window.addEventListener('resize', debouncedUpdateAmount);
		await updateAmount();
	});

	onUnmounted(() => {
		window.removeEventListener('resize', debouncedUpdateAmount);
	});

	return {
		visibleItems,
		invisibleItems,
	};
}
