<template>
	<div id="container">
		<p class="title">{{ this.$constants.STRING.ENTER }}</p>
		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.EMAIL"
			:parentValue="email"
			@emailUpdateEvent="emailUpdate"
			:eventName="input1"
		></ainput>
		<ainput
			class="auth_input"
			:confident="`password`"
			:underText="this.$constants.STRING.PASSWORD"
			:parentValue="password"
			@passwordUpdateEvent="passwordUpdate"
			:eventName="input2"
		></ainput>
		<gbutton
			class="auth_button"
			:text="this.$constants.STRING.ENTER"
			@click="sendData"
		></gbutton>
		<gbutton
			class="auth_button"
			:text="this.$constants.STRING.FORGOT_PASSWORD"
			@click="goToForgotPassword"
		></gbutton>
		<gbutton
			class="auth_button"
			:text="this.$constants.STRING.REGISTRATION"
			@click="goToRegistration"
		></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import auth_input from "./auth_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	components: {
		ainput: auth_input,
		gbutton: general_button,
	},
	data() {
		return {
			email: "",
			password: "",

			input1: "emailUpdateEvent",
			input2: "passwordUpdateEvent",
		};
	},
	methods: {
		goToRegistration() {
			this.$emit("goToEvent", "arcontainer 1");
		},
		goToForgotPassword() {
			this.$emit("goToEvent", "afpcontainer 1");
		},
		emailUpdate(value) {
			this.email = value;
		},
		passwordUpdate(value) {
			this.password = value;
		},
		async sendData() {
			try {
				await axios({
					method: "post",
					url: "http://127.0.0.1:8000/api/v1/auth/",
					data: {
						email: this.email,
						password: this.password,
					},
				}).then((result) => {
					this.$store.commit(
						"setAccessToken",
						result.data.access_token
					);
					this.$store.commit(
						"setRefreshToken",
						result.data.refresh_token
					);
					this.$store.commit("setIsLoggedIn");

					// test
					console.log(this.$store.getters.getAll);
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
	mounted() {
		document.getElementsByClassName("");
	},
};
</script>

<style>
#container {
	display: flex;
	flex-direction: column;
}
</style>
