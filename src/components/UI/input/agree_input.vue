<template>
	<div :class="[style_prop]">
		<input
			@input="update_value($event.target.value)"
			@blur="update_style(`normal`)"
		/>
		<label>{{ label_prop }}</label>
	</div>
</template>

<script>
import base_input from "./base_input.vue";
export default {
	mixins: [base_input],
	props: {
		label_prop: {
			type: String,
			required: true,
		},
	},
	watch: {
		style_prop(new_value) {
			if (new_value === "normal") {
				this.update_label("");
			}
		},
	},
	methods: {
		update_value(new_value) {
			this.$emit("update_data_event", new_value);
		},
		update_style(new_style) {
			this.$emit("update_style_event", new_style);
		},
		update_label(new_value) {
			this.$emit("update_label_event", new_value);
		},
	},
};
</script>

<style scoped>
/* Оптимизировать классы - много чего дублируется */
label {
	margin-top: 5px;
	display: block;
	height: 24px;
	font-size: 10px;
}
.normal {
	max-width: 208px;
	margin-left: auto;
	margin-right: auto;
	> input {
		letter-spacing: 3px;
		text-align: center;
		width: 100%;
		padding-left: 10px;
		font-size: 1.5rem;
		height: 48px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
	}
}
.error {
	max-width: 208px;
	margin-left: auto;
	margin-right: auto;
	> input {
		letter-spacing: 3px;
		text-align: center;
		width: 100%;
		padding-left: 10px;
		font-size: 1.5rem;
		height: 48px;
		border-radius: 10px;
		border: 2px solid var(--error);
	}
}
</style>
