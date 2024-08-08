<template>
	<div>
		<mptitle></mptitle>
		<mpcontent1></mpcontent1>
		<mpdecor1></mpdecor1>
		<mpimage1></mpimage1>
		<mpcontent2></mpcontent2>
		<mpdecor2></mpdecor2>
		<mpimage2></mpimage2>
		<mpcontent3></mpcontent3>
		<mpdecor3></mpdecor3>
		<button v-on:click="test">test</button>
	</div>
</template>

<script>
import main_page_title from "@/components/main_page/main_page_title.vue";
import main_page_content1 from "@/components/main_page/main_page_content1.vue";
import main_page_content2 from "@/components/main_page/main_page_content2.vue";
import main_page_content3 from "@/components/main_page/main_page_content3.vue";
import main_page_decor1 from "@/components/main_page/main_page_decor1.vue";
import main_page_decor2 from "@/components/main_page/main_page_decor2.vue";
import main_page_decor3 from "@/components/main_page/main_page_decor3.vue";
import main_page_imagecontainer1 from "@/components/main_page/main_page_imagecontainer1.vue";
import main_page_imagecontainer2 from "@/components/main_page/main_page_imagecontainer2.vue";
export default {
	components: {
		mptitle: main_page_title,
		mpcontent1: main_page_content1,
		mpcontent2: main_page_content2,
		mpcontent3: main_page_content3,
		mpdecor1: main_page_decor1,
		mpdecor2: main_page_decor2,
		mpdecor3: main_page_decor3,
		mpimage1: main_page_imagecontainer1,
		mpimage2: main_page_imagecontainer2,
	},

	methods: {
		test() {
			testGet();
		},
	},
};
</script>

<style></style>
