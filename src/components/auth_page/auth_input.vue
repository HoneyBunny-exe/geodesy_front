<template>
	<div>
		<div>{{ underText }}</div>
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
		isConfident: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			required: false,
		},

		// Передаваемое значение
		parentValue: {
			type: String,
		},
		// Имя вызываемого события
		eventName: {
			type: String,
		},
	},
	methods: {
		update() {
			this.$emit(this.eventName, this.value);
		},
	},
};
</script>

<style></style>
