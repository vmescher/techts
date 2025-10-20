<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
	await loadDictionaries(['common', 'validation', 'forms']);
</script>
