<template>
	<div>
		<pclheader @categoryListUpdateEvent="categoryListUpdate"></pclheader>
		<div v-if="this.cardList.length !== 0">
			<pcard v-for="card in createFiltredList" :key="card.id"></pcard>
		</div>
		<div v-else>
			<p>Карточки геодезических пунктов не найдены(</p>
		</div>
	</div>
</template>

<script>
import profile_card_list_header from "./profile_smart_list_components/profile_card_list_header.vue";
import profile_card from "./profile_smart_list_components/profile_card.vue";
export default {
	data() {
		return {
			cardList: [],
			categoryList: [],
			sortedBy: "",
			isMainOrder: true,
		};
	},
	components: {
		pcard: profile_card,
		pclheader: profile_card_list_header,
	},
	methods: {
		categoryListUpdate(value) {
			this.categoryList = [...value.sortList, ...value.filterList];
			this.sortedBy = value.sortList;
			this.isMainOrder = value.order;
			console.log("profile_smart_list: ", value);
		},
		async sendData() {
			try {
				this.cardList = await axios({
					method: "post",
					url: "http://127.0.0.1:8001/api/v1/card/info/",
					headers: {
						Authorization: this.$store.getters.getAccessToken,
					},
					data: {
						displayed_fields: [
							"photos",
							"datetime_creation",
							"name",
							"latitude",
							"longitude",
						],
						sorted_by: [
							{
								field_name: [...this.sortedBy].join(""),
								reverse: !this.isMainOrder,
							},
						],
					},
				});
			} catch (error) {
				throw new Error({
					message: "profile_smart_list: error in request",
				});
			}
		},
	},
};
</script>

<style></style>
