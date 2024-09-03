<template>
	<div id="home_content">
		<p>
			Для обеспечения надежности и актуальности ГГС необходимо регулярно
			обследовать и поддерживать ее пункты. Это включает в себя проведение
			террестрических и космических измерений, корректировку координат,
			обновление баз данных и мониторинг состояния марок. Поддержание ГГС
			в хорошем состоянии обеспечивает точность геопространственной
			информации и эффективное использование ее в различных областях
			человеческой деятельности.
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
			width: 60%;
			align-self: flex-start;
			margin: 10px 7% 0px 20px;
		}
		#home_content::before {
			content: "";
			position: absolute;
			z-index: -2;
			width: 120%;
			background-color: var(--ash_grey);
			height: 205%;
			top: -80%;
			left: -10%;
		}
		#home_content::after {
			content: "";
			position: absolute;
			z-index: 1;
			background-color: transparent;
			border: 2px solid var(--white);
			top: -20%;
			left: -5%;
			width: 110%;
			height: 125%;
			border-radius: 5px;
		}
	}
}
</style>
