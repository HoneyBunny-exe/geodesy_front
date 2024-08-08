<template>
	<aecontainer></aecontainer>
	<hr />
	<arcontainer></arcontainer>
	<hr />
	<araply></araply>
	<hr />
	<afpcontainer></afpcontainer>
	<hr />
	<acaply></acaply>
</template>

<script>
import auth_registration_apply from "@/components/auth_page/auth_registration_apply.vue";
import auth_enter_container from "@/components/auth_page/auth_enter_container.vue";
import auth_registration_container from "@/components/auth_page/auth_registration_container.vue";
import auth_forgot_password_container from "@/components/auth_page/auth_forgot_password_container.vue";
import auth_confirm_apply from "@/components/auth_page/auth_confirm_apply.vue";
export default {
	components: {
		aecontainer: auth_enter_container,
		arcontainer: auth_registration_container,
		afpcontainer: auth_forgot_password_container,
		acaply: auth_confirm_apply,
		araply: auth_registration_apply,
	},
};
</script>

<style></style>
