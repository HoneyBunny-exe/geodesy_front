<template>
	<msearch_bar></msearch_bar>
    <mmain_box></mmain_box>
    <mresult_menu></mresult_menu>
</template>

<script>
import map_search_bar from "@/components/map_page/map_search_bar.vue";
import map_main_box from "@/components/map_page/map_main_box.vue";
import map_result_menu from "@/components/map_page/map_result_menu.vue";
export default {
	components: {
		msearch_bar: map_search_bar,
		mmain_box: map_main_box,
		mresult_menu: map_result_menu,
	},
};
</script>

<style></style>
