const modules = import.meta.glob("./**/*.vue", { eager: true });

const ui = {};

ui.install = function (Vue) {
  for (const path in modules) {
    const fNames = path.split('/')
    const folderName = fNames[1]
    const fileName = fNames[2]
    const comp = modules[path].default
    if (fileName === "index.vue") {
      Vue.component(folderName, comp);
    } else {
      Vue.component(fileName.split(".")[0], comp);
    }
  }
};

export default ui;
