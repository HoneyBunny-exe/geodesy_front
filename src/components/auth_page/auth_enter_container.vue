<template>
	<div id="container">
		<p class="title">{{ this.$constants.STRING.ENTER }}</p>
		<!-- <ainput
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
		></ainput> -->

		<text_input
			:style_prop="email_style"
			:value_prop="email"
			:over_label="`Почта`"
			:under_label="email_under_label"
			@update_data_event="
				(new_value) => {
					console.log(`new_value = ${new_value}`);
					email = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					email_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					email_under_label = new_value;
				}
			"
		></text_input>
		<text_input
			:style_prop="password_style"
			:value_prop="password"
			:over_label="`Пароль`"
			:under_label="password_under_label"
			@update_data_event="
				(new_value) => {
					password = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					password_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					password_under_label = new_value;
				}
			"
		></text_input>

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
import axios from "@/utils/axios";
import auth_input from "./auth_input.vue";
import text_input from "../UI/input/text_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	inject: ["pushToPopup"],
	components: {
		ainput: auth_input,
		gbutton: general_button,
		text_input,
	},
	data() {
		return {
			email: "",
			email_style: "normal",
			email_under_label: "",

			password: "",
			password_style: "normal",
			password_under_label: "",

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
					url: "api/v1/auth/",
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

					this.pushToPopup("login_profile");
				});
			} catch (error) {
				// Определяем текст в попапе и поле, в котором определяется ошибка
				// let error_message =
				// 	error.response.data.detail ?? error.response.data.email?.[0];
				// let error_field =
				// 	error.response.data.detail === undefined
				// 		? "detail"
				// 		: "email";
				// this.pushToPopup("incorrect_enter_data", error_message); // Выводим попап

				let email_error =
					error.response.data.email?.[0] ??
					error.response.data.detail ??
					"";
				let password_error =
					error.response.data.password?.[0] ??
					error.response.data.detail ??
					"";

				console.log(`email_error = ${email_error}`);
				console.log(`password_error = ${password_error}`);

				// меняем стили соответствующих полей
				if (email_error !== "") {
					this.email_style = "error";
					this.email_under_label = email_error;
				}
				if (password_error !== "") {
					this.password_style = "error";
					this.password_under_label = password_error;
				}
			}
		},
	},
};
</script>

<style>
#container {
	display: flex;
	flex-direction: column;
}
</style>
