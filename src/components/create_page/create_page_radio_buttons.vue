<template>
	<div id="create_input" ref="create_input">
		<label id="overText">{{ overText }}</label>
		<slot name="visibleButton"></slot>
		<div id="radiogroup_wrapper">
			<div
				v-for="(value, key) in radioButtons.data"
				:key="key"
				class="radio_wrapper"
			>
				<gbutton :text="value" @click="choseChecked(key)"></gbutton>
			</div>
		</div>
		<label id="underText">{{ underText }}</label>
	</div>
</template>

<script>
import general_button from "../_general/general_button.vue";
export default {
	components: {
		gbutton: general_button,
	},
	data() {
		return {
			value: this.parentValue,
		};
	},
	props: {
		overText: {
			type: String,
			required: false,
		},
		underText: {
			type: String,
			required: false,
		},
		parentValue: {
			type: String,
			required: true,
		},
		// указываем кнопки
		// radioButtons: {groupName: String, keys: Array, values: Array};
		radioButtons: {
			type: Object,
			requied: false,
		},
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.value);
		},
		// Подсвечивает элемент для обозначения ошибки
		doError() {},
		// Убирает стили ошибки
		stopError() {},
		choseChecked(key) {
			console.log(`choseChecked was called with key=${key}`);

			// Получить все кнопки, найти по ключу нажатую, навесить на нее стили, обнулить стили остальных

			this.value = key;
			this.update();
		},
	},
};
</script>

<style scoped>
#create_input {
	display: grid;
	grid-template-areas: "A B" "C C" "D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;

	> :slotted(img) {
		margin-bottom: 2px;
		height: 16px;
	}

	> #overText {
		grid-area: A;
	}
	#radiogroup_wrapper {
		display: flex;
		grid-area: C;
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
		max-width: 400px;

		> .radio_wrapper {
			> label {
				cursor: pointer;
				padding: 10px;
				border: 1px solid #ccc;
				border-radius: 4px;
				margin: 5px 0;
				transition: background-color 0.3s, border-color 0.3s;
			}
		}
	}

	> #underText {
		grid-area: D;
	}
}
</style>
