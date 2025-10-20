<template>
	<div class="ui-input" :class="classNames">
		<UiCaption
			v-if="fieldLabel"
			:tag="labelTag"
			:for="fieldId"
			:size="SizeType.xs"
			:weight="WeightType.regular"
			class="ui-input__label"
		>
			{{ fieldLabel }}
		</UiCaption>
		<div class="ui-input__field">
			<input
				v-bind="$attrs"
				:id="fieldId"
				v-model="value"
				:placeholder="fieldPlaceholder"
				:autocomplete
				:name
				:type
				:disabled
				:readonly
				:aria-required="required || undefined"
				:aria-invalid="Boolean(errorMessage) || undefined"
				:aria-describedby="describedBy"

				class="ui-input__input"
			/>
		</div>
		<UiCaption
			v-if="errorMessage"
			:id="errorId"
			:size="SizeType.xs"
			:weight="WeightType.regular"
			role="alert"
			aria-live="polite"
			class="ui-input__error"
		>
			{{ errorMessage }}
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import type { UiInputProps } from '@ui/uiInput/types';
	import { SizeType } from '@ui/constants/SizeType';
	import { WeightType } from '@ui/constants/WeightType';

	const { name, type = 'text', labelTag = 'label', labelKey, id, errorMessage, disabled, readonly, autocomplete = 'off', placeholder, placeholderKey, required } = defineProps<UiInputProps>();

	const value = defineModel<string | number | undefined>();

	const { t } = useI18n();

	const fieldId = computed(() => id ?? `${name}-${useId()}`);
	const errorId = computed(() => `${fieldId.value}-error`);

	const describedBy = computed(() => errorMessage ? errorId.value : undefined);

	const fieldPlaceholder = computed(() => {
		if (placeholderKey) {
			return t(placeholderKey);
		}
		return placeholder ?? '';
	});

	const fieldLabel = computed(() => {
		if (!labelKey) {
			return '';
		}

		return t(labelKey) + (!required ? ` (${t('unrequired_field_note')})` : '');
	});

	const classNames = computed(() => ({
		'ui-input--error': Boolean(errorMessage),
		'ui-input--disabled': Boolean(disabled),
		'ui-input--readonly': Boolean(readonly),
	}));
</script>

<style src="@ui/uiInput/styles/ui-input.scss" scoped lang="scss" />
