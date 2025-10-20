<template>
	<FormTemplate class="callback-form__template" @submit="onSubmit">
		<InputText
			label-key="input_name_label"
			placeholder-key="input_name_placeholder"
			name="firstName"
		/>
		<InputPhone
			label-key="input_phone_label"
			placeholder-key="input_phone_placeholder"
			required
		/>

		<template #agreement>
			<UiCaption :size="SizeType.xs" :weight="WeightType.regular">
				<i18n-t keypath="form_agreement_text" scope="global">
					<template #terms>
						<a href="/terms" target="_blank">{{ t('form_agreement_terms') }}</a>
					</template>
					<template #agreement>
						<a href="/privacy" target="_blank">{{ t('form_agreement_privacy') }}</a>
					</template>
				</i18n-t>
			</UiCaption>
		</template>

		<template #submit>
			<UiButton type="submit" :theme="ThemeType.primaryDark" class="callback-form__submit">
				{{ t('callback_section_submit_button') }}
			</UiButton>
		</template>
	</FormTemplate>
</template>

<script setup lang="ts">
	import FormTemplate from '@components/forms/formTemplate/FormTemplate.vue';
	import InputPhone from '@components/forms/inputs/components/InputPhone.vue';
	import InputText from '@components/forms/inputs/components/InputText.vue';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';
	import * as yup from 'yup';

	const { t } = useI18n();

	const schema = yup.object({
		firstName: yup.string().max(55),
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
