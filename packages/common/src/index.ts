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
      console.log(folderName);
    } else {
      Vue.component(fileName.split(".")[0], comp);
      console.log(fileName.split(".")[0]);
    }
  }
}

export default {
  install
};
