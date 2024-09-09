<template>
	<div id="create_input" ref="create_input">
		<label id="overText">{{ overText }}</label>
		<slot name="visibleButton"></slot>
		<select :name="selectName" v-model="value">
			<option v-for="item in options" :value="item" :key="item">
				{{ item }}
			</option>
		</select>
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
		parentValue: {
			type: String,
			required: true,
		},
		options: {
			type: Array,
			required: true,
		},
		selectName: {
			type: String,
			required: true,
		},
	},
	methods: {
		update() {
			this.$emit("updateInputDataEvent", this.value);
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
	select {
		grid-area: C;
		width: 100%;
		padding-left: 10px;
		font-size: 14px;
		min-height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);

		> option {
			width: inherit;
		}
	}
	> select:focus,
	select:hover,
	select:focus-within {
		border: var(--light_green) solid 2px;
	}

	> #underText {
		margin-left: 5px;
		grid-area: D;
		font-size: 12px;
	}
}
</style>
