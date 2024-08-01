<template>
	<div>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.HOME"
			@click="homeClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.HELP"
			@click="helpClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.CREATE"
			@click="createClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.MAP"
			@click="mapClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.PROFILE"
			@click="profileClick"
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
