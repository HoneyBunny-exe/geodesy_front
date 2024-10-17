<template>
	<div class="popup_content">
		<p>{{ message }}</p>
	</div>
</template>
<style scoped></style>
<script>
export default {
	props: {
		message: {
			type: String,
		},
	},
};
</script>
