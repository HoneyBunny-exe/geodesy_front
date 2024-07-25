<template>
	<div>
		<img />
		<p>Создать аккаунт</p>
		<auth-input :underText="Почта"></auth-input>
		<auth-input :underText="Логин"></auth-input>
		<auth-input :underText="Пароль" :isConfident="true"></auth-input>
		<auth-input
			:underText="Подтвердите пароль"
			:isConfident="true"
		></auth-input>
		<agreement></agreement>

		<general-button :text="Зарегистрироваться"></general-button>
	</div>
</template>

<script>
import agreement from "@/components/auth_page/agreement.vue";
import auth_input from "@/components/auth_page/auth_input.vue";
import general_button from "@/components/_general/general_button.vue";
export default {
	components: { general_button },
	methods: {},
};
</script>

<style></style>
