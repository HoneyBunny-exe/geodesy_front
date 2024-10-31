<template>
	<div :class="[style_prop]">
		<label id="over_text">{{ over_label_prop }}</label>
		<div id="radiogroup_wrapper" ref="radiogroup_wrapper">
			<div
				v-for="(value, key) in radio_buttons_prop.data"
				:key="key"
				class="radio_wrapper"
				:ref="key"
			>
				<general_button
					:text="value"
					@click="chose_checked(key)"
					@blur="update_style('normal')"
				></general_button>
			</div>
		</div>
		<img
			src="@/assets/images/create_page/question.svg"
			@click="open_modal"
		/>
		<label id="under_text">{{ under_label_prop }}</label>
		<general_modal_window
			@sendDataEvent="send_data_event_handler('no_data')"
			:isShown="is_shown"
		>
			<template #default>
				<component
					:is="modal_component"
					:key="modal_component_prop"
					@click="send_data_event_handler('no_data')"
				></component>
			</template>
		</general_modal_window>
	</div>
</template>

<script>
import general_modal_window from "@/components/_general/general_modal_window.vue";
import label_input_h from "./label_input_h.vue";
import general_button from "@/components/_general/general_button.vue";
/**
 * @mixes label_input_h
 */
export default {
	mixins: [label_input_h],
	components: {
		general_modal_window,
		general_button,
	},
	props: {
		radio_buttons_prop: {
			type: Object,
			requied: false,
		},
	},
	data() {
		return {
			currentButtonRefName: "",
		};
	},
	methods: {
		chose_checked(key) {
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
			this.update_value(key);
		},
	},
	beforeMount() {
		console.log(`${this.over_label_prop}: ${this.style_prop}`);
	},
};
</script>

<style scoped>
.normal {
	display: grid;
	grid-template-areas: "A B" "C C" "D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;
	width: 100%;

	> #over_text {
		display: block;
		grid-area: A;
		margin-left: 5px;
	}
	> #under_text {
		margin-top: 5px;
		margin-left: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
		grid-area: D;
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
	img {
		width: 20px;
		grid-area: B;
		justify-self: end;
		margin-right: 5px;
	}
	.button_pressed {
		> button {
			background-color: var(--light_green) !important;
			color: red;
		}
	}
}

.error {
	display: grid;
	grid-template-areas: "A B" "C C" "D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;
	width: 100%;

	> #over_text {
		display: block;
		grid-area: A;
		margin-left: 5px;
	}
	> #under_text {
		margin-top: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
		color: var(--error);
		grid-area: D;
	}
	#radiogroup_wrapper {
		display: flex;
		justify-content: space-evenly;
		grid-area: C;
		width: 100%;
		min-height: 36px;
		border-radius: 10px;
		border: 2px solid var(--error);

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
	img {
		width: 20px;
		grid-area: B;
		justify-self: end;
		margin-right: 5px;
	}
	.button_pressed {
		> button {
			background-color: var(--light_green) !important;
			color: red;
		}
	}
}
</style>
