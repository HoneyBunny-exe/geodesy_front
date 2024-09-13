<template>
	<Transition @enter="onEnter" @leave="onLeave">
		<div
			id="modal_background"
			@click.self="backgroundClickHandler"
			v-if="isShown"
		>
			<slot
				id="container"
				:isShown="isShown"
				:dataItem="currentDataItem"
			></slot>
		</div>
	</Transition>
</template>

<script>
export default {
	props: {
		isShown: {
			type: Boolean,
			required: true,
		},
	},
	methods: {
		// data === "no_data" если никакие данные передавать не нужно
		send(data) {
			console.log(`general_modal_window: sendDataEvent event`);
			this.$emit("sendDataEvent", data);
		},
		// Обработка нажатий на фон
		backgroundClickHandler() {
			this.send("no_data");
		},
		onEnter(el, done) {
			el.children[0].className += " modal-content-show";
			el.className += " modal-background-show";
		},
		onLeave(el, done) {
			el.children[0].className += " modal-content-hide";
			el.className += " modal-background-hide";

			setTimeout(done, 300); // --modal_animation_time
		},
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		@keyframes modal-background-start {
			from {
				background-color: rgba(0, 0, 0, 0);
			}
			to {
				background-color: rgba(0, 0, 0, 0.5);
			}
		}
		@keyframes modal-background-finish {
			from {
				background-color: rgba(0, 0, 0, 0.5);
			}
			to {
				background-color: rgba(0, 0, 0, 0);
			}
		}
		@keyframes modal-content-start {
			from {
				transform: translateY(0);
			}
			to {
				transform: translateY(var(--modal_animation_shift));
			}
		}
		@keyframes modal-content-finish {
			from {
				transform: translateY(var(--modal_animation_shift));
			}
			to {
				transform: translateY(0);
			}
		}

		.modal-background-show {
			animation: modal-background-start var(--modal_animation_time)
				ease-out;
			animation-fill-mode: forwards;
		}
		.modal-background-hide {
			animation: modal-background-finish var(--modal_animation_time)
				ease-in !important;
		}
		.modal-content-show {
			animation: modal-content-start var(--modal_animation_time) ease-in;
		}
		.modal-content-hide {
			animation: modal-content-finish var(--modal_animation_time) ease-in !important;
		}

		#modal_background {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 101;
			background-color: rgba(0, 0, 0, 0.5);

			> :slotted(#container) {
				position: relative;
				top: 50%;
				transform: translateY(-50%);
				background-color: white;
				z-index: 102;
				border-radius: 10px;
				padding: 5vw;
				margin-left: 10px;
				margin-right: 10px;
				box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
			}
		}
	}
}
</style>
