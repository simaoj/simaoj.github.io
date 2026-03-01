import { getPostBySlug, getAllPosts } from "../../lib/markdown";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  try {
    const post = getPostBySlug(resolvedParams.slug);

    return (
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-20 py-12">
        <header className="mb-12 border-b border-black/10 pb-12">
           <div className="inline-block px-2 py-0.5 mb-6 bg-zinc-100 text-black text-[9px] uppercase font-bold tracking-[0.2em]">
             {post.meta.tag}
           </div>
           
           <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {post.meta.title}
           </h1>
           
           <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
             <time>{post.meta.date}</time>
             <span>•</span>
             <span>{post.meta.readTime}</span>
           </div>

           {/* IMAGEM DE CAPA NO HEADER DO POST */}
           {post.meta.coverImage && (
             <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
               <Image 
                 src={post.meta.coverImage} 
                 alt={`Capa do artigo: ${post.meta.title}`} 
                 fill 
                 className="object-cover" 
                 priority // <-- Super importante para a métrica de LCP do Google
               />
             </div>
           )}
        </header>
        
        {/* Conteúdo Markdown */}
        <article className="prose prose-zinc prose-lg max-w-none text-zinc-700">
          <ReactMarkdown
            components={{
              // Mantém aquela regra que fizemos antes para imagens no meio do texto
              img: ({ node, src, alt, ...props }) => {
                if (!src) return null;
                return (
                  <span className="block relative w-full h-[400px] my-8 rounded-xl overflow-hidden bg-zinc-100">
                    <Image src={src} alt={alt || ""} fill className="object-cover" {...props} />
                  </span>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    );
  } catch (error) {
    console.error("ERRO AO CARREGAR O POST:", error);
    return notFound();
  }
}