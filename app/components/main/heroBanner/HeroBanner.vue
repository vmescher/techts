<template>
	<section class="hero-banner" aria-labelledby="hero-title">
		<div class="hero-banner__content">
			<UiCaption
				id="hero-title"
				tag="h1"
				:size="SizeType.xxxxl"
				:weight="WeightType.semibold"
				class="hero-banner__title"
			>
				{{ t('main_hero_banner_title') }}
			</UiCaption>

			<UiCaption
				tag="p"
				:size="SizeType.m"
				class="hero-banner__text"
			>
				{{ t('main_hero_banner_text') }}
			</UiCaption>

			<UiButton
				tag="NuxtLink"
				to="/catalog"
				:theme="ThemeType.white"
			>
				{{ t('main_hero_banner_btn') }}
			</UiButton>
		</div>

		<picture class="hero-banner__bg">
			<source
				srcset="/img/banners/hero-banner/hero-banner-desktop.webp 1x, /img/banners/hero-banner/hero-banner-desktop_2x.webp 2x"
				type="image/webp"
			/>
			<img
				src="/img/banners/hero-banner/hero-banner-desktop.jpg"
				srcset="/img/banners/hero-banner/hero-banner-desktop_2x.jpg"
				:alt="t('main_hero_banner_img_alt')"
				class="hero-banner__img"
			/>
		</picture>
	</section>
</template>

<script setup lang="ts">
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';

	await loadDictionary('banners');

	const { t } = useI18n();
</script>

<style src="@components/main/heroBanner/styles/hero-banner.scss" scoped lang="scss" />
