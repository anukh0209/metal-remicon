export interface Category {
  _id: string;
  name: string;
  slug: string;
}

const categories: Category[] = [
  { _id: "1", name: "Бетон эдлэл", slug: "concrete" },
  { _id: "2", name: "Төмөр бетон", slug: "reinforced" },
  { _id: "3", name: "Барилгын материал", slug: "materials" },
  { _id: "4", name: "Гаднах бүтээгдэхүүн", slug: "exterior" },
];

export async function getCategories(): Promise<Category[]> {
  return categories;
}