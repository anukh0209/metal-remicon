export interface Page {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  content?: string;
}

const pages: Page[] = [
  {
    _id: "1",
    name: "Бидний тухай",
    slug: "about",
    description: "Metal Remicon компанийн тухай",
    content: "<p>Барилгын салбарын тэргүүлэгч компани болох Metal Remicon...\u003c/p\u003e",
  },
  {
    _id: "2",
    name: "Бүтээгдэхүүн",
    slug: "products",
    description: "Барилгын материалын бүтээгдэхүүнүүд",
    content: "<p>Бетон, төмөр бетон, барилгын материал...\u003c/p\u003e",
  },
  {
    _id: "3",
    name: "Холбоо барих",
    slug: "contact",
    description: "Бидэнтэй холбоо барих",
    content: "<p>Утас: +976 11 123456\u003c/p\u003e",
  },
];

export async function getPages(): Promise<Page[]> {
  return pages;
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  return pages.find((p) => p.slug === slug) ?? null;
}