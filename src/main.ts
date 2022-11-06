import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import "@/style/normalize.css";
import "@/style/reset.css";

app.use(createPinia());
app.use(router);

app.mount("#app");
