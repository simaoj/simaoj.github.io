import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-gray-100 px-6 md:px-20 py-6 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="size-9 bg-content-dark rounded-xl flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-lg">terminal</span>
        </div>
        <h2 className="text-content-dark text-xl font-black tracking-tight">Schardosim</h2>
      </div>
      <div className="flex flex-1 justify-end gap-12 items-center">
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-content-muted hover:text-primary transition-colors text-sm font-semibold tracking-wide">
            Início
          </Link>
          <Link href="/cv" className="text-content-muted hover:text-primary transition-colors text-sm font-semibold tracking-wide">
            Experiência          </Link>
          <Link href="/stack" className="text-content-muted hover:text-primary transition-colors text-sm font-semibold tracking-wide">
            Stack
          </Link>
          <Link href="/publications" className="text-content-muted hover:text-primary transition-colors text-sm font-semibold tracking-wide">
            Publicações
          </Link>
          <Link href="/blog" className="text-content-muted hover:text-primary transition-colors text-sm font-semibold tracking-wide">
            Blog
          </Link>
          
        </nav>
        <button className="bg-content-dark hover:bg-black text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
          Currículo 
          <span className="material-symbols-outlined" style={{fontSize: "12pt"}}>description</span>
        </button>
      </div>
    </header>
  );
}
