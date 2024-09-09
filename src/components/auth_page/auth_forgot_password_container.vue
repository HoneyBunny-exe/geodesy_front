<template>
	<div id="container">
		<p class="title_small">Забыли пароль, Сэр? Ну что ж, бывает...</p>
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
			:confident="`auto`"
			:underText="this.$constants.STRING.PASSWORD"
			:placeholder="this.$constants.STRING.NEW_PASSWORD"
			:parentValue="newPassword"
			@newPasswordUpdateEvent="newPasswordUpdate"
			:eventName="input2"
		></ainput>
		<general_button
			class="auth_button"
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
				let response = await axios({
					method: "post",
					url: "http://127.0.0.1:8001/api/v1/auth/forgotten/password/",
					data: {
						email: this.email,
						password: this.newPassword,
					},
					header: {},
				});
				console.log(response.data);
				this.$store.commit("setTFAToken", response.data.tfa_token);
				this.$emit("goToEvent", "acaply 2");

				//test
				console.log(response.data);
				// console.log(this.$store.getters.getAll);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
