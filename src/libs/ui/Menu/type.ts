export interface MenuItemProps {
  key: string;
  label?: string;
  title?: string;
  href?: string;
}
export interface SubMenuProps extends Omit<MenuItemProps, "href"> {
  desc?: string;
  children?: SubMenuProps[];
}
export interface MenuProps {
  items: SubMenuProps[];
}
