<template>
	<div id="container">
		<p class="title">Давайте знакомиться!</p>
		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.FIRST_NAME"
			:parentValue="firstName"
			@firstNameUpdateEvent="firstNameUpdate"
			:eventName="input1"
		></ainput>
		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.SECOND_NAME"
			:parentValue="secondName"
			@secondNameUpdateEvent="secondNameUpdate"
			:eventName="input2"
		></ainput>
		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.THIRD_NAME"
			:parentValue="thirdName"
			@thirdNameUpdateEvent="thirdNameUpdate"
			:eventName="input3"
		></ainput>

		<select v-model="sex">
			<option value="">Выберите пол</option>
			<option value="male">Мужской</option>
			<option value="female">Женский</option>
			<option value="unknown">Не знаю</option>
		</select>

		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.EMAIL"
			:parentValue="email"
			@emailUpdateEvent="emailUpdate"
			:eventName="input4"
		></ainput>
		<ainput
			class="auth_input"
			:confident="`auto`"
			:underText="this.$constants.STRING.PASSWORD"
			:parent-value="password"
			@passwordUpdateEvent="passwordUpdate"
			:event-name="input5"
		></ainput>
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
import axios from "axios";
import agreement from "./agreement.vue";
import auth_input from "./auth_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	data() {
		return {
			firstName: "",
			secondName: "",
			thirdName: "",
			sex: "",
			email: "",
			password: "",
			isAgree: false,

			input1: "firstNameUpdateEvent",
			input2: "secondNameUpdateEvent",
			input3: "thirdNameUpdateEvent",
			input4: "emailUpdateEvent",
			input5: "passwordUpdateEvent",
		};
	},
	components: {
		ainput: auth_input,
		agreement,
		general_button,
	},
	methods: {
		goToEnter() {
			this.$emit("goToEvent", "aecontainer 1");
		},
		isAgreementClicked() {
			this.isAgree = !this.isAgree;
		},
		firstNameUpdate(value) {
			this.firstName = value;
		},
		secondNameUpdate(value) {
			this.secondName = value;
		},
		thirdNameUpdate(value) {
			this.thirdName = value;
		},
		emailUpdate(value) {
			this.email = value;
		},
		passwordUpdate(value) {
			this.password = value;
		},
		async sendData() {
			try {
				let response = await axios({
					method: "post",
					url: "http://127.0.0.1:8000/api/v1/registration/",
					data: {
						first_name: this.firstName,
						second_name: this.secondName,
						third_name: this.thirdName,
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
