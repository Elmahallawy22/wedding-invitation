import LanguageSwitcher from "@/components/language-switcher";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <LanguageSwitcher />
    </main>
  );
}
