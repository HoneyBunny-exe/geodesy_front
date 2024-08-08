<template>
	<div>
		<div v-for="button in buttons">
			<button>{{ button.text }}</button>
		</div>
	</div>
</template>

<script>
import general_button from "../_general/general_button.vue";
export default {
	components: {
		gbutton: general_button,
	},
};
</script>

<style></style>
