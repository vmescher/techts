<template>
	<div class="footer-callback">
		<UiCaption tag="p" :size="SizeType.xl" class="footer-callback__caption">
			{{ t('footer_callback_title') }}
		</UiCaption>

		<UiButton :theme="ThemeType.primary" class="footer-callback__btn">
			{{ t('footer_callback_btn') }}
		</UiButton>
	</div>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';

	const { t } = useI18n();
</script>

<style src="@components/layout/footer/components/footerCallback/styles/footer-callback.scss" scoped lang="scss" />
