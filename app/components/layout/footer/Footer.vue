<template>
	<footer class="footer">
		<UiContainer fluid class="footer__container">
			<FooterTop class="footer__top" />
			<FooterBottom class="footer__bottom" />
		</UiContainer>
	</footer>
</template>

<script setup lang="ts">
	import FooterBottom from '@components/layout/footer/components/footerBottom/FooterBottom.vue';
	import FooterTop from '@components/layout/footer/components/footerTop/FooterTop.vue';

	await loadDictionary('footer');
</script>

<style src="@components/layout/footer/style/footer.scss" scoped lang="scss" />
