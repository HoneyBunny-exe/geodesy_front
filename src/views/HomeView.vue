<template>
	<div id="container">
		<mptitle></mptitle>
		<mpcontent1 ref="mpcontent1"></mpcontent1>
		<mpdecor1></mpdecor1>
		<mpimage1></mpimage1>
		<mpcontent2></mpcontent2>
		<mpdecor2></mpdecor2>
		<mpimage2></mpimage2>
		<mpcontent3></mpcontent3>
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
		// Убрать этот код - обновление декоративных элементов будет при
		// помощи ResizeObserver. Этот код пойдет в функцию updateStyle.
		// Посмотри, как добавлять несколько объектов в observer
		let inner_content1_height = this.$refs.mpcontent1.$el.offsetHeight;
		this.$refs.mpcontent1.$el.children[1].style.height = `${inner_content1_height}px`;
	},
};
</script>

<style>
/* для устройств с тачпадом 
Нужно раскидать по компонентам - слишком много кода
*/
@media (hover: none) {
	@media (max-width: 320px) {
		#container {
			flex-direction: column;
			font-size: 0.55em;

			> #home_title {
				margin-top: 10px;
				> h1 {
					text-align: center;
				}
				> hr {
					margin: 5px 15px 15px 15px;
					border-color: var(--ash_grey);
				}
			}

			> #home_content1 {
				position: relative;
				width: 95%;
				align-self: center;
				line-height: 10px;
				padding: 10px 8px 8px 5px;
				margin-bottom: 10px;

				> #inner_content1 {
					padding: 15px 5px 10px 5px;
					border: 2px solid var(--white);
					border-radius: 4px;
				}
				> #decor1 {
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
					border-radius: 4px;
					width: 100%;
					background-color: var(--light_green);
				}
			}

			> #mpdecor1 {
				display: none;
			}

			> #mpimage1 {
				margin-left: 3%;
				margin-bottom: 10px;
				> img {
					width: 65%;
				}
			}

			> #home_content2 {
				position: relative;
				z-index: -1;
				top: -100px;
				width: 60%;
				height: 240px;
				align-self: flex-end;
				line-height: 10px;
				padding: 110px 8px 8px 5px;
				margin: 0 8px 10px 0;
				border-radius: 4px;
				background-color: var(--light_green);
				> #inner_content2 {
					padding: 15px 5px 10px 5px;
					border: 2px solid var(--white);
					border-radius: 4px;
				}
			}

			> #mpdecor2 {
				position: relative;
				top: -100px;
				background-color: aqua;
				height: 100px;
			}
		}
	}
}

@media (pointer: corse) or (pointer: fine) {
}
/* 
@media (max-width: 320px) {
	#container {
		display: flex;
	}
}
@media (min-width: 320px) and (max-width: 480px) {
}
@media (min-width: 480px) and (max-width: 768px) {
}
@media (min-width: 768px) and (max-width: 1024px) {
}
@media (min-width: 1024px) and (max-width: 1280px) {
}
@media (min-width: 1280px) and (max-width: 1400px) {
} */
</style>
