<template>
	<div>
		<gmwindow>
			<pfilter></pfilter>
		</gmwindow>
		<gbutton>кнопка вызова модального окна с фильтром и сортировкой</gbutton>

		<select @change="_updateDataSelectHelper">
			<option value="datetime_creation">Дата создания</option>
			<option value="datetime_inspection">Дата проверки</option>
		</select>

		<!-- По возрастанию/убыванию -->
		<button @click="clickHandler">изменить порядок</button>
	</div>
</template>

<script>
import profile_filter from "./profile_filter.vue";
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
			SFData: {
				sortList: [],
				filterList: [],
				order: true,
			},
		};
	},
	methods: {
		// value: {
		// 	   dataName: String, - какое свойство в SFData будем изменять
		// 	   data: Object,     - непосредственно значение свойства
		// }
		// Обработчик событий, вызываемых дочерними компонентами
		updateData(value) {
			switch (value.dataName) {
				case "sortList": {
					this.SFData.sortList = value.data;
					break;
				}
				case "filterList": {
					this.SFData.filterList - value.data;
					break;
				}
				case "order": {
					this.SFData.order = value.data;
					break;
				}
				default: {
					throw new Error({
						message:
							"profile_category_list.vue -> methods -> updateData: unknown dataName",
					});
				}
			}
			console.log("profile_category_list", this.SFData);
			this.$emit("categoryListUpdateEvent", this.SFData);
		},
		_updateDataSelectHelper(value) {
			this.updateData({
				dataName: "sortList",
				data: [value.target.value],
			});
		},
		clickHandler(e) {
			this.updateData({
				dataName: "order",
				data: !this.SFData.order,
			});
		},
	},
};
</script>

<style></style>
