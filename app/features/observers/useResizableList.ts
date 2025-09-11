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

	const updatePlusChild = async () => {
		const maxOffset = getMaxOffset();
		const offset = getOffsetLastChild();
		const newVisibleAmount = unref(visibleAmount) + 1;

		if (offset <= maxOffset && newVisibleAmount <= unref(maxItemsAmount)) {
			setVisibleAmount(newVisibleAmount);
			await nextTick();
			await updatePlusChild();
		}
	};

	const updateMinusChild = async () => {
		const maxOffset = getMaxOffset();
		const offset = getOffsetLastChild();
		const newVisibleAmount = unref(visibleAmount) - 1;

		if (offset > maxOffset && newVisibleAmount >= unref(minVisibleAmount)) {
			setVisibleAmount(newVisibleAmount);
			await nextTick();
			await updateMinusChild();
		}
	};

	const updateAmount = async () => {
		await nextTick();
		await runTemporaryStyle(async () => {
			await updatePlusChild();
			await updateMinusChild();
		});
	};

	const debouncedUpdateAmount = debounce(updateAmount, 200, {
		leading: false,
		trailing: true,
	});

	watch(() => unref(items).length, () => debouncedUpdateAmount());

	onMounted(async () => {
		window.addEventListener('resize', debouncedUpdateAmount);
		await debouncedUpdateAmount();
	});

	onUnmounted(() => {
		window.removeEventListener('resize', debouncedUpdateAmount);
	});

	return {
		visibleItems,
		invisibleItems,
	};
}
