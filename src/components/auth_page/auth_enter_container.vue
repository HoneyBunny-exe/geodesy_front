<template>
	<div id="container">
		<p>{{ this.$constants.STRING.ENTER }}</p>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.EMAIL"
			:parentValue="email"
			@emailUpdateEvent="emailUpdate"
			:eventName="input1"
		></ainput>
		<ainput
			:isConfident="true"
			:underText="this.$constants.STRING.PASSWORD"
			:parentValue="password"
			@passwordUpdateEvent="passwordUpdate"
			:eventName="input2"
		></ainput>
		<gbutton
			:text="this.$constants.STRING.ENTER"
			@click="sendData"
		></gbutton>
		<gbutton :text="this.$constants.STRING.FORGOT_PASSWORD"></gbutton>
		<gbutton :text="this.$constants.STRING.REGISTRATION"></gbutton>
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
};
</script>

<style></style>
