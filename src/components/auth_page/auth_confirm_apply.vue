<!-- Подтверждение изменения пароля -->
<template>
	<div id="container">
		<p class="title_small">
			На указанную вами почту пришел код-подтверждение
		</p>
		<gainput
			:parent-value="confirmCode"
			@updateInputDataEvent="confirmCodeUpdate"
		></gainput>
		<gbutton
			class="auth_button"
			:text="`Отправить`"
			@click="sendData"
		></gbutton>
	</div>
</template>

<script>
import axios from "axios";
import general_apply_input from "../_general/general_apply_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	inject: ["pushToPopup"],
	data() {
		return {
			confirmCode: "",
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
					url: "http://127.0.0.1:8001/api/v1/auth/forgotten/password/",
					data: {
						tfa_token: this.$store.getters.getTFAToken,
						confirm_code: this.confirmCode,
					},
				}).then((result) => {
					//test
					console.log(this.$store.getters.getAll);
					this.$emit("goToEvent", "aecontainer 3");
					console.log("(Не бек) Пароль получилось поменять");
					this.pushToPopup("change_auth_data");
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
