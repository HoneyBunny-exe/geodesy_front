<template>
	<Transition @enter="onEnter" name="show">
		<div v-if="isShown" id="container">
			<component :is="componentName" :key="componentName"></component>
			<!-- <div style="background-color: aqua; height: 40px"></div> -->
		</div>
	</Transition>
</template>

<script>
import bad_connection from "../popup_components/bad_connection.vue";
import change_profile_data from "../popup_components/change_profile_data.vue";
import create_profile from "../popup_components/create_profile.vue";
import incorrect_field from "../popup_components/incorrect_field.vue";
import login_profile from "../popup_components/login_profile.vue";
export default {
	components: {
		bad_connection,
		change_profile_data,
		create_profile,
		incorrect_field,
		login_profile,
	},
	data() {
		return {
			isShown: false,
			timerId: null,
			showTime: 5000, //ms
		};
	},
	props: {
		componentName: {
			type: String,
			required: true,
		},
	},
	methods: {
		onEnter(el, done) {
			el.className += " my-show-enter-active";
			console.log(`onEnter: ${el.className}`);
			done();
		},
		onLeave(el, done) {
			el.className += " my-show-leave-active";
			console.log(`onLeave: ${el.className}`);
		},
	},
	watch: {
		componentName(newValue) {
			if (newValue !== "no_component") {
				console.log("general_popup_component: watch was called");
				this.isShown = true;
				this.timerId = setTimeout(() => {
					this.isShown = false;
					this.componentName = "no_component";
				}, this.showTime);
			}
		},
	},
	beforeDestroy() {
		this.isShown = false;
		clearTimeout(this.timerId);
	},
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		@keyframes show_popup {
			from {
				transform: translateY(0px);
			}
			to {
				transform: translateY(calc(1.7 * var(--popup_height)));
			}
		}
		@keyframes hide_popup {
			from {
				transform: translateY(calc(1.7 * var(--popup_height)));
			}
			to {
				transform: translateY(-calc(1.7 * var(--popup_height)));
			}
		}

		#container {
			padding: 5px;
			border-radius: 15px;
			position: fixed;
			top: -60px;
			left: 15%;
			width: 70%;
			background-color: var(--white);
			box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.4);
			animation-fill-mode: both;

			> .popup_content {
				font-size: 0.85em;
				position: static;
				width: 100%;
				margin: auto;
			}
		}
		.show-leave-active {
			animation: hide_popup var(--popup_animation_time) ease-in !important;
		}
		.my-show-enter-active {
			animation: show_popup var(--popup_animation_time) ease-out;
		}
	}
}
</style>
