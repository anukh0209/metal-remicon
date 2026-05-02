import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mn", "en", "ru", "ko", "ja"],
  defaultLocale: "mn",
});