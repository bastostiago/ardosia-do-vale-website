export interface Slide {
  image: string;
  title: string;
  text: string;
  path: string;
}

export interface MenuItem {
  description: string;
  path: string;
  subItems?: MenuItem[];
}
