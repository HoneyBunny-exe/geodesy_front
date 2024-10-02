<template>
	<div id="container">
		<div id="image">
			<img src="@/assets/images/profile_page/intro.png" />
		</div>
		<div id="user_data">
			<div class="data_item">
				<div class="data_item_wrapper">
					<div class="type_info">Имя: </div>
					<div class="info">
						{{this.userData.first_name }}
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_personal_data_item`, `first_name`)"></gbutton>
			</div>
			<div class="data_item">
				<div class="data_item_wrapper">
					<div class="type_info">Фамилия: </div>
					<div class="info">
						{{this.userData.second_name }}
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_personal_data_item`, `second_name`)"></gbutton>
			</div>
			<div class="data_item">
				<div class="data_item_wrapper">
					<div class="type_info">Отчество: </div>
					<div class="info">
						{{this.userData.third_name }}
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_personal_data_item`, `third_name`)"></gbutton>
			</div>
			<div class="data_item">
				<div class="data_item_wrapper">
					<div class="type_info">Пол: </div>
					<div class="info">
						{{this.userData.sex }}
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_personal_data_item`, `sex`)"></gbutton>
			</div>
			<div class="data_item">
				<div class="data_item_wrapper">
					<div class="type_info">Почта: </div>
					<div class="info">
						{{this.email }}
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_auth_data_item`, `email`)"></gbutton>
			</div>
			<div class="data_item"  style="margin-bottom: 14px;">
				<div class="data_item_wrapper">
					<div class="type_info">Пароль: </div>
					<div class="info">
						&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226&#8226
					</div>
				</div>
				<gbutton class="profile_change_personal_data_button" :text="`Изменить`" @click="startModal(`change_auth_data_item`, `password`)"></gbutton>
			</div>
		</div>
		<gmwindow :isShown="isModalShown" @sendDataEvent="destroyModal">
			<template #default>
				<component :is="currentModalContent" :key="currentModalContent" :dataItem="currentDataItem" @sendDataEvent="destroyModal"></component>
			</template>
		</gmwindow>
	</div>
</template>

<script>
import axios from "../../utils/axios";
import general_button from "../_general/general_button.vue";
import general_modal_window from "../_general/general_modal_window.vue";
import change_personal_data_item from "../modal_components/profile/change_personal_data_item.vue";
import change_auth_data_item from "../modal_components/profile/change_auth_data_item.vue";
export default {
	inject: ["pushToPopup"],
	data(){
		return{
			isModalShown: false,
			currentDataItem: "no_data",
			currentModalContent: "no_data",
		}
	},
	components: {
		gbutton: general_button,
		gmwindow: general_modal_window,
		change_personal_data_item,
		change_auth_data_item,
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
	methods:{
		startModal(currentModalContent, currentDataItem){
			this.currentModalContent = currentModalContent;
			this.currentDataItem = currentDataItem;
			this.isModalShown = true;
			console.log(`isModalShow = ${this.isModalShown}`);
		},
		async destroyModal(data){
			console.log("destroyModal was called");
			if(data === "no_data"){
				this.isModalShown = false;
				console.log(`profile_intro: destroyModal: first condition was called`);
				console.log(`isModalShow = ${this.isModalShown}, data === ${data}`);
			}
			else if(["first_name", "second_name", "third_name", "sex"].indexOf(data.data_item) != -1){
				console.log(`profile_intro: destroyModal: second condition was called`);
				let obj = {};
				obj[data.data_item] = data.data;

				await axios({
					method: "put",
					url: "api/v1/info/user/",
					data: obj,
				}).then((response) => {
					console.log(response);
				}).catch((error) =>{
					console.log(error);
				});
				this.isModalShown = false;
				this.pushToPopup("change_profile_data");
			}
			else if(["email_step1", "password_step1"].indexOf(data.data_item) != -1){
				console.log(`profile_intro: destroyModal: third condition (email/password: step 1) was called`);

				let obj = {};
				obj[data.data_item === "email_step1" ? "email" : "password"] = data.data;
				console.log(obj);

				await axios({
					method:"post",
					url: "api/v1/auth/change/",
					headers:{
						Authorization: this.$store.getters.getAccessToken,
					},
					data: obj,
				}).then((response) => {
					this.$store.commit(
						"setTFAToken",
						response.data.tfa_token
					);
					console.log("email/password step 1: success");
				}).catch((error) => {
					console.log(error);
				});
			}
			else if(["email", "password"].indexOf(data.data_item) != -1){
				this.isModalShown = false;
				console.log(`profile_intro: destroyModal: fourth condition (email/password: step 2) was called`);
				await axios({
					method: "put",
					url: "api/v1/auth/change/",
					headers:{
						Authorization: this.$store.getters.getAccessToken,
					},
					data:{
						tfa_token: this.$store.getters.getTFAToken,
						confirm_code: data.data,
					}
				}).then((response) => {
					console.log(`complete!`);
					this.pushToPopup("change_auth_data");
				}).catch((error) => {
					console.log(error);
				})
			}
			else{
				throw new Error("Unknown dataItem");
			}
		}
	}
};
</script>

<style scoped>
@media (hover: none) {
	@media (max-width: 480px) {
		#container {
			margin: 10px auto 10px auto;
			width: 95vw;
			font-size: 13px;

			> #image {
				overflow: visible;

				> img {
					border-radius: 15px;
					object-fit: cover;
					width: 100%;
				}
			}

			> #user_data {
				/* border: 2px solid black; */
				/* margin-top: 10px; */

				> .data_item {
					box-shadow: 0px 14px 12px -10px rgba(34, 60, 80, 0.2);
					border-radius: 10px;
					padding: 8px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 8px;

					>.data_item_wrapper{
						> .type_info{
							width: 80px;
							font-size: inherit;
						}
						> .info{
							position: relative;
							font-size: 14px;
							text-align: center;
						}
						.info::after{
							content: "";
							position:absolute;
							z-index: -1;
							top:0;
							left:0;
							width: 100%;
							height: 100%;
							border-style: none none solid none;
							border-width: 2px;
							border-color: var(--ash_grey);
							border-radius: 2px;
						}
					} 
				}
			}
		}
	}
}
</style>
