"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <header className="w-full h-[72px] px-12 flex items-center justify-between bg-[#1A1A2E] border-b border-[#3A3A52]">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-[#F26522]" />
        <span className="text-white text-[22px] font-bold tracking-tight">
          METAL REMICON
        </span>
      </div>

      <nav className="flex items-center gap-8">
        <Link href={`/${locale}`} className="text-white text-[15px]">
          {t("home")}
        </Link>
        <Link href={`/${locale}/products`} className="text-[#B8B8C8] text-[15px] hover:text-white transition-colors">
          {t("products")}
        </Link>
        <Link href={`/${locale}/about`} className="text-[#B8B8C8] text-[15px] hover:text-white transition-colors">
          {t("about")}
        </Link>
        <Link href={`/${locale}/contact`} className="text-[#B8B8C8] text-[15px] hover:text-white transition-colors">
          {t("contact")}
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-[#B8B8C8] hover:text-white transition-colors">
          <Search size={24} />
        </button>
        <button className="text-[#B8B8C8] hover:text-white transition-colors">
          <ShoppingCart size={24} />
        </button>
      </div>
    </header>
  );
}