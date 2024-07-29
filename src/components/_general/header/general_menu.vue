<template>
	<div>
		<gmbutton
			:clickCBProp="homeClick"
			:buttonNameProp="this.$constants.STRING.HOME"
		></gmbutton>
		<gmbutton
			:clickCBProp="helpClick"
			:buttonNameProp="this.$constants.STRING.HELP"
		></gmbutton>
		<gmbutton
			:clickCBProp="createClick"
			:buttonNameProp="this.$constants.STRING.CREATE"
		></gmbutton>
		<gmbutton
			:clickCBProp="mapClick"
			:buttonNameProp="this.$constants.STRING.MAP"
		></gmbutton>
		<gmbutton
			:clickCBProp="profileClick"
			:buttonNameProp="this.$constants.STRING.PROFILE"
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
		helpClick() {
			// TODO
		},
		createClick() {
			// TODO
		},
		mapClick() {
			// TODO
		},
		profileClick() {
			// TODO
		},
	},
};
</script>

<style></style>
<!-- Дописать пропсы -->
