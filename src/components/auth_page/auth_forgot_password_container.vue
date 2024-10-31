<template>
	<div id="container">
		<!-- <p class="title_small">Забыли пароль, Сэр? Ну что ж, бывает...</p> -->
		<text_input
			:over_label_prop="`Почта`"
			:under_label_prop="email_under_label"
			:style_prop="email_style"
			:value_prop="email"
			@update_under_label_event="
				(new_value) => {
					email_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					email_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					email = new_value;
				}
			"
		></text_input>
		<text_input
			:over_label_prop="`Пароль`"
			:under_label_prop="new_password_under_label"
			:style_prop="new_password_style"
			:value_prop="new_password"
			@update_under_label_event="
				(new_value) => {
					new_password_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					new_password_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					console.log(new_value);
					new_password = new_value;
				}
			"
		></text_input>

		<general_button
			class="auth_button"
			:text="this.$constants.STRING.SEND"
			@click="sendData"
		></general_button>
	</div>
</template>

<script>
import axios from "../../utils/axios";
import general_button from "../_general/general_button.vue";
import text_input from "../UI/input/text_input.vue";
export default {
	data() {
		return {
			email: "",
			email_style: "normal",
			email_under_label: "",

			new_password: "",
			new_password_style: "normal",
			new_password_under_label: "",

			input1: "emailUpdateEvent",
			input2: "newPasswordUpdateEvent",
		};
	},
	components: {
		general_button,
		text_input,
	},
	methods: {
		emailUpdate(value) {
			this.email = value;
		},
		newPasswordUpdate(value) {
			console.log(`value = ${value}`);
			this.new_password = value;
		},
		async sendData() {
			try {
				let response = await axios({
					method: "post",
					url: "api/v1/auth/forgotten/password/",
					data: {
						email: this.email,
						password: this.new_password,
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
				let email_error =
					error.response.data.email?.[0] ??
					error.response.data.detail ??
					"";
				let new_password_error =
					error.response.data.password?.[0] ??
					error.response.data.detail ??
					"";

				if (email_error !== "") {
					this.email_style = "error";
					this.email_under_label = email_error;
				}
				if (new_password_error !== "") {
					this.new_password_style = "error";
					this.new_password_under_label = new_password_error;
				}
			}
		},
	},
};
</script>

<style></style>
