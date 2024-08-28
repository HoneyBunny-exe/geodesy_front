<template>
	<!-- контейнер, в котором находится всё, связанное с авторизацией-->
	<section id="auth_container" ref="auth_container">
		<!-- Прогрес входа / регистрации (показывается в виде точек)-->
		<img
			src="@/assets/images/auth_page/arrow_back.png"
			id="auth_image_arrow"
			ref="auth_image_arrow"
			@click="goToHandler('aecontainer 1')"
		/>
		<img
			src="@/assets/images/auth_page/fingerprint.png"
			id="auth_image_fingerprint"
			ref="auth_image_fingerprint"
		/>
		<div id="auth_progress" ref="auth_progress">
			<div
				class="auth_step"
				v-for="index in steps"
				:ref="index"
				:key="index"
			></div>
		</div>
		<div id="auth_delimeter" ref="auth_delimeter"></div>
		<!-- Контейнер, хранящий один из подключенных компонентов для входа / регистрации-->
		<div id="auth_wrapper">
			<transition>
				<KeepAlive>
					<component
						:is="currentComponent"
						:key="currentComponent"
						@goToEvent="goToHandler"
					></component>
				</KeepAlive>
			</transition>
		</div>
	</section>
</template>

<script>
import auth_registration_apply from "@/components/auth_page/auth_registration_apply.vue";
import auth_enter_container from "@/components/auth_page/auth_enter_container.vue";
import auth_registration_container from "@/components/auth_page/auth_registration_container.vue";
import auth_forgot_password_container from "@/components/auth_page/auth_forgot_password_container.vue";
import auth_confirm_apply from "@/components/auth_page/auth_confirm_apply.vue";

export default {
	observer: null,
	data() {
		return {
			currentComponent: "aecontainer",
			steps: 1,
		};
	},
	components: {
		aecontainer: auth_enter_container,
		arcontainer: auth_registration_container,
		afpcontainer: auth_forgot_password_container,
		acaply: auth_confirm_apply,
		araply: auth_registration_apply,
	},
	methods: {
		// для перехода на компонент входа
		goToEnter(status) {
			this.currentComponent = "aecontainer";
			this.$refs[status][0].style.backgroundColor = "var(--raisin_black)";
		},
		// для перехода на компонент регистрации
		goToRegistration(status) {
			this.currentComponent = "arcontainer";
			this.$refs[status][0].style.backgroundColor = "var(--raisin_black)";
		},
		// для перехода на компонент изменения пароля и входа
		goToForgotPassword(status) {
			this.currentComponent = "afpcontainer";
			this.$refs[status][0].style.backgroundColor = "var(--raisin_black)";
		},

		goToConfirmApply(status) {
			this.currentComponent = "acaply";
			this.$refs[status][0].style.backgroundColor = "var(--raisin_black)";
		},
		goToRegistrationApply(status) {
			this.currentComponent = "araply";
			this.$refs[status][0].style.backgroundColor = "var(--raisin_black)";
		},

		// Обрабатывает события перехода на другой компонент от дочерних компонентов
		// value - куда переходим: имяКомпонента номерЭтапа
		goToHandler(value) {
			value = value.split(" ");
			switch (value[0]) {
				case "aecontainer": {
					value[1] === "1" ? (this.steps = 1) : (this.steps = 3);
					this.goToEnter(value[1]);
					break;
				}
				case "arcontainer": {
					this.steps = 2;
					this.goToRegistration(value[1]);
					break;
				}
				case "afpcontainer": {
					this.steps = 3;
					this.goToForgotPassword(value[1]);
					break;
				}
				case "acaply": {
					this.steps = 3;
					this.goToConfirmApply(value[1]);
					break;
				}
				case "araply": {
					this.steps = 2;
					this.goToRegistrationApply(value[1]);
					break;
				}

				default: {
					throw new Error("Unknown error");
				}
			}
		},

		// Обновление стилей при изменении ширины auth_container
		updateStyle() {
			// Скругляем рамки
			let auth_container_width = this.$refs.auth_container.offsetWidth;
			let auth_container_height = this.$refs.auth_container.offsetHeight;

			if (auth_container_width < 380) {
				this.$refs.auth_container.style.borderRadius = `${
					this.$refs.auth_container.offsetWidth / 10
				}px`;
			} else {
				this.$refs.auth_container.style.borderRadius = "38px";
			}

			// // устанавливаем высоту auth_delimeter
			// this.$refs.auth_delimeter.style.height = `${
			// 	auth_container_height - 50
			// }px`;

			// // Устанавливаем размеры auth_image
			// if (auth_container_width < 380) {
			// 	this.$refs.auth_image.style.width = `${
			// 		auth_container_width / 6
			// 	}px`;
			// } else {
			// 	this.$refs.auth_image.style.width = "63px";
			// }

			console.log("AuthView: Resize has been activated");
			console.log(this.$refs.auth_image.style.width);
			console.log(this.$refs.auth_container.style.borderRadius);
		},
	},

	mounted() {
		this.observer = new ResizeObserver(this.updateStyle);
		this.observer.observe(this.$refs.auth_container);
	},
	beforeDestroy() {
		this.observer.disconnect();
	},
};
</script>

<style>
#auth_container {
	border: 1px solid var(--ash_grey);
	/* border-radius: 50px; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	align-items: stretch;
	width: 70%;

	padding: 20px;
	margin-left: auto;
	margin-right: auto;

	min-width: 250px;
}
#auth_progress {
	margin-top: 10px;
	width: 100%;
	display: flex;
	justify-content: center;
}
.auth_step {
	border-radius: 10px;
	margin: 7px;
	height: 15px;
	width: 15px;
	background-color: var(--debug);
}
.title {
	font-size: 2rem;
	margin-top: 0.1rem;
	margin-bottom: 1rem;
	text-align: center;
}
/* Заголовок для большого текста */
.title_small {
	font-size: 1.5rem;
	margin-top: 0.1rem;
	margin-bottom: 1rem;
	text-align: center;
}
#auth_delimeter {
	display: none;
}
#auth_image_fingerprint {
	align-self: center;
	width: 50px;
}
#auth_image_arrow {
	position: absolute;
	width: 35px;
	height: 35px;
}
@media (min-width: 640px) {
	#auth_container {
		display: grid;
		justify-content: stretch;
		grid-template-areas: "A A D B B B B B B" "C C D B B B B B B" "E E D B B B B B B";
		grid-template-columns: repeat(2, 1fr) 40px repeat(6, 1fr);
		grid-template-rows: 40px 100px 1fr;
		max-width: 580px;
	}
	#auth_image_fingerprint {
		grid-area: C;
		justify-self: center;
	}
	#auth_progress {
		margin: 0;
		grid-area: E;
	}
	#auth_wrapper {
		grid-area: B;
	}
	#auth_delimeter {
		display: block;
		grid-area: D;
		width: 2px;
		background-color: var(--ash_grey);
		justify-self: center;
		align-self: stretch;
	}
}

@media (max-width: 640px) and (min-width: 1024px) {
}
</style>
