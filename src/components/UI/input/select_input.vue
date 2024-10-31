<template>
	<div :class="[style_prop]">
		<label id="over_text">{{ over_label_prop }}</label>
		<select
			@change="update_value($event.target.value)"
			@blur="update_style('normal')"
		>
			<option
				v-for="option in options_prop"
				:key="option.key"
				:value="option.key"
			>
				{{ option.value }}
			</option>
		</select>
		<label id="under_text">{{ under_label_prop }}</label>
	</div>
</template>

<script>
import label_input from "./label_input.vue";
export default {
	mixins: [label_input],
	props: {
		options_prop: {
			type: Array,
			required: true,
		},
	},
	watch: {
		style_prop(new_value) {
			if (new_value === "normal") {
				this.update_under_label("");
			} else if (new_value === "warning") {
				this.update_under_label("");
			}
		},
	},
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
	select {
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
	select {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--error);
	}
}
.warning {
	select {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--warning);
	}
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
}
</style>
