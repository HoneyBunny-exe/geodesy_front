<template>
	<div id="container">
		<div id="radio_group_container">
			<p>{{ `Сортировать по:` }}</p>
			<div id="radio_wrapper">
				<div class="radio" v-for="item in sort" :key="item.value">
					<input
						type="radio"
						:id="item.value"
						:value="item.value"
						v-model="this.sortState"
					/>
					<label :for="item.value">{{ item.name }}</label>
				</div>
			</div>
		</div>
		<hr />
		<div id="limit">
			<p>{{ `Показывать первые:` }}</p>
			<input
				id="number_input"
				type="number"
				min="25"
				max="1000"
				step="25"
				v-model="this.limitState"
				@input="console.log(this.limitState)"
			/>
		</div>
		<hr />
		<div id="status">
			<p>{{ `Выберите статус заявок:` }}</p>
			<select v-model="statusState">
				<option value="no_data">{{ `Любой статус` }}</option>
				<option value="pending">{{ `pending` }}</option>
				<option value="sending">{{ `sending` }}</option>
				<option value="success">{{ `success` }}</option>
				<option value="denied">{{ `denied` }}</option>
			</select>
		</div>
		<gbutton
			:text="`Отправить`"
			@click="send"
			class="auth_button"
		></gbutton>
	</div>
</template>

<script>
import general_input from "@/components/_general/general_input.vue";
import general_button from "@/components/_general/general_button.vue";
export default {
	components: {
		gbutton: general_button,
		ginput: general_input,
	},
	inject: ["updateFilter", "limit", "sort", "status"],
	data() {
		return {
			isShownState: this.isShownProp,
			limitState: this.limit,
			sortState: "datetime_creation", // не получается нормально присобачить v-model, поэтому будет хранить value тыкнутого radio
			// Будем находить value, проходя по списку sort
			statusState: this.status,
		};
	},
	props: {
		isShownProp: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		send() {
			// ищем нужный параметр, и дедаем его выбранным
			let sendSortState = []; // Сюда добавляем все параметры сортировки
			this.sort.forEach((element) => {
				if (element.value === this.sortState) {
					sendSortState.push({
						isChecked: true,
						name: element.name,
						value: element.value,
					});
				} else {
					sendSortState.push({
						isChecked: false,
						name: element.name,
						value: element.value,
					});
				}
				console.log(`sendSortState:`);
				console.log(sendSortState);
			});
			console.log(`this.sendSortState:`);
			console.log(sendSortState);
			this.updateFilter({
				status: this.statusState,
				limit: this.limitState,
				sort: sendSortState,
			});
			this.$emit("updateFilterDataEvent", "no_data");
		},
	},
};
</script>

<style scoped>
#container {
	> #radio_group_container {
		> p {
			margin: 0 0 10px 10px;
		}
		> #radio_wrapper {
			margin: 10px 0 0 0;
			> .radio {
				margin-bottom: 10px;
			}
		}
	}
	> #limit {
		> p {
			margin: 10px 0px 0px 10px;
		}
		> #number_input {
			width: 100%;
			padding-left: 10px;
			font-size: 1.1rem;
			height: 36px;
			border-radius: 10px;
			border: 2px solid var(--ash_grey);
			max-width: 400px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
	> #status {
		> p {
			margin: 10px 0px 0px 10px;
		}
		> select {
			width: 100%;
			padding-left: 10px;
			font-size: 1.1rem;
			height: 36px;
			border-radius: 10px;
			border: 2px solid var(--ash_grey);
			max-width: 400px;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}
}
</style>
