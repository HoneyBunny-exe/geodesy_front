<template>
	<div>
		<pclist @categoryListUpdateEvent="categoryListUpdate"></pclist>
		<ppccontainer></ppccontainer>
	</div>
</template>

<script>
import profile_category_list from "./profile_category_list.vue";
import profile_picked_categories_container from "./profile_picked_categories_container.vue";
export default {
	data() {
		return {
			// Список категорий, которые передаем пропсом в ppccontainer
			categoryList: [],
		};
	},
	components: {
		pclist: profile_category_list,
		ppccontainer: profile_picked_categories_container,
	},
	methods: {
		categoryListUpdate(value) {
			this.categoryList = [
				...value.sortList,
				...value.filterList,
				value.order,
			];
			console.log("profile_card_list_header", value);
			this.$emit("categoryListUpdateEvent", value);
		},
	},
};
</script>

<style></style>
