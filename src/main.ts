import { createApp } from "vue";
import { createPinia } from "pinia";

import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import "@/style/normalize.css";
import "@/style/reset.css";
import "ant-design-vue/dist/antd.css";

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount("#app");
