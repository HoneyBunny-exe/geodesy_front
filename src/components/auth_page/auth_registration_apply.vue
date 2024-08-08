<!-- Подтверждение создания аккаунта -->
<template>
	<div id="container">
		<gainput
			:parent-value="confirmCode"
			@confirmCodeUpdateEvent="confirmCodeUpdate"
			:eventName="input1"
		></gainput>
		<gbutton
			:text="this.$constants.STRING.SEND"
			@click="sendData"
		></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import general_apply_input from "../_general/general_apply_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	data() {
		return {
			confirmCode: "",
			input1: "confirmCodeUpdateEvent",
		};
	},
	components: {
		gainput: general_apply_input,
		gbutton: general_button,
	},
	methods: {
		confirmCodeUpdate(value) {
			this.confirmCode = value;
		},
		async sendData() {
			try {
				await axios({
					method: "put",
					url: "http://127.0.0.1:8000/api/v1/registration/",
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
				});
			} catch (error) {
				console.log(error);
			}

			// test
			console.log(this.$store.getters.getLoggedIn);
			console.log(this.$store.getters.getRefreshToken);
			console.log(this.$store.getters.getAccessToken);
		},
	},
};
</script>

<style></style>
