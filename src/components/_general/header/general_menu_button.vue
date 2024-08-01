<template>
	<div>
		<img :src="imageURLProp" alt="NoImage" />
		<p>{{ buttonNameProp }}</p>
	</div>
</template>

<script>
export default {
	props: {
		imageURLProp: {
			type: String,
		},
		buttonNameProp: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped></style>
