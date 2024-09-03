<template>
	<div id="home_content">
		<p>
			Государственная геодезическая сеть (ГГС) представляет собой систему
			пунктов с известными координатами, которая используется для
			определения местоположения объектов на земле. Эти пункты обычно
			помечены специальными марками или стойками, которые фиксируются на
			постоянных местах и имеют точно измеренные координаты широты,
			долготы и высоты.
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
			width: 65%;
			align-self: flex-end;
			margin-right: 10%;
			position: relative;
			overflow: visible;
			font-size: 11px;
			line-height: 15px;
			margin-top: 20px;
		}
		#home_content::before {
			content: "";
			position: absolute;
			top: -20%;
			left: -8%;
			width: 120%;
			z-index: -2;
			border-radius: 5px;
			background-color: var(--light_green);
			height: 150%;
		}
		#home_content::after {
			content: "";
			position: absolute;
			top: -5%;
			left: -5%;
			width: 110%;
			height: 130%;
			background-color: transparent;
			border: 2px solid var(--white);
			border-radius: 5px;
		}
	}
}
</style>
