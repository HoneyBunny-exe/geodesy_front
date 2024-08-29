<template>
	<div>
		<gmbutton
			:buttonNameProp="`Главная`"
			@click="homeClick"
			:imageURLProp="`src/assets/images/header/home_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Помощь`"
			@click="helpClick"
			:imageURLProp="`src/assets/images/header/help_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Создать`"
			@click="createClick"
			:imageURLProp="`src/assets/images/header/create_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Карта`"
			@click="mapClick"
			:imageURLProp="`src/assets/images/header/map_icon.png`"
		></gmbutton>
		<gmbutton
			:buttonNameProp="`Профиль`"
			@click="profileClick"
			:imageURLProp="`src/assets/images/header/profile_icon.png`"
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
		helpClick() {
			this.$router.push("/help");
		},
		createClick() {
			this.$router.push("/create");
		},
		mapClick() {
			this.$router.push("/map");
		},
		profileClick() {
			this.$router.push("/profile");
		},
	},
};
</script>

<style></style>
<!-- Дописать пропсы -->
