const ConstantsPlugin = {
	install(app) {
		// Объект с константами
		app.config.globalProperties.$constants = {
			PATH: {
				CREATEICON: "@/assets/images/header/create_icon.png",
				HELPICON: "@/assets/images/header/help_icon.png",
				HOMEICON: "@/assets/images/header/home_icon.png",
				LOGINICON: "@/assets/images/header/login_icon.png",
				LOGOUTICON: "@/assets/images/header/logout_icon.png",
				MAPICON: "@/assets/images/header/map_icon.png",
				PROFILEICON: "@/assets/images/header/profile_icon.png",
			},
			STRING: {
				CREATE: "Создать",
				HELP: "Помощь",
				HOME: "Главная",
				ENTER: "Войти",
				LOGOUT: "Выйти",
				MAP: "Карта",
				PROFILE: "Профиль",
				LOGIN: "Логин",
				EMAIL: "Почта",
				PASSWORD: "Пароль",
				PASSWORD_REPEAT: "Подтвердите пароль",
				REGISTRATION: "Зарегистрироваться",
				FIRST_NAME: "Имя",
				SECOND_NAME: "Фамилия",
				THIRD_NAME: "Отчество",
				FORGOT_PASSWORD: "Забыли пароль?",
				NEW_PASSWORD: "Введите новый пароль:",
				SEND: "Отправить",
			},
			DIALOG: {
				PASSWORD: {
					TITLE: "Введите новый пароль",
					PLACEHOLDER1: "Новый пароль",
					PLACEHOLDER2: "Введите ещё раз",
				},
			},
		};

		// Добавление констант в прототип Vue
	},
};

export default ConstantsPlugin;
