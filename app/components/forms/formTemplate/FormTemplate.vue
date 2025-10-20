<template>
	<form class="form-template">
		<div v-if="$slots.default" class="form-template__fields">
			<slot></slot>
		</div>
		<div v-if="$slots.agreement" class="form-template__agreement">
			<slot name="agreement"></slot>
		</div>
		<div v-if="$slots.submit" class="form-template__submit">
			<slot name="submit"></slot>
		</div>
	</form>
</template>

<style src="@components/forms/formTemplate/styles/form-template.scss" scoped lang="scss" />
