import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="w-full min-h-[560px] px-12 py-20 flex items-center justify-between gap-12 bg-[#1A1A2E]">
      <div className="max-w-[560px] flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F26522] rounded w-fit">
          <span className="text-white text-[13px] font-semibold">{t("badge")}</span>
        </div>

        <h1 className="text-white text-5xl font-extrabold leading-tight tracking-tight">
          {t("title")}
        </h1>

        <p className="text-[#B8B8C8] text-base leading-relaxed">
          {t("description")}
        </p>

        <div className="flex gap-4">
          <Link
            href="/products"
            className="px-7 py-3.5 bg-[#F26522] text-white rounded-lg font-semibold hover:bg-[#E55A1B] transition-colors"
          >
            {t("primaryCta")}
          </Link>
          <Link
            href="/about"
            className="px-7 py-3.5 border border-[#3A3A52] text-white rounded-lg font-medium hover:border-[#F26522] transition-colors"
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </div>

      <div className="w-[520px] h-[400px] bg-[#2D2D44] rounded-2xl flex items-center justify-center">
        <span className="text-[#6B6B7B] text-sm">[Construction Image]</span>
      </div>
    </section>
  );
}