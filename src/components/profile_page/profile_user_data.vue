<template>
	<div id="container">
		<p>Имя:</p>
		<p>Фамилия:</p>
		<p>Отчество:</p>
		<p>Пол:</p>
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
