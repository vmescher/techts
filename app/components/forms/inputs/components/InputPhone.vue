<template>
	<UiInput
		v-model="value"
		v-mask="phoneMask"
		name="phone"
		:placeholder
		:error-message="getErrorMessage"
		type="tel"
		:autocomplete="AutoComplete.TEL"
		class="callback-form__field"
	/>
</template>

<script setup lang="ts">
	import { phoneMask } from '@components/forms/inputs/constants/masks';
	import { AutoComplete } from '@ui/uiInput/constants/AutoComplete';

	const { placeholder = '+7 (___) ___-__-__' } = defineProps<{
		placeholder?: string;
	}>();

	const { value, errorMessage, meta } = useField(() => 'phone');

	const getErrorMessage = computed(() => {
		return meta.touched ? errorMessage : '';
	});
</script>

<style scoped lang="scss">

</style>
