<template>
	<div :class="[style_prop]">
		<label id="over_text">{{ over_label_prop }}</label>
		<select
			@change="update_value($event.target.value)"
			@blur="update_style(`normal`)"
		>
			<option v-for="item in options_prop" :value="item" :key="item">
				{{ item }}
			</option>
		</select>
		<img
			src="@/assets/images/create_page/question.svg"
			@click="open_modal"
		/>
		<label id="under_text">{{ under_label_prop }}</label>
		<general_modal_window
			@sendDataEvent="send_data_event_handler('no_data')"
			:isShown="is_shown"
		>
			<template #default>
				<component
					:is="modal_component"
					:key="modal_component_prop"
					@click="send_data_event_handler('no_data')"
				></component>
			</template>
		</general_modal_window>
	</div>
</template>

<script>
import general_modal_window from "@/components/_general/general_modal_window.vue";
import label_input_h from "./label_input_h.vue";
/**
 * @mixes label_input_h
 */
export default {
	mixins: [label_input_h],
	components: {
		general_modal_window,
	},
	props: {
		options_prop: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style scoped>
.normal {
	display: grid;
	grid-template-areas: "A A A A A B" "C C C C C C" "D D D D D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;
	width: 100%;

	> #over_text {
		display: block;
		grid-area: A;
		margin-left: 5px;
	}
	> #under_text {
		margin-top: 5px;
		margin-left: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
		grid-area: D;
	}
	select {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--ash_grey);
		grid-area: C;
	}
	img {
		width: 20px;
		grid-area: B;
		justify-self: end;
		margin-right: 5px;
	}
}

.error {
	display: grid;
	grid-template-areas: "A A A A A B" "C C C C C C" "D D D D D D";
	margin-top: 5px;
	margin-bottom: 5px;
	flex-direction: column;
	width: 100%;

	> #over_text {
		display: block;
		grid-area: A;
		margin-left: 5px;
	}
	> #under_text {
		margin-top: 5px;
		display: block;
		height: 24px;
		font-size: 10px;
		color: var(--error);
		grid-area: D;
	}
	select {
		width: 100%;
		padding-left: 10px;
		font-size: 1.1rem;
		height: 36px;
		border-radius: 10px;
		border: 2px solid var(--error);
		grid-area: C;
	}
	img {
		width: 20px;
		grid-area: B;
		justify-self: end;
		margin-right: 5px;
	}
}
</style>
