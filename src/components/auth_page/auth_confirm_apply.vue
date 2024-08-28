<!-- Подтверждение изменения пароля -->
<template>
	<div id="container">
		<p class="title_small">
			На указанную вами почту пришел код-подтверждение
		</p>
		<ainput
			class="auth_input_confirm"
			:confident="`auto`"
			:parent-value="confirmCode"
			@confirmCodeUpdateEvent="confirmCodeUpdate"
			:event-name="input1"
		></ainput>
		<gbutton
			class="auth_button"
			:text="this.$constants.STRING.SEND"
			@click="sendData"
		></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import auth_input from "./auth_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	data() {
		return {
			confirmCode: "",

			input1: "confirmCodeUpdateEvent",
		};
	},
	components: {
		ainput: auth_input,
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
					url: "http://127.0.0.1:8000/api/v1/auth/forgotten/password/",
					data: {
						tfa_token: this.$store.getters.getTFAToken,
						confirm_code: this.confirmCode,
					},
				}).then((result) => {
					//test
					console.log(this.$store.getters.getAll);
					this.$emit("goToEvent", "aecontainer 3");
					console.log("(Не бек) Пароль получилось поменять");
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
