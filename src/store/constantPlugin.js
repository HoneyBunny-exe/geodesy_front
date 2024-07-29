const ConstantsPlugin = {
	install(app) {
		// Объект с константами
		app.config.globalProperties.$constants = {
			PATH: {},
			STRING: {
				CREATE: "Создать",
				HELP: "Помощь",
				HOME: "Главная",
				LOGIN: "Войти",
				LOGOUT: "Выйти",
				MAP: "Карта",
				PROFILE: "Профиль",
			},
		};

		// Добавление констант в прототип Vue
	},
};

export default ConstantsPlugin;
