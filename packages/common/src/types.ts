import { App } from "vue";
export * from "./components/Button/type";
export { default as Button } from "./components/Button/index.vue";

declare const common: {
  install: (Vue: App) => void;
};
export default common;
