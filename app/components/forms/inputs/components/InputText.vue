<template>
	<UiInput
		v-model="value"
		:name
		:error-message="getErrorMessage"
		type="text"
		:autocomplete="AutoComplete.GIVEN_NAME"
		class="callback-form__field"
	/>
</template>

<script setup lang="ts">
	import { AutoComplete } from '@ui/uiInput/constants/AutoComplete';

	const { name } = defineProps<{
		name: string;
	}>();

	const { value, errorMessage, meta } = useField(() => name);

	const getErrorMessage = computed(() => {
		return meta.touched ? errorMessage : '';
	});
</script>

<style scoped lang="scss">

</style>
