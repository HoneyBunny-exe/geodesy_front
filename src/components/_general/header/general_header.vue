<template>
	<nav>
		<gmenu v-if="isLoggedIn" class="menu"></gmenu>
		<gmenuguest v-else class="menu"></gmenuguest>
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

<style>
@media (max-width: 1024px) {
	nav {
		position: fixed;
		width: calc(100% + calc(100vw - 100%));
		background-color: white;
		bottom: 0;
		height: 50px;

		.menu {
			height: inherit;
			display: flex;
			justify-content: space-around;
		}
	}
}
@media (min-width: 1024px) {
	nav {
		position: sticky;
		font-size: 1.3rem;
		top: 0px;
		background-color: white;
		height: 50px;

		.menu {
			display: flex;
			height: inherit;
			justify-content: space-around;
		}
	}
}
</style>
