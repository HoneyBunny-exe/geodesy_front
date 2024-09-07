<!-- input, в который вводятся данные для подтверждения чего-либо-->
<template>
	<div class="input_confirm">
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
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.value);
		},
	},
};
</script>

<style>
.input_confirm {
	max-width: 208px;
	margin-bottom: 15px;
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
</style>
