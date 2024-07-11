import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ui from "@lesscode/common";
import "@/style/index.scss";
createApp(App).use(router).use(ui).mount("#app");
