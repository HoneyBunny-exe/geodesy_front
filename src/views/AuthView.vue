<template>
	<aecontainer></aecontainer>
	<arcontainer></arcontainer>
	<afpcontainer></afpcontainer>
	<aaply></aaply>
</template>

<script>
import auth_enter_container from "@/components/auth_page/auth_enter_container.vue";
import auth_registration_container from "@/components/auth_page/auth_registration_container.vue";
import auth_forgot_password_container from "@/components/auth_page/auth_forgot_password_container.vue";
import auth_apply from "@/components/auth_page/auth_apply.vue";
export default {
	components: {
		aecontainer: auth_enter_container,
		arcontainer: auth_registration_container,
		afpcontainer: auth_forgot_password_container,
		aaply: auth_apply,
	},
};
</script>

<style></style>
