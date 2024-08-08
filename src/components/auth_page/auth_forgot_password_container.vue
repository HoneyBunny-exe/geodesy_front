<template>
	<div id="container">
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.EMAIL"
			:parentValue="email"
			@emailUpdateEvent="emailUpdate"
			:eventName="input1"
		></ainput>
		<ainput
			:isConfident="false"
			:underText="this.$constants.STRING.PASSWORD"
			:placeholder="this.$constants.STRING.NEW_PASSWORD"
			:parentValue="newPassword"
			@newPasswordUpdateEvent="newPasswordUpdate"
			:eventName="input2"
		></ainput>
		<general_button
			:text="this.$constants.STRING.SEND"
			@click="sendData"
		></general_button>
	</div>
</template>

<script>
import axios from "axios";
import general_button from "../_general/general_button.vue";
import auth_input from "./auth_input.vue";
export default {
	data() {
		return {
			email: "",
			newPassword: "",

			input1: "emailUpdateEvent",
			input2: "newPasswordUpdateEvent",
		};
	},
	components: {
		ainput: auth_input,
		general_button,
	},
	methods: {
		emailUpdate(value) {
			this.email = value;
		},
		newPasswordUpdate(value) {
			this.newPassword = value;
		},
		async sendData() {
			try {
				await axios({
					method: "post",
					url: "http://127.0.0.1:8000/api/v1/auth/forgotten/password/",
					data: {
						email: this.email,
						password: this.newPassword,
					},
				}).then((result) => {
					console.log(result.data);
					this.$store.commit("setTFAToken", result.data.tfa_token);

					//test
					console.log(this.$store.getters.getAll);
				});
			} catch (event) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
