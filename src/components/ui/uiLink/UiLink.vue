<template>
	<component :is="component" v-bind="attributes" class="ui-link">
		<slot />
	</component>
</template>

<script setup lang="ts">
	import type { UiLinkAttributes, UiLinkComponent, UiLinkProps } from '~components/ui/uiLink/interfaces';
	import { NuxtLink } from '#components';

	const { isExternalLink, to, target } = defineProps<UiLinkProps>();

	const component = computed<UiLinkComponent>(() => {
		if (isExternalLink) {
			return 'a';
		}

		if (to) {
			return NuxtLink;
		}

		return 'div';
	});

	const attributes = computed<UiLinkAttributes>(() => {
		if (isExternalLink) {
			return { href: to, target: target ?? '_blank' };
		}

		if (to) {
			return { to, target };
		}

		return undefined;
	});
</script>

<style scoped>

</style>
