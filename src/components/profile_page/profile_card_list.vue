<template>
	<div>
        <pcard v-for="card in cardList" :key="card.id"></pcard>
    </div>
</template>

<script>
import profile_card from './profile_card.vue';
export default {
    components:{
        pcard: profile_card,
    },
	props: {
		cardList: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
