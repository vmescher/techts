<template>
	<div class="footer-bottom">
		<UiCaption tag="small" class="footer-bottom__copyright">
			{{ t('footer_copyright') }}
		</UiCaption>

		<UiLink
			to="/public"
			is-external-link
			:theme="ThemeType.whiteLight"
			class="footer-bottom__policy"
		>
			{{ t('footer_privacy') }}
		</UiLink>

		<UiCaption tag="p" class="footer-bottom__developer">
			<i18n-t
				keypath="footer_developer"
				scope="global"
			>
				<template #email>
					<UiLink
						to="mailto:davletshinaarts@gmail.com"
						:additional-attrs="{
							rel: 'nofollow',
						}"
						class="footer-bottom__email"
						:theme="ThemeType.whiteLight"
						is-external-link
					>
						davletshinaarts@gmail.com
					</UiLink>
				</template>
			</i18n-t>
		</UiCaption>
	</div>
</template>

<script setup lang="ts">
	import { ThemeType } from '@ui/constants/ThemeType';

	const { t } = useI18n();
</script>

<style src="@components/layout/footer/components/footerBottom/style/footer-bottom.scss" scoped lang="scss" />
