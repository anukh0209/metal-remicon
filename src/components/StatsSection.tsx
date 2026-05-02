import { useTranslations } from "next-intl";

const stats = [
  { key: "stat1", label: "label1" },
  { key: "stat2", label: "label2" },
  { key: "stat3", label: "label3" },
  { key: "stat4", label: "label4" },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="w-full py-16 px-12 flex justify-center gap-12 bg-[#16213E]">
      {stats.map((stat) => (
        <div key={stat.key} className="flex flex-col items-center gap-2">
          <span className="text-[#F26522] text-5xl font-extrabold">{t(stat.key as any)}</span>
          <span className="text-[#B8B8C8] text-base">{t(stat.label as any)}</span>
        </div>
      ))}
    </section>
  );
}