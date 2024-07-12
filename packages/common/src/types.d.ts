import { App } from "vue";
import Button from "./components/Button/index.vue";
declare module "@lesscode/common" {
  Plugin<[]>;
}
declare module "vue" {
  interface GlobalComp {
    Button: typeof Button;
  }
}
