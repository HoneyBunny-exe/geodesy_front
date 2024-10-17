<template>
	<gheader></gheader>
	<RouterView />
	<div id="gap"></div>
	<popup
		:component-name="popupComponentName"
		:message="message"
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
			message: "",
		};
	},
	components: {
		gheader: general_header,
		popup: general_popup_proxy,
	},
	methods: {
		pushToPopup(componentName, message) {
			this.popupComponentName = componentName;
			this.message = message;
			console.log("App.vue: pushToPopup was called");
		},
		change() {
			this.popupComponentName = "no_component";
			this.message = "";
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
