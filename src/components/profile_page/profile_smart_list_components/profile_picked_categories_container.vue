<template>
	<div>
		<ppcelem></ppcelem>
	</div>
</template>

<script>
import profile_picked_category_elem from "./profile_picked_category_elem.vue";
export default {
	components: {
		ppcelem: profile_picked_category_elem,
	},
	data() {
		return {
			list: this.listProp,
		};
	},
};
</script>

<style></style>
