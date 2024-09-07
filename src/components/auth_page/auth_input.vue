<!-- Изменить название - компонент нужен за пределами AuthView -->
<template>
	<div id="auth_input_container">
		<label>{{ underText }}</label>
		<input
			:placeholder="placeholder"
			v-model="value"
			@input="update"
			:type="confident"
		/>
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
		confident: {
			type: String,
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
