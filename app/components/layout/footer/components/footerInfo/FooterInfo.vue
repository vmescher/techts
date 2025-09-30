<template>
	<div class="footer-info">
		<NuxtLink
			to="/"
			class="footer-info__logo"
		>
			<img src="/img/logo-light.svg" :alt="t('common_company_name')">
		</NuxtLink>

		<UiCaption
			tag="p"
			:size="SizeType.xl"
			:weight="WeightType.semibold"
			class="footer-info__title"
		>
			{{ t('common_company_name') }}
		</UiCaption>

		<UiCaption
			tag="p"
			class="footer-info__description"
		>
			{{ t('footer_company_description') }}
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { WeightType } from '@ui/constants/WeightType';

	const { t } = useI18n();
</script>

<style src="@components/layout/footer/components/footerInfo/styles/footer-info.scss" scoped lang="scss" />
