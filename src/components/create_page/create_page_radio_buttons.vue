<template>
	<div id="create_input" ref="create_input">
		<label id="overText">{{ overText }}</label>
		<slot name="visibleButton"></slot>
		<div id="radiogroup_wrapper" ref="radiogroup_wrapper">
			<div
				v-for="(value, key) in radioButtons.data"
				:key="key"
				class="radio_wrapper"
				:ref="key"
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
			currentButtonRefName: "",
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
		// radioButtons: {groupName: String, data: Object};
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

			if (this.currentButtonRefName !== "") {
				this.$refs[this.currentButtonRefName][0].classList.remove(
					"button_pressed"
				);
			}
			this.currentButtonRefName = key;

			this.$refs[this.currentButtonRefName][0].classList.add(
				"button_pressed"
			);
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
	width: 100%;

	> :slotted(img) {
		margin-bottom: 2px;
		height: 16px;
		margin-right: 5px;
		justify-self: end;
	}

	> #overText {
		margin-left: 5px;
		grid-area: A;
		font-size: 13px;
	}
	#radiogroup_wrapper {
		display: flex;
		justify-content: space-evenly;
		grid-area: C;
		width: 100%;
		min-height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);

		> .radio_wrapper {
			display: flex;
			align-items: center;
			min-height: 36px;
			> button {
				font-size: 12px;
				margin-left: 2px;
				margin-right: 2px;
				background-color: var(--white);
				border-radius: 10px;
				border: none;
				height: 32px;
				text-decoration: underline;
			}
			> button:focus {
				outline: var(--light_green) solid 2px;
			}
		}
	}

	> #underText {
		margin-left: 5px;
		grid-area: D;
		font-size: 12px;
	}

	.button_pressed {
		> button {
			background-color: var(--light_green) !important;
			color: red;
		}
	}
}
</style>
