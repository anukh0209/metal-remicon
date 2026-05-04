"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const products = [
  { name: "M150 Бетон хольц", price: "₮ 185,000 / м³", oldPrice: "₮ 210,000" },
  { name: "M200 Бетон хольц", price: "₮ 220,000 / м³", oldPrice: "₮ 250,000" },
  { name: "Төмөр бетон хоолой", price: "₮ 145,000 / ш", oldPrice: "₮ 165,000" },
  { name: "Бетон блок", price: "₮ 2,500 / ш", oldPrice: "₮ 2,800" },
];

export default function ProductsSection() {
  const t = useTranslations("products");
  const locale = useLocale();

  return (
    <section className="w-full py-16 px-12 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white text-[32px] font-bold">{t("title")}</h2>
          <Link href={`/${locale}/products`} className="text-[#F26522] text-[15px] hover:underline">
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="bg-[#2D2D44] rounded-xl overflow-hidden">
              <div className="w-full h-[200px] bg-[#3A3A52] flex items-center justify-center">
                <span className="text-[#6B6B7B] text-[13px]">[Product Image]</span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-white text-base font-semibold">{product.name}</h3>
                <span className="text-[#F26522] text-lg font-bold">{product.price}</span>
                <span className="text-[#6B6B7B] text-sm line-through">{product.oldPrice}</span>
                <button className="w-full mt-2 py-2.5 bg-[#F26522] text-white rounded-md text-sm font-medium hover:bg-[#E55A1B] transition-colors">
                  {t("addToCart")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}