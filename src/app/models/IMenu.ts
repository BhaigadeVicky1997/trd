export interface IMenu {
  name: string;
  title: string;
  url: string;
  children?: Submenus[];
  icon: string;
}

export class Submenus {
  name: string;
  title: string;
  url: string;
}
