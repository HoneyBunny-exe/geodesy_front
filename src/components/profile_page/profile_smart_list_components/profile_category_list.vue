<template>
	<div id="profile_category_list">
		<gmwindow :isShown="isShown" @sendDataEvent="destroyModal">
			<template #default>
				<pfilter
					:isShownProp="isShown"
					@updateFilterDataEvent="destroyModal"
				></pfilter>
			</template>
		</gmwindow>
		<gbutton :text="`Сортировка`" @click="isShown = true"></gbutton>

		<gbutton :text="`Изменить порядок`"></gbutton>
	</div>
</template>

<script>
import profile_filter from "@/components/modal_components/profile/profile_filter.vue";
import general_modal_window from "@/components/_general/general_modal_window.vue";
import general_button from "@/components/_general/general_button.vue";
export default {
	components: {
		pfilter: profile_filter,
		gmwindow: general_modal_window,
		gbutton: general_button,
	},
	data() {
		return {
			isShown: false,
		};
	},
	methods: {
		destroyModal(data) {
			this.isShown = false;
		},
	},
};
</script>

<style></style>
