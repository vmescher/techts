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
				{{ t(titleKey) }}
			</UiCaption>

			<UiCaption tag="p" :size="SizeType.m" :weight="WeightType.regular" class="callback-section__text">
				{{ t(textKey) }}
			</UiCaption>
		</div>

		<CallbackForm class="callback-section__form" />

		<div class="callback-section__contact">
			<UiCaption
				:size="SizeType.m"
				:weight="WeightType.regular"
			>
				{{ t("callback_section_contact_label") }}
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
	import CallbackForm from '@components/main/callbackSection/CallbackForm.vue';
	import { SizeType } from '@ui/constants/SizeType';
	import { ThemeType } from '@ui/constants/ThemeType';
	import { WeightType } from '@ui/constants/WeightType';
	import { UiIconSize } from '@ui/uiIcon/types';

	const { sectionId = 'callback', titleKey = 'callback_section_title', textKey = 'callback_section_subtitle' } = defineProps<{
		sectionId?: string;
		titleKey?: string;
		textKey?: string;
	}>();

	const { t } = useI18n();

	await loadDictionary('sections');
</script>

<style src="@components/main/callbackSection/styles/callback-section.scss" scoped lang="scss" />
