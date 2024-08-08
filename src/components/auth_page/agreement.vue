<template>
	<div class="debug_border_style">
		<button v-on:click="updateParent">test</button>
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "я ознакомлен с политикой конфиденциальности и даю согласие на обработку персональных данных",
		};
	},
	methods: {
		updateParent() {
			// изменить изображение
			this.$emit("update-agreement");
		},
	},
};
</script>

<style></style>
