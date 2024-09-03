<template>
	<div id="home_title">
		<h1>Государственная геодезическая сеть</h1>
		<hr />
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#home_title {
			margin-top: 10px;
			> h1 {
				text-align: center;
				font-size: 16px;
			}
			> hr {
				margin: 15px 15px 25px 15px;
				border-color: var(--ash_grey);
			}
		}
	}
}
</style>
