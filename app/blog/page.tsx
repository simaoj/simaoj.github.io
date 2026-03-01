import Link from "next/link";
import Image from "next/image"; // <-- Não esqueça de importar
import { getAllPosts } from "../lib/markdown";

export default async function Blog() {
  const articles = getAllPosts();

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="flex flex-col max-w-4xl flex-1">
        <div className="mb-10">
          <h1 className="font-serif text-5xl mb-4 text-content-dark">Blog</h1>
          <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
            Insights, provas de conceito e experiências práticas sobre engenharia de software, arquitetura de sistemas, liderança técnica, carreira e educação.
          </p>
        </div>

        {/* Botões de Filtro */}
        <div className="flex flex-col gap-8 mb-20">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="flex h-9 items-center justify-center rounded-full bg-black text-white px-6 transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-widest">All Topics</span>
            </button>
            {/* ... outros botões ... */}
          </div>
        </div>

        {/* Lista de Artigos */}
        <div className="flex flex-col gap-16 w-full">
          {articles.map((article, idx) => (
            <Link href={`/blog/${article.slug}`} key={idx}>
              <article className="group grid grid-cols-1 md:grid-cols-4 gap-8 cursor-pointer">
                
                {/* Metadados (Data e Tempo) */}
                <div className="md:col-span-1 flex flex-col gap-1 border-t border-black/10 pt-4">
                  <time className="text-xs font-bold uppercase tracking-widest text-zinc-400">{article.meta.date}</time>
                  <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">{article.meta.readTime}</span>
                </div>
                
                {/* Conteúdo do Card */}
                <div className="md:col-span-3 flex flex-col gap-4 border-t border-black pt-4">
                  
                  {/* IMAGEM DE CAPA NA LISTA */}
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
        </div>

        {/* Paginação */}
        <div className="flex items-center justify-between mt-24 pt-10 border-t border-black/10">
          {/* ... */}
        </div>

      </div>
    </main>
  );
}