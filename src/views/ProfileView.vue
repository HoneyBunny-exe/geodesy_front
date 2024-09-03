<template>
	<div>
		<pintro
			:email="userData.email"
			:userData="{
				first_name: this.userData.first_name,
				second_name: this.userData.second_name,
				third_name: this.userData.third_name,
				sex: this.userData.sex,
			}"
		></pintro>
		<!-- <pudata
			:userData="{
				first_name: this.userData.first_name,
				second_name: this.userData.second_name,
				third_name: this.userData.third_name,
				sex: this.userData.sex,
			}"
		></pudata> -->
		<pslist></pslist>
	</div>
</template>

<script>
import axios from "axios";
import profile_intro from "@/components/profile_page/profile_intro.vue";
import profile_user_data from "@/components/profile_page/profile_user_data.vue";
import profile_smart_list from "@/components/profile_page/profile_smart_list.vue";
export default {
	data() {
		return {
			userData: {},
		};
	},
	components: {
		pintro: profile_intro,
		pudata: profile_user_data,
		pslist: profile_smart_list,
	},
	methods: {
		async sendData() {
			try {
				let uData = await axios({
					method: "get",
					url: "http://127.0.0.1:8000/api/v1/info/user/",
					headers: {
						Authorization: this.$store.getters.getAccessToken,
					},
				});
				this.userData = uData.data;
				switch (this.userData.sex) {
					case "male": {
						this.userData.sex = "Мужской";
					}
					case "female": {
						this.userData.sex = "Женский";
					}
					case "unknown": {
						this.userData.sex = "Не указано";
					}
				}
				console.log(this.userData);
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.sendData();
	},
};
</script>

<style></style>
