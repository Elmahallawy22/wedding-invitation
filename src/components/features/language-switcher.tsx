"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 rounded cursor-pointer ${locale === "en" ? "hidden" : "bg-gray-500"}`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("ar")}
        className={`px-3 py-1 rounded cursor-pointer ${locale === "ar" ? "hidden" : "bg-gray-500"}`}
      >
        AR
      </button>
    </div>
  );
}
