<template>
	<div :class="{ nav_animation: isNavAnimation, nav: true }">
		<Transition name="menu">
			<component
				:is="currentMenu"
				:key="currentMenu"
				class="menu"
			></component>
		</Transition>
	</div>
</template>

<script>
import general_menu from "./general_menu.vue";
import general_menuguest from "./general_menuguest.vue";

export default {
	data() {
		return {
			currentMenu: "gmenuguest",
			isNavAnimation: false,
		};
	},
	components: {
		gmenu: general_menu,
		gmenuguest: general_menuguest,
	},
	computed: {
		isLoggedIn() {
			return this.$store.getters.getLoggedIn;
		},
	},
	watch: {
		isLoggedIn(newValue) {
			this.isNavAnimation = newValue;
			setTimeout(() => {
				this.currentMenu = "gmenu";
			}, 700);
		},
	},
};
</script>

<style>
@media (hover: none) {
	@keyframes nav_keyframes {
		from {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(90px);
		}
		to {
			transform: translateY(0px);
		}
	}

	.nav_animation {
		animation-name: nav_keyframes;
		animation-duration: 2s;
		animation-timing-function: ease-out;
		animation-fill-mode: forwards;
	}

	.nav {
		box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.4);
		position: fixed;
		z-index: 100;
		width: calc(100% + calc(100vw - 100%) - 10%);
		margin-left: 5%;
		margin-bottom: 2%;
		border-radius: 25px;
		background-color: white;
		bottom: 0;
		height: clamp(40px, 6vh, 45px);

		.menu {
			height: inherit;
			display: flex;
			justify-content: space-around;
		}
	}
}

@media (pointer: corse) or (pointer: fine) {
	nav {
		position: sticky;
		font-size: 1.3rem;
		top: 0px;
		background-color: white;
		height: 50px;

		.menu {
			height: inherit;
			display: flex;
			justify-content: space-around;
		}
	}
}
</style>
