<template>
	<div>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.HOME"
			:clickCBProp="homeClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.MAP"
			:clickCBProp="mapClick"
		></gmbutton>
		<gmbutton
			:buttonNameProp="this.$constants.STRING.LOGIN"
			:clickCBProp="logginClick"
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
			// TODO
		},
		mapClick() {
			// TODO
		},
		logginClick() {
			// TODO
		},
	},
};
</script>

<style></style>
