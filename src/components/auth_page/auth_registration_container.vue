<template>
	<div id="container">
		<p>{{ this.$constants.STRING.WELCOME }}</p>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.FIRST_NAME"
		></ainput>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.SECOND_NAME"
		></ainput>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.THIRD_NAME"
		></ainput>

		<!-- чекбокс - выбор пола -->

		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.EMAIL"
		></ainput>
		<ainput
			:isConfident="true"
			:underText="this.$constants.STRING.PASSWORD"
		></ainput>
		<agreement :isButtonClickedCB="isAgreementClicked"></agreement>
		<general_button
			:text="this.$constants.STRING.REGISTRATION"
		></general_button>
		<general_button :text="this.$constants.STRING.ENTER"></general_button>
	</div>
</template>

<script>
import agreement from "./agreement.vue";
import auth_input from "./auth_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	data() {
		return {
			isAgree: false,
		};
	},
	components: {
		ainput: auth_input,
		agreement,
		general_button,
	},
	methods: {
		isAgreementClicked() {
			// TODO
		},
	},
};
</script>

<style></style>
