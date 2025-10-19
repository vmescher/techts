<template>
	<div class="ui-input" :class="classNames">
		<UiCaption
			v-if="labelKey"
			:tag="labelTag"
			:for="fieldId"
			:size="SizeType.xs"
			:weight="WeightType.regular"
			class="ui-input__label"
		>
			{{ t(labelKey) }}
		</UiCaption>
		<div class="ui-input__field">
			<input
				v-bind="$attrs"
				:id="fieldId"
				v-model="value"
				:autocomplete
				:name
				:required
				:disabled
				:readonly
				class="ui-input__input"
			/>
		</div>
		<UiCaption
			v-if="errorMessage"
			:size="SizeType.xs"
			:weight="WeightType.regular"
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

	const { name, labelTag = 'label', id, errorMessage, disabled, readonly, autocomplete = 'off' } = defineProps<UiInputProps>();

	const value = defineModel<string | number | undefined>();

	const { t } = useI18n();

	const fieldId = computed(() => id ?? `${name}-${useId()}`);

	const classNames = computed(() => ({
		'ui-input--error': Boolean(errorMessage),
		'ui-input--disabled': Boolean(disabled),
		'ui-input--readonly': Boolean(readonly),
	}));
</script>

<style src="@ui/uiInput/styles/ui-input.scss" scoped lang="scss" />
