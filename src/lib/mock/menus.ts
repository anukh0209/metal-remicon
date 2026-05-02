export interface MenuItem {
  _id: string;
  label: string;
  url: string;
  order: number;
}

const headerMenu: MenuItem[] = [
  { _id: "1", label: "Нүүр", url: "/", order: 1 },
  { _id: "2", label: "Бүтээгдэхүүн", url: "/products", order: 2 },
  { _id: "3", label: "Бидний тухай", url: "/about", order: 3 },
  { _id: "4", label: "Холбоо барих", url: "/contact", order: 4 },
];

const footerMenu: MenuItem[] = [
  { _id: "5", label: "Нүүр", url: "/", order: 1 },
  { _id: "6", label: "Бүтээгдэхүүн", url: "/products", order: 2 },
  { _id: "7", label: "Бидний тухай", url: "/about", order: 3 },
];

export async function getHeaderMenu(): Promise<MenuItem[]> {
  return headerMenu;
}

export async function getFooterMenu(): Promise<MenuItem[]> {
  return footerMenu;
}