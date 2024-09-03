<template>
	<div id="mpdecor">
		<p>
			Учитывая, что всего на территории России расположено несколько сотен
			тысяч (!) геодезических пунктов и их роль в решении различных
			производственных, военных и научных задач чрезвычайно высока,
			проблема скорейшего обследования ГГС имеет важнейшее государственное
			значение! Внесите свой вклад в решение этой задачи!
		</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#mpdecor {
			overflow: visible;
			position: relative;
			width: 60%;
			align-self: center;
			font-size: 11px;
			line-height: 15px;
			margin-top: 30px;
			margin-bottom: 60px;
		}
		#mpdecor::before {
			content: "";
			position: absolute;
			z-index: -2;
			top: -20%;
			left: -10%;
			height: calc(120% + 40px);
			width: 130%;
			background-color: var(--light_green);
			border-radius: 5px;
		}
		#mpdecor::after {
			content: "";
			position: absolute;
			z-index: -1;
			top: -5%;
			left: -6%;
			height: 110%;
			width: 110%;
			background-color: transparent;
			border: 2px solid var(--white);
			border-radius: 5px;
		}
	}
}
</style>
