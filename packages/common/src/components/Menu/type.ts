export interface MenuItemProps {
  key: string;
  title: string;
  label?: string;
  children?: MenuItemProps[];
}
export interface MenuProps {
  items: MenuItemProps[];
  visiable?: boolean;
  theme?: string;
}
