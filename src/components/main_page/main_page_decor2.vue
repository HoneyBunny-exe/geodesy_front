<template>
	<div id="mpdecor">
		<div id="circle1"></div>
		<div id="circle2"></div>
		<div id="circle3"></div>
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

			> #circle1 {
				position: absolute;
				top: 15px;
				left: 80px;
				z-index: 1;
				width: 90px;
				aspect-ratio: 1/1;
				background-color: var(--raisin_black);
				border-radius: 50%;
			}

			> #circle2 {
				position: absolute;
				top: 105px;
				left: 50px;
				z-index: -1;
				width: 45px;
				aspect-ratio: 1/1;
				background-color: var(--raisin_black);
				border-radius: 50%;
			}

			> #circle3 {
				position: absolute;
				top: 165px;
				left: 85px;
				z-index: -1;
				width: 23px;
				aspect-ratio: 1/1;
				background-color: var(--raisin_black);
				border-radius: 50%;
			}
		}
	}
}
</style>
