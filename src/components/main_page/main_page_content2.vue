<template>
	<div id="home_content">
		<p>
			ГГС играет важную роль в различных областях, таких как: картография
			строительство геодезия навигация геоинформационные системы и другие.
			Она обеспечивает основу для создания карт различного масштаба,
			позволяет определять точные координаты объектов и контролировать их
			перемещение.
		</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#home_content {
			overflow: visible;
			font-size: 11px;
			line-height: 15px;
			position: relative;
			width: 80%;
			align-self: flex-end;
			margin: 10px 7% 10% auto;
		}
		#home_content::before {
			content: "";
			position: absolute;
			z-index: -2;
			width: 120%;
			background-color: var(--light_green);
			height: 300%;
			top: -80%;
			left: -10%;
		}
		#home_content::after {
			content: "";
			position: absolute;
			z-index: 1;
			background-color: transparent;
			border: 2px solid var(--white);
			top: -70%;
			left: -5%;
			width: 110%;
			height: 190%;
			border-radius: 5px;
		}
	}
}
</style>
