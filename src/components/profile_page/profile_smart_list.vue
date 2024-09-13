<template>
	<div>
		<pclheader @categoryListUpdateEvent="categoryListUpdate"></pclheader>
		<div v-if="this.cards.length !== 0">
			<!-- <pcard v-for="card in cards" :key="card.id"></pcard> -->
			<p>Карточки есть</p>
		</div>
		<div v-else>
			<p>Карточки геодезических пунктов не найдены(</p>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import profile_card_list_header from "./profile_smart_list_components/profile_card_list_header.vue";
import profile_card from "./profile_smart_list_components/profile_card.vue";
import { computed } from "vue";
export default {
	provide() {
		return {
			updateFilter: this.updateFilter,
			limit: computed(() => this.limitState),
			sort: computed(() => this.sortState),
			status: computed(() => this.statusState),
			cards: computed(() => this.cardsState),
		};
	},
	data() {
		return {
			limitState: 25,
			sortState: [
				{
					isChecked: true,
					name: "Дате создания",
					value: "datetime_creation",
				},
				{
					isChecked: false,
					name: "Дате проверки",
					value: "datetime_inspection",
				},
			],
			statusState: "no_data",
			displayedFields: ["latitude", "longitude", "status"],
			cards: [],
		};
	},
	components: {
		pcard: profile_card,
		pclheader: profile_card_list_header,
	},
	methods: {
		async updateFilter(filterObject) {
			this.statusState = filterObject.status;
			this.limitState = +filterObject.limit;
			this.sortState = filterObject.sort;
			console.log("Сравнение полученных данных и исходных");
			console.log(filterObject);
			console.log([this.statusState, this.limitState, this.sortState]);
			console.log("/Сравнение полученных данных и исходных");

			let fieldName = "";
			for (let i = 0; i < this.sortState.length; i++) {
				if (this.sortState[i].isChecked) {
					fieldName = this.sortState[i].value;
				}
			}

			let data = {
				displayed_fields: this.displayedFields,
				sorted_by: [
					{
						field_name: fieldName,
						reverse: false,
					},
				],
				limit: this.limitState,
				only_owned: {
					as_executor: true,
				},
			};

			if (this.statusState !== "no_data") {
				data.status = this.statusState;
			}

			console.log("data-объект в axios: ");
			console.log(data);

			try {
				await axios({
					method: "post",
					url: "http://127.0.0.1:8001/api/v1/card/info/",
					headers: {
						Authorization: this.$store.getters.getAccessToken,
					},
					data: data,
				}).then((response) => {
					console.log(response);
				});
			} catch (error) {
				console.log(error.data);
			}
		},
	},
};
</script>

<style></style>
