<template>
	<gheader></gheader>
	<RouterView />
	<div id="gap"></div>
	<popup
		:component-name="popupComponentName"
		@changeComponentNameEvent="change"
	></popup>
</template>

<script>
import general_header from "./components/_general/header/general_header.vue";
import general_popup_proxy from "./components/_general/general_popup_proxy.vue";
export default {
	data() {
		return {
			popupComponentName: "no_component",
		};
	},
	components: {
		gheader: general_header,
		popup: general_popup_proxy,
	},
	methods: {
		pushToPopup(componentName) {
			console.log(this.popupComponentName);
			this.popupComponentName = componentName;
			console.log(this.popupComponentName);
			console.log("App.vue: pushToPopup was called");
		},
		change() {
			this.popupComponentName = "no_component";
		},
	},
	provide() {
		return {
			pushToPopup: this.pushToPopup,
		};
	},
};
</script>

<style>
@import "@/assets/styles/main.css";
#gap {
	height: 60px;
}
</style>
