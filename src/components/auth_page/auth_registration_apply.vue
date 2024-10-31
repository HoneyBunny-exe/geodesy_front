<!-- Подтверждение создания аккаунта -->
<template>
	<div id="container">
		<agree_input
			:value_prop="confirm_code"
			:style_prop="style"
			:over_label_prop="over_label"
			:under_label_prop="under_label"
		></agree_input>

		<gbutton
			class="auth_button"
			:text="this.$constants.STRING.SEND"
			@click="sendData"
		></gbutton>
	</div>
</template>

<script>
import axios from "../../utils/axios";
import agree_input from "../UI/input/agree_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	inject: ["pushToPopup"],
	data() {
		return {
			confirm_code: "",
			style: "normal",
			over_label: "Код подтверждения",
			under_label: "",
		};
	},
	components: {
		gbutton: general_button,
		agree_input,
	},
	methods: {
		confirmCodeUpdate(value) {
			this.confirmCode = value;
		},
		async sendData() {
			try {
				await axios({
					method: "put",
					url: "api/v1/registration/",
					data: {
						tfa_token: this.$store.getters.getTFAToken,
						confirm_code: this.confirmCode,
					},
				}).then((result) => {
					console.log(result.data);
					this.$store.commit("setIsLoggedIn");
					this.$store.commit(
						"setAccessToken",
						result.data.access_token
					);
					this.$store.commit(
						"setRefreshToken",
						result.data.refresh_token
					);
					this.$store.commit("deleteTFAToken");
					this.pushToPopup("");
				});
			} catch (error) {
				console.log(error);
				let code_error =
					error.response.data.confirm_code?.[0] ??
					error.response.data.detail ??
					"";
				if (code_error !== "") {
					this.style = "error";
					this.under_label = code_error;
				}
			}

			// test
			// console.log(this.$store.getters.getLoggedIn);
			// console.log(this.$store.getters.getRefreshToken);
			// console.log(this.$store.getters.getAccessToken);
		},
	},
};
</script>

<style></style>
