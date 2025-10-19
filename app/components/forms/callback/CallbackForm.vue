<template>
	<form class="callback-form" @submit="onSubmit">
		<InputText
			label-key="Ваше имя (необязательно)"
			name="firstName"
			class="callback-form__field"
		/>

		<InputPhone label-key="Ваш телефон" class="callback-form__field" />

		<button type="submit" class="callback-form__submit">
			Submit
		</button>
	</form>
</template>

<script setup lang="ts">
	import InputPhone from '@components/forms/inputs/components/InputPhone.vue';
	import InputText from '@components/forms/inputs/components/InputText.vue';
	import * as yup from 'yup';

	const { t } = useI18n();

	const schema = yup.object({
		firstName: yup.string().required(),
		phone: yup.string().required().length(18, t('validation_phone')),
	});

	const { handleSubmit } = useForm({
		validationSchema: schema,
		name: 'callbackForm',
	});

	const onSubmit = handleSubmit((values) => {
		alert(JSON.stringify(values, null, 2));
	});
</script>

<style scoped lang="scss">

</style>
