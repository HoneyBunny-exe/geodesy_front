<template>
	<div id="profile_card">
		<img id="image_card" src="@/assets/images/create_page/question.svg" alt="no_image"/>
		<div id="cords_container">
			<span>{{ fillZero(latitude.toString()) }}&#176</span>
			<span>{{ fillZero(longitude.toString()) }}&#176</span>
		</div>
		<button @click="downloadPDF"></button>
	</div>
</template>

<script>
export default {
	props: {
		latitude: {
			type: String,
			required: true,
		},
		longitude: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
	},
	methods: {
		fillZero(value){
				let res = value+'000000';
				if(value.indexOf('.') === -1){
					return value + '.000000';
				} 
				return res.slice(0, value.indexOf('.') + 1 + 6);
		}
	}
};
</script>

<style scoped>
#profile_card {
	padding: 10px;
	display: flex;
	border-radius: 10px;
	background-color:var(--light_green);
	margin-top: 10px;

	> #image_card{
		margin-right: 20px;
	}

	> #cords_container{
		margin: auto;
		> span{
			text-decoration:underline 1px solid;
			text-decoration-color: var(--ash_grey);
			margin: 0 8px 0 8px;
		}
	}
}
</style>
