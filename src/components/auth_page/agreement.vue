<template>
	<div>
		<button v-on:click="clickHandler"></button>
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "я ознакомлен с политикой конфиденциальности и даю согласие на обработку персональных данных",
			isButtonPressed: false,
		};
	},
	props: {
		isButtonClickedCB: {
			type: Function,
			required: true,
		},
	},
	methods: {
		clickHandler() {
			this.isButtonPressed = !this.isButtonPressed;
			// изменить изображение
			this.isButtonClickedCB(this.isButtonPressed);
		},
	},
};
</script>

<style></style>
