<template>
	<div>
		<div>{{ underText }}</div>
		<slot name="visibleButton"></slot>
		<input :placeholder="placeholder" />
	</div>
</template>

<script>
export default {
	props: {
		underText: {
			type: String,
			required: false,
		},
		isConfident: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			required: false,
		},
	},
};
</script>

<style></style>
