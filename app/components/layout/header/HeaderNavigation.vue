<template>
	<nav class="header-navigation">
		<UiLink class="header-navigation__link" to="/">
			<template #icon-left>
				<UiIcon name="menu" :size="UiIconSize.S24" />
			</template>
			{{ t('header_nav_about') }}
		</UiLink>
	</nav>
</template>

<script setup lang="ts">
	import { UiIconSize } from '@ui/uiIcon/types';

	await loadDictionary('header');
	const { t } = useI18n();
</script>

<style scoped>

</style>
