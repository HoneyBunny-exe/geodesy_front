<template>
	<div>
		<img :src="imageURLProp" alt="NoImage" />
		<p>{{ buttonNameProp }}</p>
	</div>
</template>

<script>
import { store } from "@/store";

export default {
	props: {
		imageURLProp: {
			type: String,
		},
		buttonNameProp: {
			type: String,
			required: true,
		},
		clickCBProp: {
			type: Function,
			required: true,
		},
	},
};
</script>

<style scoped></style>
