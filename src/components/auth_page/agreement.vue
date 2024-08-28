<template>
	<div id="agreement">
		<input v-on:click="updateParent" type="checkbox" />
		<p>{{ text }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			text: "я ознакомлен с политикой конфиденциальности и даю согласие на обработку персональных данных",
			status: false,
		};
	},
	methods: {
		updateParent() {
			this.status = !this.status;
		},
	},
};
</script>

<style>
#agreement {
	display: grid;
	grid-template-areas: "A B";
	grid-template-columns: 20px 1rf;
	column-gap: 15px;
}
</style>
