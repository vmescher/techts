<template>
	<div class="ui-title-row">
		<div class="ui-title-row__title">
			<slot />
		</div>

		<div class="ui-title-row__actions">
			<slot name="actions"></slot>
		</div>
	</div>
</template>

<style src="@ui/uiTitleRow/styles/ui-title-row.scss" scoped lang="scss" />
