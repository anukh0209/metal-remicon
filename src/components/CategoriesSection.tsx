import { useTranslations } from "next-intl";
import Link from "next/link";

const categories = [
  { key: "cat1", count: "count1" },
  { key: "cat2", count: "count2" },
  { key: "cat3", count: "count3" },
  { key: "cat4", count: "count4" },
];

export default function CategoriesSection() {
  const t = useTranslations("categories");

  return (
    <section className="w-full py-16 px-12 bg-[#16213E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-[32px] font-bold">{t("title")}</h2>
          <Link href="/products" className="text-[#F26522] text-[15px] hover:underline">
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="bg-[#2D2D44] rounded-xl p-6 flex flex-col items-center gap-4">
              <div className="w-[120px] h-[120px] rounded-full bg-[#3A3A52]" />
              <h3 className="text-white text-lg font-semibold">{t(cat.key as any)}</h3>
              <span className="text-[#6B6B7B] text-sm">{t(cat.count as any)}</span>
              <button className="px-5 py-2.5 bg-[#F26522] text-white rounded-md text-sm font-medium hover:bg-[#E55A1B] transition-colors">
                {t("viewBtn")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}