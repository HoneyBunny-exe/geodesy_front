<template>
	<div id="general_input">
		<slot name="visibleButton"></slot>
		<input :placeholder="placeholder" v-model="value" @input="update" />
		<label>{{ underText }}</label>
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
		type: {
			type: Object,
			required: false,
		},
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.value);
		},
	},
};
</script>

<style scoped>
#general_input {
	display: flex;
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;

	input {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
		max-width: 400px;
	}
}
</style>
