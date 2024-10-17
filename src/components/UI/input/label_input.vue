<template></template>

<script>
import base_input from "./base_input.vue";
export default {
	mixins: [base_input],
	props: {
		over_label: {
			type: String,
			required: true,
		},
		under_label: {
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
		update_over_label(new_value) {
			this.$emit("update_over_label_event", new_value);
		},

		update_under_label(new_value) {
			this.$emit("update_under_label_event", new_value);
		},
		update_style(new_value) {
			this.$emit("update_style_event", new_value);
		},
		update_value(new_value) {
			this.$emit("update_data_event", new_value);
		},
	},
};
</script>

<style scoped></style>
