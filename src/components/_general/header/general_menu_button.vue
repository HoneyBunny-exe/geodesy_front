<template>
	<div id="container">
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

<style scoped>
#container {
	display: flex;
	justify-content: center;
}
@media (min-width: 1024px) {
	img {
		display: none;
	}
}
@media (max-width: 1024px) {
	img {
		width: 23px;
	}
	p {
		display: none;
	}
}
</style>
