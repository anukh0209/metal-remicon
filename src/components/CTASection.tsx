import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="w-full py-16 px-12 flex justify-center bg-[#F26522]">
      <div className="flex flex-col items-center gap-5 text-center max-w-[700px]">
        <h2 className="text-white text-4xl font-bold leading-tight">{t("title")}</h2>
        <p className="text-white text-base">{t("description")}</p>
        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-[#F26522] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {t("button")}
        </Link>
      </div>
    </section>
  );
}