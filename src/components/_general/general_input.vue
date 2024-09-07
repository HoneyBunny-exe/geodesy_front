<template>
	<div id="input_confirm">
		<label>{{ underText }}</label>
		<slot name="visibleButton"></slot>
		<input :placeholder="placeholder" v-model="value" @input="update" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: this.parentValue,
		};
	},
	props: {
		underText: {
			type: String,
			required: false,
		},
		placeholder: {
			type: String,
			required: false,
		},
		parentValue: {
			type: String,
			required: true,
		},
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.value);
		},
	},
};
</script>

<style></style>
