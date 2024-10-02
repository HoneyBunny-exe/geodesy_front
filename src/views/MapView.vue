<template>
	<msbar></msbar>
	<mmbox></mmbox>
	<mrmenu></mrmenu>
</template>

<script>
import map_search_bar from "@/components/map_page/map_search_bar.vue";
import map_main_box from "@/components/map_page/map_main_box.vue";
import map_result_menu from "@/components/map_page/map_result_menu.vue";
export default {
	components: {
		msbar: map_search_bar,
		mmbox: map_main_box,
		mrmenu: map_result_menu,
	},
};
</script>

<style></style>
