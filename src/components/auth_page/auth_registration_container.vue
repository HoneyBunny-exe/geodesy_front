<template>
	<div id="container">
		<p class="title">Давайте знакомиться!</p>

		<text_input
			:value_prop="first_name"
			:style_prop="first_name_style"
			:over_label_prop="first_name_over_label"
			:under_label_prop="first_name_under_label"
			@update_over_label_event="
				(new_value) => {
					first_name_over_label = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					first_name_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					first_name_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					first_name = new_value;
				}
			"
		></text_input>

		<text_input
			:value_prop="second_name"
			:style_prop="second_name_style"
			:over_label_prop="second_name_over_label"
			:under_label_prop="second_name_under_label"
			@update_over_label_event="
				(new_value) => {
					second_name_over_label = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					second_name_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					second_name_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					second_name = new_value;
				}
			"
		></text_input>

		<text_input
			:value_prop="third_name"
			:style_prop="third_name_style"
			:over_label_prop="third_name_over_label"
			:under_label_prop="third_name_under_label"
			@update_over_label_event="
				(new_value) => {
					third_name_over_label = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					third_name_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					third_name_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					third_name = new_value;
				}
			"
		></text_input>

		<!-- Переделать -->
		<select_input
			:options_prop="[
				{ key: 'unknown', value: 'Не важно' },
				{ key: 'male', value: 'Мужской' },
				{ key: 'female', value: 'Женский' },
			]"
			:value_prop="sex"
			:style_prop="sex_style"
			:over_label_prop="sex_over_label"
			:under_label_prop="sex_under_label"
			@update_data_event="
				(new_value) => {
					sex = new_value;
					console.log(`sex = ${sex}`);
				}
			"
			@update_style_event="
				(new_value) => {
					sex_style = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					sex_under_label = new_value;
				}
			"
		>
		</select_input>
		<!-- ---------- -->

		<text_input
			:value_prop="email"
			:style_prop="email_style"
			:over_label_prop="email_over_label"
			:under_label_prop="email_under_label"
			@update_over_label_event="
				(new_value) => {
					email_over_label = new_value;
				}
			"
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
			:value_prop="password"
			:style_prop="password_style"
			:over_label_prop="password_over_label"
			:under_label_prop="password_under_label"
			@update_over_label_event="
				(new_value) => {
					password_over_label = new_value;
				}
			"
			@update_under_label_event="
				(new_value) => {
					password_under_label = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					password_style = new_value;
				}
			"
			@update_data_event="
				(new_value) => {
					password = new_value;
				}
			"
		></text_input>

		<agreement @update-agreement="isAgreementClicked"></agreement>

		<general_button
			class="auth_button"
			:text="this.$constants.STRING.REGISTRATION"
			@click="sendData"
		></general_button>
		<general_button
			class="auth_button"
			:text="this.$constants.STRING.ENTER"
			@click="goToEnter"
		></general_button>
	</div>
</template>

<script>
import axios from "../../utils/axios";
import agreement from "./agreement.vue";
import auth_input from "./auth_input.vue";
import text_input from "../UI/input/text_input.vue";
import select_input from "../UI/input/select_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	data() {
		return {
			first_name: "",
			first_name_style: "normal",
			first_name_over_label: "Имя",
			first_name_under_label: "",

			second_name: "",
			second_name_style: "normal",
			second_name_over_label: "Фамилия",
			second_name_under_label: "",

			third_name: "",
			third_name_style: "normal",
			third_name_over_label: "Отчество",
			third_name_under_label: "",

			email: "",
			email_style: "normal",
			email_over_label: "Почта",
			email_under_label: "",

			password: "",
			password_style: "normal",
			password_over_label: "Пароль",
			password_under_label: "",

			sex: "unknown",
			sex_style: "warning",
			sex_over_label: "Ваш пол",
			sex_under_label: "",

			is_agree: false,
		};
	},
	components: {
		ainput: auth_input,
		agreement,
		general_button,
		text_input,
		select_input,
	},
	methods: {
		goToEnter() {
			this.$emit("goToEvent", "aecontainer 1");
		},
		isAgreementClicked() {
			this.isAgree = !this.isAgree;
		},
		async sendData() {
			try {
				let response = await axios({
					method: "post",
					url: "api/v1/registration/",
					data: {
						first_name: this.first_name,
						second_name: this.second_name,
						third_name: this.third_name,
						sex: this.sex,
						email: this.email,
						password: this.password,
					},
					header: {},
				});
				this.$store.commit("setTFAToken", response.data.tfa_token);
				this.$emit("goToEvent", "araply 2");
				console.log(response.data);
			} catch (error) {
				console.log(error);
				let first_name_error =
					error.response.data.first_name?.[0] ??
					error.response.data.detail ??
					"";
				let second_name_error =
					error.response.data.second_name?.[0] ??
					error.response.data.detail ??
					"";
				let third_name_error =
					error.response.data.third_name?.[0] ??
					error.response.data.detail ??
					"";
				let sex_error =
					error.response.data.sex?.[0] ??
					error.response.data.detail ??
					"";
				let email_error =
					error.response.data.email?.[0] ??
					error.response.data.detail ??
					"";
				let password_error =
					error.response.data.password?.[0] ??
					error.response.data.detail ??
					"";
				if (first_name_error !== "") {
					this.first_name_style = "error";
					this.first_name_under_label = first_name_error;
				}
				if (second_name_error !== "") {
					this.second_name_style = "error";
					this.second_name_under_label = second_name_error;
				}
				if (third_name_error !== "") {
					this.third_name_style = "error";
					this.third_name_under_label = third_name_error;
				}
				if (sex_error !== "") {
					this.sex_style = "error";
					this.sex_under_label = sex_error;
				}
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

		updateStyle() {},
	},
};
</script>

<style scoped>
#container {
	display: flex;
	flex-direction: column;
}
select {
	width: 100%;
	padding-left: 10px;
	font-size: 1.1rem;
	height: 36px;
	border-radius: 10px;
	border: 2px solid var(--ash_grey);
}
select {
	margin-top: 10px;
}
</style>
