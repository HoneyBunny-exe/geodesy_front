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
	height: 100%;
	aspect-ratio: 1/1;
}
@media (hover: none) {
	img {
		height: 45%;
		width: 45%;
		margin: auto;
	}
	p {
		display: none;
	}
}
@media (pointer: corse) or (pointer: fine) {
	img {
		display: none;
	}
}
</style>
