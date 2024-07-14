import { createApp } from "vue";
import App from "./App.vue";
import ui from "./index";
import "./style/index.scss";
createApp(App).use(ui).mount("#app");
