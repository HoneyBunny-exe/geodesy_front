<template>
	<gheader></gheader>
	<RouterView />
</template>

<script>
import general_header from "./components/_general/header/general_header.vue";
export default {
	components: {
		gheader: general_header,
	},
};
</script>

<style>
@import "@/assets/styles/main.css";
</style>
