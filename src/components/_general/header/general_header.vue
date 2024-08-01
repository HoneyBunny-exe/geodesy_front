<template>
	<nav>
		<gmenu v-if="isLoggedIn"></gmenu>
		<gmenuguest v-else></gmenuguest>
	</nav>
</template>

<script>
import general_menu from "./general_menu.vue";
import general_menuguest from "./general_menuguest.vue";

export default {
	components: {
		gmenu: general_menu,
		gmenuguest: general_menuguest,
	},
	computed: {
		isLoggedIn() {
			return this.$store.getters.getLoggedIn;
		},
	},
};
</script>

<style></style>
