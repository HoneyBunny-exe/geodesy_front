<template>
	<button v-on="onClickCB">{{ text }}</button>
</template>

<script>
export default {
	props: {
		onClickCB: {
			type: Function,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
