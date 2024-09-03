import { App } from "vue";
export * from "./components/Button/type";
export { default as Button } from "./components/Button/index.vue";
export * from "./components/Menu/type"
export { default as Menu } from "./components/Menu/index.vue";
declare const common: {
  install: (Vue: App) => void;
};
export default common;
