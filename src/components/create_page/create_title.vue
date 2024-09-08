<template>
	<div id="create_title">
		<h1>{{ title }}</h1>
		<hr />
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#create_title {
			margin-top: 10px;
			> h1 {
				text-align: center;
				font-size: 16px;
			}
			> hr {
				margin: 15px 15px 15px 15px;
				border-color: var(--ash_grey);
			}
		}
	}
}
</style>
