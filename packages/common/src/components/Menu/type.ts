export interface MenuItemProps {
  name?: string;
  level?:number;
  icon?:string;
}
export interface SubMenuProps extends MenuItemProps {
  key: string;
  children?: SubMenuProps[];
}
export interface MenuProps {
  items:SubMenuProps[];
  theme?: string;
  collapsed?:boolean;
}
