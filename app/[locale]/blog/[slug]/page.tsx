import { getPostBySlug, getAllPosts } from "../../../lib/markdown";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  const locales = ["pt", "en"];
  
  const params = [];
  for (const locale of locales) {
    const posts = getAllPosts(locale);
    for (const post of posts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }
  return params;
}

export default async function PostPage({ 
  params 
}: { 
  params: Promise<{ slug: string; locale: string }> 
}) {
  const resolvedParams = await params;
  
  try {
    const post = getPostBySlug(resolvedParams.slug, resolvedParams.locale);

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

           {/* Cover Image */}
           {post.meta.coverImage && (
             <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
               <Image 
                 src={post.meta.coverImage} 
                 alt={`${post.meta.title}`} 
                 fill 
                 className="object-cover" 
                 priority
               />
             </div>
           )}
        </header>
        
        {/* Markdown Content */}
        <article className="prose max-w-none dark:prose-invert prose-headings:font-serif prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700 prose-code:bg-gray-150 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-white prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:pl-4 prose-img:rounded-lg prose-img:shadow-md dark:prose-code:bg-gray-800">
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              JP
            </div>
            <div>
              <h3 className="text-lg font-bold text-content-dark">{post.meta.author}</h3>
              <p className="text-sm text-content-muted">
                {resolvedParams.locale === "pt" 
                  ? "Engenheiro de Software Sênior e Professor" 
                  : "Senior Software Engineer and Professor"}
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
