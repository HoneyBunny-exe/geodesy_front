<template></template>

<script>
// @ts-check
import base_input from "./base_input.vue";
/**
 * @mixin
 * @mixes base_input
 */
export default {
	mixins: [base_input],
	props: {
		over_label_prop: {
			type: String,
			required: true,
		},
		under_label_prop: {
			type: String,
			required: false,
		},
	},
	watch: {
		style_prop(new_value) {
			if (new_value === "normal") {
				this.update_under_label("");
			}
		},
	},
	methods: {
		// Не реализовано в родительских компонентах, но если нужно - сделать будет просто
		/**
		 * @emits update_over_label_event
		 */
		update_over_label(new_value) {
			this.$emit("update_over_label_event", new_value);
		},

		/**
		 * @emits update_under_label_event
		 */
		update_under_label(new_value) {
			this.$emit("update_under_label_event", new_value);
		},

		/**
		 * @emits update_style_event
		 */
		update_style(new_value) {
			this.$emit("update_style_event", new_value);
		},

		/**
		 * @emits update_data_event
		 * @prop {string} new_value - Какое значение отправляем родителю
		 */
		update_value(new_value) {
			this.$emit("update_data_event", new_value);
		},
	},
};
</script>

<style scoped></style>
