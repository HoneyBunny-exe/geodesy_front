<template>
	<div>
		<div>{{ underText }}</div>
		<slot name="visibleButton"></slot>
		<input />
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
	},
};
</script>

<style></style>
