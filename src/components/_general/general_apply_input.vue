<!-- input, в который вводятся данные для подтверждения чего-либо-->
<template>
	<div>
		<input v-model="value" @input="update" />
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
		parentValue: {
			type: String,
		},
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

<style>
</style>