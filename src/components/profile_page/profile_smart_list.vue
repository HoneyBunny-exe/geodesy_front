<template>
	<div id="container">
		<pclheader @categoryListUpdateEvent="categoryListUpdate"></pclheader>
		<div id="card_list">
			<div v-if="this.cards.length !== 0">
				<pcard
					v-for="card in cards"
					:key="card.card_uuid"
					:latitude="card.coordinates.latitude"
					:longitude="card.coordinates.longitude"
				></pcard>
			</div>
			<div id="no_cards" v-else>
				<p>Не найдено</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "../../utils/axios";
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
			displayedFields: ["photos", "latitude", "longitude", "status"],
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
					url: "api/v1/card/info/",
					headers: {
						Authorization: this.$store.getters.getAccessToken,
					},
					data: data,
				}).then((response) => {
					console.log(response);
					this.cards = response.data.cards;
				});
			} catch (error) {
				console.log(error.data);
			}
		},
		async downloadPDF(card_uuid) {},
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#container {
			margin: 10px auto 10px auto;
			padding: 10px;
			border-radius: 10px;
			border: 2px solid var(--debug);
			width: 95vw;
			> #card_list {
				width: 100%;

				> #no_cards {
					position: relative;
					margin-top: 10px;
					height: 60px;
					background-color: var(--ash_grey);
					border-radius: 10px;
					> p {
						width: 100%;
						height: 40%;
						overflow: auto;
						margin: auto;
						position: absolute;
						top: 0;
						left: 0;
						bottom: 0;
						right: 0;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
