import { createStore } from "vuex";

const store = createStore({
	state: {
		isLoggedIn: false,
	},
	getters: {
		getLoggedIn: (state) => {
			return state.isLoggedIn;
		},
	},
});

export default store;
