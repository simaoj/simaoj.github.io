import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/markdown";
import { getTranslations } from "next-intl/server";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ tag?: string }> | { tag?: string };
};

export default async function Blog({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  
  const articles = getAllPosts(locale);
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const selectedTag = typeof resolvedSearchParams?.tag === "string" ? resolvedSearchParams.tag : null;

  const tagCounts = articles.reduce((accumulator, article) => {
    const rawTag = article.meta?.tag;
    const tag = typeof rawTag === "string" && rawTag.trim() !== "" ? rawTag.trim() : "No tag";
    accumulator[tag] = (accumulator[tag] || 0) + 1;
    return accumulator;
  }, {} as Record<string, number>);

  const topTags = Object.entries(tagCounts)
    .sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0], locale === "pt" ? "pt-BR" : "en-US"))
    .slice(0, 5)
    .map(([tag]) => tag);

  const hasActiveTag = selectedTag !== null && topTags.includes(selectedTag);
  const filteredArticles = hasActiveTag
    ? articles.filter((article) => article.meta?.tag === selectedTag)
    : articles;

  const allText = locale === "en" ? "All" : "Todos";
  const noArticlesText = locale === "en" 
    ? "No articles found for this filter."
    : "Nenhum artigo encontrado para este filtro.";
  const topicsText = locale === "en" ? "Topics:" : "Tópicos:";

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="flex flex-col max-w-4xl flex-1">
        <div className="mb-10">
          <h1 className="font-serif text-5xl mb-4 text-content-dark">{t("title")}</h1>
          <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-col gap-8 mb-20">
          <div className="flex flex-wrap gap-3 flex-1 items-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-content-muted mr-3">{topicsText}</span>

            <Link
              href={`/${locale}/blog`}
              className={`flex h-9 items-center justify-center rounded-full px-6 transition-colors ${!hasActiveTag
                  ? "bg-black text-white"
                  : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"
                }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-widest">{allText}</span>
            </Link>
            {topTags.map((tag) => (
              <Link
                key={tag}
                href={{ pathname: `/${locale}/blog`, query: { tag } }}
                className={`flex h-9 items-center justify-center rounded-full px-6 transition-colors ${selectedTag === tag
                    ? "bg-black text-white"
                    : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"
                  }`}
              >
                <span className="text-[11px] font-bold uppercase tracking-widest">{tag}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-16 w-full">
          {filteredArticles.map((article) => (
            <Link href={`/${locale}/blog/${article.slug}`} key={article.slug}>
              <article className="group grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">

                {/* Metadata */}
                <div className="md:col-span-1 flex flex-col gap-1 border-t border-black/10 pt-4">
                  <time className="text-xs font-bold uppercase tracking-widest text-zinc-400">{article.meta.date}</time>
                  <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">{article.meta.readTime}</span>
                </div>

                {/* Content */}
                <div className="md:col-span-3 flex flex-col gap-4 border-t border-black pt-4">

                  {/* Cover Image */}
                  {article.meta.coverImage && (
                    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-2 bg-zinc-100">
                      <Image
                        src={article.meta.coverImage}
                        alt={article.meta.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}

                  <div className="inline-block self-start px-2 py-0.5 bg-zinc-100 text-black text-[9px] uppercase font-bold tracking-[0.2em]">
                    {article.meta.tag}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
                    {article.meta.title}
                  </h3>
                  <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-normal">{article.meta.description}</p>
                </div>
              </article>
            </Link>
          ))}
          {filteredArticles.length === 0 && (
            <p className="text-center text-content-muted">{noArticlesText}</p>
          )}
        </div>
      </div>
    </main>
  );
}
