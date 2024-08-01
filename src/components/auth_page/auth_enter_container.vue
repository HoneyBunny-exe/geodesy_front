<template>
	<div id="container">
		<p>{{ this.$constants.STRING.ENTER }}</p>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.EMAIL"
		></ainput>
		<ainput
			:isConfident="true"
			:underText="this.$constants.STRING.PASSWORD"
		></ainput>
		<general_button :text="this.$constants.STRING.ENTER"></general_button>
		<general_button
			:text="this.$constants.STRING.FORGOT_PASSWORD"
		></general_button>
		<general_button
			:text="this.$constants.STRING.REGISTRATION"
		></general_button>
	</div>
</template>

<script>
import auth_input from "./auth_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	components: {
		ainput: auth_input,
		general_button,
	},
};
</script>

<style></style>
