import { ModuleNamespace } from "vite/types/hot.js";
import { App } from "vue";

const modules: Record<string, ModuleNamespace> = import.meta.glob("./components/**/*.vue", { eager: true });

function install(Vue: App) {
  for (const path in modules) {
    const fNames = path.split("/");
    const folderName = fNames[2];
    const fileName = fNames[3];
    const comp = modules[path].default;

    if (fileName === "index.vue") {
      Vue.component(folderName, comp);
    } else {
      Vue.component(fileName.split(".")[0], comp);
    }
  }
}

export default {
  install
};

export { default as Button } from "./components/Button/index.vue";
