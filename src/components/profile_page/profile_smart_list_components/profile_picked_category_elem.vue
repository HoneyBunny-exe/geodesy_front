<template>
	<div>
		<p>{{ this.data }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.dataProp,
		};
	},
	props: {
		dataProp: {
			type: String,
			required: true,
		},
	},
};
</script>

<style></style>
