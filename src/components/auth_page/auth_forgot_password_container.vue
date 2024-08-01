<template>
	<div id="container">
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.EMAIL"
		></ainput>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.PASSWORD"
			:placeholder="this.$constants.STRING.NEW_PASSWORD"
		></ainput>
		<general_button :text="this.$constants.STRING.SEND"></general_button>
	</div>
</template>

<script>
import general_button from "../_general/general_button.vue";
import auth_input from "./auth_input.vue";
export default {
	components: {
		ainput: auth_input,
		general_button,
	},
};
</script>

<style></style>
