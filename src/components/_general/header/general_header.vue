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
	data() {
		return {
			// createIcon: "../../../assets/images/header/create_icon.png",
			// helpIcon: "../../../assets/images/header/help_icon.png",
			// homeIcon: "../../../assets/images/header/home_icon.png",
			// loginIcon: "../../../assets/images/header/login_icon.png",
			// logoutIcon: "../../../assets/images/header/logout_icon.png",
			// mapIcon: "../../../assets/images/header/map_icon.png",
			// profileIcon: "../../../assets/images/header/profile_icon.png",
		};
	},
	components: {
		gmenu: general_menu,
		gmenuguest: general_menuguest,
	},
	computed: {
		isLoggedIn(){
			return this.$store.getters.getLoggedIn;
		},
	},
};
</script>

<style></style>
