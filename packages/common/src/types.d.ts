import { App } from "vue";
import Button from "./components/Button/index.vue";
import { ButtonProps } from "./components/Button/type";

declare module "@lesscode/common" {
  interface GlobalComp {
    Button: typeof Button;
  }
}
declare module "vue" {}

export declare const ButtonProps: ButtonProps;
