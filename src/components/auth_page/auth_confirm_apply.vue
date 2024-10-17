<!-- Подтверждение изменения пароля -->
<template>
	<div id="container">
		<p class="title_small">
			На указанную вами почту пришел код-подтверждение
		</p>
		<!-- <gainput
			:parent-value="confirmCode"
			@updateInputDataEvent="confirmCodeUpdate"
		></gainput> -->
		<agree_input
			:value_prop="confirm_code"
			:style_prop="confirm_code_style"
			:label_prop="label"
			@update_data_event="
				(new_value) => {
					confirm_code = new_value;
				}
			"
			@update_style_event="
				(new_value) => {
					confirm_code_style = new_value;
				}
			"
			@update_label_event="
				(new_value) => {
					label = new_value;
				}
			"
		>
		</agree_input>
		<gbutton
			class="auth_button"
			:text="`Отправить`"
			@click="sendData"
		></gbutton>
	</div>
</template>

<script>
import axios from "../../utils/axios";
import general_apply_input from "../_general/general_apply_input.vue";
import agree_input from "../UI/input/agree_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	inject: ["pushToPopup"],
	data() {
		return {
			confirm_code: "",
			confirm_code_style: "normal",
			label: "",
		};
	},
	components: {
		gainput: general_apply_input,
		gbutton: general_button,
		agree_input,
	},
	methods: {
		async sendData() {
			try {
				await axios({
					method: "put",
					url: "api/v1/auth/forgotten/password/",
					data: {
						tfa_token: this.$store.getters.getTFAToken,
						confirm_code: this.confirm_code,
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
				let message =
					error.response.data.detail ??
					error.response.data.confirm_code[0];
				console.log(`message = ${message}`);
				this.label = message;
				this.confirm_code_style = "error";
			}
		},
	},
};
</script>

<style></style>
