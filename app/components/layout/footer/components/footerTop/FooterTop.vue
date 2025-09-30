<template>
	<div class="footer-top">
		<FooterInfo class="footer-top__info" />
		<FooterNavigation class="footer-top__navigation" />
		<FooterContacts class="footer-top__contacts" />
		<FooterCallback class="footer-top__callback" />
	</div>
</template>

<script setup lang="ts">
	import FooterCallback from '@components/layout/footer/components/footerCallback/FooterCallback.vue';
	import FooterContacts from '@components/layout/footer/components/footerContacts/FooterContacts.vue';
	import FooterInfo from '@components/layout/footer/components/footerInfo/FooterInfo.vue';
	import FooterNavigation from '@components/layout/footer/components/footerNavigation/FooterNavigation.vue';
</script>

<style src="@components/layout/footer/components/footerTop/style/footer-top.scss" scoped lang="scss" />
