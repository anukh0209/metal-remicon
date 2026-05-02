import { useTranslations } from "next-intl";
import { ShieldCheck, Truck, Headphones, BadgeCheck } from "lucide-react";

const icons = {
  feature1: ShieldCheck,
  feature2: Truck,
  feature3: Headphones,
  feature4: BadgeCheck,
};

export default function TrustSection() {
  const t = useTranslations("trust");

  return (
    <section className="w-full py-10 px-12 flex justify-center gap-6 bg-[#1A1A2E]">
      {Object.entries(icons).map(([key, Icon]) => (
        <div key={key} className="flex items-center gap-3 px-5 py-4">
          <Icon size={28} className="text-[#F26522]" />
          <span className="text-white text-sm font-semibold">{t(key as any)}</span>
        </div>
      ))}
    </section>
  );
}