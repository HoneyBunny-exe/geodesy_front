<template>
	<div id="container">
		<img alt:NoImage src="@/assets/images/auth_page/fingerprint.png" />
		<div id="wrapper">
			<p id="name">
				{{
					`${this.userData.first_name} ${this.userData.second_name} ${this.userData.third_name}`
				}}
			</p>
		</div>
		<div id="user_data_wrapper">
			<hr />
			<gbutton
				class="profile_change_personal_data_button"
				:text="`Изменить данные профиля`"
			></gbutton>

			<div id="personal_data">
				<div class="item">
					<span class="title_span">Почта</span>
					<span class="data_span">{{ this.email }}</span>
				</div>
				<div class="item">
					<span class="title_span">Пароль</span>
					<span class="data_span">&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import general_button from "../_general/general_button.vue";
export default {
	components: {
		gbutton: general_button,
	},
	props: {
		email: {
			type: String,
			required: true,
		},
		userData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
/* @media (hover: none) { */
@media (hover: none) {
	@media (max-width: 480px) {
		#container {
			display: grid;
			grid-template-columns: 30vw 70%;
			grid-template-rows: 30vw auto;

			> img {
				width: 24vw;
				align-self: center;
				margin-left: auto;
				margin-right: auto;
			}

			> #wrapper {
				position: relative;
				display: flex;
				padding: 10px 8px 10px 8px;

				> p {
					overflow: visible;
					position: relative;
					font-size: clamp(0.85em, 4vw, 1em);
					font-weight: 600;
					margin-left: auto;
					margin-right: auto;
				}
				> p::after {
					content: "";
					top: 0;
					left: -5%;
					display: block;
					position: absolute;
					border-style: none none solid none;
					border-width: 1px;
					border-color: var(--ash_grey);
					height: calc(5px + clamp(0.85em, 4vw, 1em));
					width: 110%;
				}
			}
			#user_data_wrapper {
				grid-column: span 2;
				padding: 10px 8px 10px 8px;
				display: flex;
				flex-direction: column;

				> hr {
					margin-bottom: 30px;
				}

				> #personal_data {
					overflow: visible;
					margin-top: 15px;
					> .item {
						overflow: visible;
						margin-top: 10px;
						padding-left: 10px;
						padding-right: 10px;
						display: flex;
						justify-content: space-between;

						> .title_span {
							overflow: visible;
							position: relative;
							font-size: 1.15em;
						}
						> .title_span::after {
							content: "";
							top: 0;
							left: -5%;
							display: block;
							position: absolute;
							border-style: none none solid none;
							border-width: 1px;
							border-color: var(--ash_grey);
							height: calc(5px + clamp(0.85em, 4vw, 1em));
							width: 110%;
							padding-right: 10px;
						}

						> .data_span {
						}
					}
				}
			}
		}
	}
}
</style>
