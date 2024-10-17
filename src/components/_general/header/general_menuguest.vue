<template>
	<div>
		<gmbutton
			:buttonNameProp="`Главная`"
			@click="homeClick"
			:imageURLProp="`src/assets/images/header/home_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Карта`"
			@click="mapClick"
			:imageURLProp="`src/assets/images/header/map_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Войти`"
			@click="logginClick"
			:imageURLProp="`src/assets/images/header/login_icon.png`"
		></gmbutton>
	</div>
</template>

<script>
import general_menu_button from "./general_menu_button.vue";
export default {
	components: {
		gmbutton: general_menu_button,
	},
	methods: {
		homeClick() {
			this.$router.push("/home");
		},
		mapClick() {
			this.$router.push("/map");
		},
		logginClick() {
			this.$router.push("/auth");
		},
	},
};
</script>

<style></style>
