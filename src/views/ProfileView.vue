<template>
	<div>
		<pintro></pintro>
		<pudata></pudata>
		<pclist></pclist>
	</div>
</template>

<script>
import profile_intro from "@/components/profile_page/profile_intro.vue";
import profile_user_data from "@/components/profile_page/profile_user_data.vue";
import profile_card_list from "@/components/profile_page/profile_card_list.vue";
export default {
	components: {
		pintro: profile_intro,
		pudata: profile_user_data,
		pclist: profile_card_list,
	},
};
</script>

<style></style>
