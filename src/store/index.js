import { createStore } from "vuex";

const store = createStore({
	state: {
		isLoggedIn: false,
		accessToken: "",
		refreshToken: "",
		TFAToken: "",
		YMapsAccessToken: "",
	},
	getters: {
		getLoggedIn: (state) => {
			return state.isLoggedIn;
		},
		getTFAToken: (state) => {
			return state.TFAToken;
		},
		getRefreshToken: (state) => {
			return state.refreshToken;
		},
		getAccessToken: (state) => {
			return state.accessToken;
		},
		getYMapsAccessToken: (state) => {
			return state.YMapsAccessToken;
		},

		getAll: (state) => {
			return state;
		},
	},
	mutations: {
		setTFAToken(state, newTFAToken) {
			state.TFAToken = newTFAToken;
		},
		deleteTFAToken(state) {
			state.TFAToken = null;
		},

		setRefreshToken(state, newRefreshToken) {
			state.refreshToken = newRefreshToken;
		},
		setAccessToken(state, newAccessToken) {
			state.accessToken = newAccessToken;
		},

		setIsLoggedIn(state) {
			state.isLoggedIn = true;
		},
		cleanIsLoggedIn(state) {
			state.isLoggedIn = false;
		},
	},
});

export default store;
