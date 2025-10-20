<template>
	<label
		class="ui-checkbox"
		:title
		:class="classNames"
	>
		<input
			:id="inputId"
			v-model="modelValue"
			type="checkbox"
			:disabled="disabled || readonly"
			:name
			:readonly
			class="ui-checkbox__input"
		>

		<span class="ui-checkbox__checkmark" />

		<span class="input-check__label">
			{{ text }}
		</span>
	</label>
</template>

<script setup lang="ts">
	const classNames = computed(() => ({
		'ui-checkbox--error': Boolean(errorMessage),
		'ui-checkbox--disabled': Boolean(disabled),
		'ui-checkbox--readonly': Boolean(readonly),
	}));
</script>

<style scoped lang="scss">

</style>
