<template>
	<div>
		<ppcelem
			v-for="elem in list"
			:data-prop="elem.data"
			:key="elem.id"
		></ppcelem>
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
	props: {
		listProp: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
