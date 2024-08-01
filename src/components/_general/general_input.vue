<template>
	<div>
		<input :placeholder="placeholder" />
	</div>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>