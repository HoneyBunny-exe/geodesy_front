<template>
	<gheader></gheader>
	<RouterView />
	<button
		@click="this.$store.state.isLoggedIn = !this.$store.state.isLoggedIn"
	>
		Change isLoggedIn
	</button>
</template>

<script>
import general_header from "./components/_general/header/general_header.vue";
import store from "./store";
export default {
	components: {
		gheader: general_header,
	},
};
</script>

<style></style>
