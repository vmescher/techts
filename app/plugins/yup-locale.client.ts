import { setLocale } from 'yup';

export default defineNuxtPlugin(() => {
	const { $i18n } = useNuxtApp();

	const { t } = $i18n;

	setLocale({
		mixed: {
			required: () => t('validation_required'),
		},
	});
});
