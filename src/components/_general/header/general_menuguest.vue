<template>
	<div>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.HOME"
			@click="homeClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.MAP"
			@click="mapClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.LOGIN"
			@click="logginClick"
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
