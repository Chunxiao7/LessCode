import Menu from "./Menu/index.vue";
import MenuItem from "./Menu/MenuItem.vue";
import SubMenu from "./Menu/SubMenu.vue";
declare module "ui" {
  export interface GlobalComponents {
    Menu: typeof Menu;
    MenuItem: typeof MenuItem;
    SubMenu: typeof SubMenu;
  }
}
