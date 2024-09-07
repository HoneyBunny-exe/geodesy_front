<template>
	<div id="container">
		<p id="personal_data_item_header">{{ `Изменение данных` }}</p>
		<select v-if="dataItem === `sex`" v-model="text">
			<option value="">Выберите пол</option>
			<option value="male">Мужской</option>
			<option value="female">Женский</option>
			<option value="unknown">Не знаю</option>
		</select>
		<ginput
			v-else
			:placeholder="createPlaceholder()"
			class="auth_input"
			:parentValue="text"
			@updateInputDataEvent="textUpdate"
		></ginput>
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
	data() {
		return {
			text: "", // Нужно применить двойное связывание с ginput, и эти данные передавать в send()
		};
	},
	components: {
		ginput: general_input,
		gbutton: general_button,
	},
	props: {
		dataItem: {
			type: String,
			required: true,
		},
	},
	methods: {
		createPlaceholder() {
			console.log(
				`change_personal_data_item: createPlaceholder was called`
			);
			switch (this.dataItem) {
				case "first_name":
					return "Введите новое имя";
				case "second_name":
					return "Введите новую фамилию";
				case "third_name":
					return "Введите новое отчество";
				default:
					console.log(`change_personal_data_item: unknown dataItem`);
			}
		},
		send() {
			console.log(`change_personal_data_item: send was called`);
			console.log(this.validate());
			this.$emit("sendDataEvent", this.validate());
		},
		textUpdate(value) {
			this.text = value;
			console.log("change_personal_data_iten: textUpdate was called");
		},
		validate() {
			return {
				data_item: this.dataItem,
				data: this.text,
			};
		},
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		select {
			width: 100%;
			padding-left: 10px;
			font-size: 1.1rem;
			height: 36px;
			border-radius: 10px;
			border: 2px solid var(--ash_grey);
		}
	}
}
</style>
