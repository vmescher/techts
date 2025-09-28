<template>
	<div
		ref="dropdownEl"
		class="ui-dropdown"
		v-bind="dropdownAttrs"
		:class="{ 'ui-dropdown--open': isActive }"
	>
		<div class="ui-dropdown__trigger">
			<slot
				name="trigger"
				:is-active="isActive"
				:toggle="toggle"
				:attrs="triggerAttrs"
			>
				<UiLink v-bind="triggerAttrs" is-button>
					{{ isActive ? t('common_close') : t('common_menu') }}
				</UiLink>
			</slot>
		</div>

		<transition name="ui-dropdown-fade">
			<div
				v-show="isActive"
				:id="menuId"
				ref="menuEl"
				class="ui-dropdown__body"
				:class="menuClasses"
				role="menu"
				@keydown.esc.prevent.stop="close"
			>
				<slot />
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
	import type { UiDropdownProps } from '@ui/uiDropdown/types';
	import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

	const { clickable, closeOnClickOutside = true, instantlyOpen } = defineProps<UiDropdownProps>();

	const emit = defineEmits<{
		(e: 'open'): void;
		(e: 'close'): void;
		(e: 'update:open', value: boolean): void;
	}>();

	const { t } = useI18n();

	const isActive = ref(false);
	const isClosing = ref(false);
	let closeTimeout: ReturnType<typeof setTimeout> | null = null;

	const dropdownEl = useTemplateRef('dropdownEl');
	const menuEl = useTemplateRef('menuEl');

	const menuId = useId();
	const triggerId = useId();

	const isMenuLeftSided = ref(true);

	const menuClasses = computed(() => ({
		'ui-dropdown__body--left-side': unref(isMenuLeftSided),
		'ui-dropdown__body--right-side': !unref(isMenuLeftSided),
	}));

	const openMenu = (opts?: { focusFirst?: boolean }) => {
		if (isActive.value) {
			return;
		}

		isActive.value = true;

		emit('open');
		emit('update:open', true);

		nextTick(() => {
			if (opts?.focusFirst && menuEl.value) {
				const firstFocusable = menuEl.value.querySelector<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
				);
				firstFocusable?.focus();
			}
		});
	};

	const close = () => {
		if (!isActive.value) {
			return;
		}

		isActive.value = false;

		emit('close');
		emit('update:open', false);
	};

	const toggle = () => {
		if (isActive.value) {
			close();
			return;
		}

		openMenu();
	};

	const onDocumentPointerDown = (e: PointerEvent) => {
		if (!closeOnClickOutside) {
			return;
		}

		const target = e.target as Node;

		if (!dropdownEl.value?.contains(target)) {
			close();
		}
	};

	const dropdownAttrs = computed(() => ({
		onMouseenter: !clickable
			? () => {
				if (!clickable) {
					if (!isActive.value) {
						openMenu();
					}

					if (isClosing.value) {
						isClosing.value = false;

						if (closeTimeout) {
							clearTimeout(closeTimeout);
						}
					}
				}
			}
			: undefined,
		onMouseleave: !clickable
			? () => {
				if (!clickable && isActive.value) {
					isClosing.value = true;

					if (closeTimeout) {
						clearTimeout(closeTimeout);
					}

					closeTimeout = setTimeout(() => {
						close();
					}, 500);
				}
			}
			: undefined,
	}));

	const triggerAttrs = computed(() => ({
		'id': triggerId,
		'aria-haspopup': 'menu',
		'aria-expanded': String(isActive.value),
		'aria-controls': menuId,
		'type': 'button',
		'onClick': clickable
			? (e: MouseEvent) => {
				e.stopPropagation();
				toggle();
			}
			: undefined,
		'onKeydown': (e: KeyboardEvent) => {
			if (!isActive.value && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
				e.preventDefault();
				e.stopPropagation();
				openMenu({ focusFirst: true });
			}
		},
	}));

	const setMenuPosition = () => {
		if (!dropdownEl.value) {
			return;
		}

		const dropdownRect = dropdownEl.value.getBoundingClientRect();

		const spaceRight = window.innerWidth - dropdownRect.right;
		const spaceLeft = dropdownRect.left;

		isMenuLeftSided.value = !(spaceRight < 200 && spaceLeft >= 200);
	};

	onMounted(() => {
		setMenuPosition();

		if (instantlyOpen) {
			openMenu();
		}

		document.addEventListener('pointerdown', onDocumentPointerDown);
		window.addEventListener('resize', setMenuPosition);
	});

	onBeforeUnmount(() => {
		document.removeEventListener('pointerdown', onDocumentPointerDown);
		window.removeEventListener('resize', setMenuPosition);
	});
</script>

<style src="@ui/uiDropdown/styles/ui-dropdown.scss" scoped lang="scss" />
