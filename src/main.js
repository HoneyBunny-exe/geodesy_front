import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import constantsPlugin from "./store/constantPlugin";

createApp(App).use(router).use(store).use(constantsPlugin).mount("#app");
