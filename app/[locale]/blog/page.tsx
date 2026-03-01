import { getAllPosts } from "../../lib/markdown";
import BlogClient from "./BlogClient";
import { getTranslations } from "next-intl/server";

export default async function Blog({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const articles = getAllPosts(locale) as any;
  const t = await getTranslations({ locale, namespace: "blog" });

  return <BlogClient articles={articles} locale={locale} translations={{ title: t("title"), description: t("description") }} />;
}
