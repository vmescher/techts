<template>
	<section :id="sectionId" class="callback-section" :aria-labelledby="`${sectionId}-title`">
		<div class="callback-section__description">
			<UiCaption
				:id="`${sectionId}-title`"
				:size="SizeType.xxl"
				tag="h2"
				:weight="WeightType.semibold"
				class="callback-section__title"
			>
				Бесплатная консультация
			</UiCaption>

			<UiCaption tag="p" :size="SizeType.m" :weight="WeightType.regular" class="callback-section__text">
				Подберем ремень под вашу задачу.
				Введите ваш номер телефона, чтобы мы могли связаться с вами.
			</UiCaption>
		</div>

		<CallbackForm class="callback-section__form" />

		<div class="callback-section__contact">
			<UiCaption
				:size="SizeType.m"
				:weight="WeightType.regular"
			>
				Или свяжитесь с нами по номеру:
			</UiCaption>
			<UiLink
				class="callback-section__phone"
				to="tel:+79876543210"
				:theme="ThemeType.primary"
				:size="SizeType.xl"
				:weight="WeightType.semibold"
				is-external-link
			>
				<template #icon-left>
					<UiIcon name="phone" :size="UiIconSize.S28" />
				</template>

				+7 987 654-32-10
			</UiLink>
		</div>
	</section>
</template>

<script setup lang="ts">
	import CallbackForm from '@components/forms/callback/CallbackForm.vue';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';

	defineProps<{
		sectionId: string;
		titleKey?: string;
		textKey?: string;
	}>();
</script>

<style src="@components/main/callbackSection/styles/callback-section.scss" scoped lang="scss" />
