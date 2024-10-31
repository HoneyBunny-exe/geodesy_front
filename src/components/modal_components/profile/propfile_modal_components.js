// Подключаем этот файл туда, где нужен хоть один компонент модального окна для профиля
import change_auth_data_item from "./change_auth_data_item.vue";
import change_personal_data_item from "./change_personal_data_item.vue";

const modal_profile_components = {
	change_auth_data_item,
	change_personal_data_item,
};
export default modal_profile_components;
