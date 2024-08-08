<template>
	<dialog>
		<div>
			<div id="title">
				<p>{{ dialogData.TITLE }}</p>
			</div>
			<div id="form">
				<ginput :data="dialogData.PLACEHOLDER1"></ginput>
				<ginput :data="dialogData.PLACEHOLDER2"></ginput>
			</div>
		</div>
	</dialog>
</template>

<script>
import general_input from "../_general/general_input.vue";
export default {
	props: {
		dialogData: {
			type: Object,
			required: true,
		},
	},
	components: {
		ginput: general_input,
	},
};
</script>

<style></style>
