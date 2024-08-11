<template>
	<div id="container">
		<p>Имя: {{ this.userData.first_name }}</p>
		<p>Фамилия: {{ this.userData.second_name }}</p>
		<p>Отчество: {{ this.userData.third_name }}</p>
		<p>Пол: {{ this.userData.sex }}</p>
	</div>
</template>

<script>
export default {
	props: {
		userData: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
