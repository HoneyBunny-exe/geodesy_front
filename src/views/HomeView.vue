<template>
	<div id="container">
		<mptitle :title="`Государственная геодезическая сеть`"></mptitle>
		<mpcontent1 ref="mpcontent1"></mpcontent1>
		<mpdecor1></mpdecor1>
		<mpimage1></mpimage1>
		<mpcontent2 ref="mpcontent2"></mpcontent2>
		<mpdecor2></mpdecor2>
		<mpimage2></mpimage2>
		<mpcontent3 ref="mpcontent3"></mpcontent3>
		<mpdecor3></mpdecor3>
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
	observer: null,
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
	mounted() {
		this.observer = new ResizeObserver(this.updateStyle);
		console.log(this.$refs.mpcontent1);
		// Убрать этот код - обновление декоративных элементов будет при
		// помощи ResizeObserver. Этот код пойдет в функцию updateStyle.
		// Посмотри, как добавлять несколько объектов в observer
	},
	methods: {
		updateStyle(entries) {
			// for (let entry in entries) {
			// 	console.log(entry);
			// }
		},
	},
	beforeDestroy() {
		this.observer.disconnect();
	},
};
</script>

<style scoped>
#container {
	overflow: visible;
}
@media (pointer: corse) or (pointer: fine) {
}
</style>
