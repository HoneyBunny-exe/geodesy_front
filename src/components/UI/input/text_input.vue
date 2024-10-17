<template>
	<div :class="[style_prop]">
		<label id="over_text">{{ over_label }}</label>
		<input
			@input="update_value($event.target.value)"
			@blur="update_style(`normal`)"
		/>
		<label id="under_text">{{ under_label }}</label>
	</div>
</template>

<script>
import label_input from "./label_input.vue";
export default {
	mixins: [label_input],
};
</script>

<style scoped>
/* Оптимизировать - много повторяющегося кода */
.normal {
	display: flex;
	/* margin-top: 5px;*/
	margin-bottom: 5px;
	flex-direction: column;
	/* border: 2px solid var(--debug); */

	> #over_text {
		display: block;
	}
	> #under_text {
		margin-top: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
	}
	input {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
	}
}

.error {
	display: flex;
	/* margin-top: 5px; */
	margin-bottom: 5px;
	flex-direction: column;
	/* border: 2px solid var(--debug); */

	> #over_text {
		display: block;
	}
	> #under_text {
		margin-top: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
		color: var(--error);
	}
	input {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--error);
	}
}
</style>
