export interface MenuItemProps {
  name: string;
}
export interface SubMenuProps extends MenuItemProps {
  key: string;
  visiable?: boolean;
  children?: SubMenuProps[];
}
export interface MenuProps {
  items: SubMenuProps[];
  theme?: string;
}
