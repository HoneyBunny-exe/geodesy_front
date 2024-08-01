<!-- Подтверждение изменения пароля -->
<template>
	<div id="container">
		<gainput></gainput>
		<gbutton :text="this.$constants.STRING.SEND"></gbutton>
	</div>
</template>

<script>
import general_apply_input from "../_general/general_apply_input.vue";
import general_button from "../_general/general_button.vue";
export default {
	components: {
		gainput: general_apply_input,
		gbutton: general_button,
	},
};
</script>

<style></style>
