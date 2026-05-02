import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-[#16213E] py-16 px-12">
      <div className="max-w-7xl mx-auto flex justify-between gap-12">
        <div className="w-[300px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#F26522]" />
            <span className="text-white text-xl font-bold">METAL REMICON</span>
          </div>
          <p className="text-[#B8B8C8] text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="flex gap-16">
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">{t("products")}</h4>
            <Link href="/products/concrete" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Бетон эдлэл
            </Link>
            <Link href="/products/reinforced" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Төмөр бетон
            </Link>
            <Link href="/products/materials" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Барилгын материал
            </Link>
            <Link href="/products/exterior" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Гаднах бүтээгдэхүүн
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">{t("company")}</h4>
            <Link href="/about" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Бидний тухай
            </Link>
            <Link href="/projects" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Төслүүд
            </Link>
            <Link href="/news" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Мэдээ мэдээлэл
            </Link>
            <Link href="/careers" className="text-[#B8B8C8] text-sm hover:text-white transition-colors">
              Ажлын байр
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">{t("contact")}</h4>
            <span className="text-[#B8B8C8] text-sm">Утас: +976 11 123456</span>
            <span className="text-[#B8B8C8] text-sm">И-мэйл: info@metalremicon.mn</span>
            <span className="text-[#B8B8C8] text-sm">Хаяг: Улаанбаатар, Монгол</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#3A3A52] text-center">
        <p className="text-[#6B6B7B] text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
}