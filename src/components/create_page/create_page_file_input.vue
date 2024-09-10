<template>
	<div id="create_input" ref="create_input">
		<label id="overText">{{ overText }}</label>
		<slot name="visibleButton"></slot>
		<input
			:placeholder="placeholder"
			@input="update"
			type="file"
			ref="input"
		/>
		<label id="underText">{{ underText }}</label>
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
		overText: {
			type: String,
			required: false,
		},
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
		inputAttributes: {
			type: Object,
			requied: false,
		},
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.$refs.input.files[0]);
		},
		// Подсвечивает элемент для обозначения ошибки
		doError() {},
		// Убирает стили ошибки
		stopError() {},
	},
};
</script>

<style scoped>
#create_input {
	display: grid;
	grid-template-areas: "A B" "C C" "D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;
	width: 100%;

	> :slotted(img) {
		margin-bottom: 2px;
		height: 16px;
		margin-right: 5px;
		justify-self: end;
	}

	> #overText {
		margin-left: 5px;
		grid-area: A;
		font-size: 13px;
	}
	input {
		grid-area: C;
		width: 100%;
		font-size: 1.1rem;
		min-height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
		font-size: 14px;
		align-self: center;
	}
	input:focus {
		border: var(--light_green) solid 2px;
	}

	> #underText {
		margin-left: 5px;
		grid-area: D;
		font-size: 12px;
	}
}
</style>
