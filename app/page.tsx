export default function Home() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20">
        <div className="py-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary w-fit border border-blue-100">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-bold tracking-widest uppercase text-[10px]">Engenheiro de Software Sênior</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary w-fit border border-blue-100">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-bold tracking-widest uppercase text-[10px]">Professor</span>
                  </div>
                </div>
                <h1 className="section-heading text-5xl md:text-6xl leading-[1.05] tracking-tight">
                  Tecnologia com propósito, engenharia com <span className="text-primary italic">impacto</span>.
                </h1>
                <p className="text-content-muted text-md md:text-xl leading-relaxed max-w-2xl font-light">
                  Sou José Pedro Schardosim Simão, engenheiro de software e professor com mais de 15 anos de experiência na criação de aplicações limpas, escaláveis e centradas no usuário.
                </p>
              </div>
              <div className="flex flex-wrap gap-5">
                <button className="bg-primary hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20 group">
                  Get in touch
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <button className="bg-white border border-gray-200 hover:border-content-dark text-content-dark px-10 py-5 rounded-full font-bold transition-all">
                  View Portfolio
                </button>
              </div>
              <div className="flex items-center gap-8 pt-6">
                <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://github.com/simaoj" target="_blank">
                  <span className="material-symbols-outlined text-xl">code</span> GitHub
                </a>
                <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://www.linkedin.com/in/jpsimao" target="_blank">
                  <span className="material-symbols-outlined text-xl">group</span> LinkedIn
                </a>
                <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://lattes.cnpq.br/4305682045202863" target="_blank">
                  <span className="material-symbols-outlined text-xl">science</span> Lattes
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded-[2.5rem] -rotate-2"></div>
                <div className="relative bg-white p-3 rounded-[2.5rem] shadow-2xl border border-gray-100">
                  <div className="overflow-hidden rounded-[2rem] aspect-[4/5] bg-gray-50">
                    <img
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                      alt="Professional headshot of Alex Rivera"
                      src="/home.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 border-t border-gray-200/60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="section-heading text-4xl mb-8">My Philosophy</h2>
              <div className="flex flex-col gap-6 text-content-muted text-lg leading-relaxed">
                <p>
                  With a passion for bridging the gap between sophisticated design and robust engineering, I specialize in React, Node.js, and cloud architecture. My approach focuses on writing maintainable code and delivering seamless digital experiences.
                </p>
                <p>
                  I believe that technology should be a tool that solves real-world problems and creates joy for users. Over the past half-decade, I've partnered with startups and established enterprises to turn complex ideas into elegant reality.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-3 rounded-3xl p-10 bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <p className="text-content-muted text-xs font-bold uppercase tracking-widest">Experience</p>
                <p className="text-content-dark tracking-tighter text-5xl font-black">
                  5<span className="text-primary">+</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-3xl p-10 bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <p className="text-content-muted text-xs font-bold uppercase tracking-widest">Projects</p>
                <p className="text-content-dark tracking-tighter text-5xl font-black">
                  40<span className="text-primary">+</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-3xl p-10 bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <p className="text-content-muted text-xs font-bold uppercase tracking-widest">Coffee</p>
                <p className="text-content-dark tracking-tighter text-5xl font-black">
                  1.2<span className="text-primary">k</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-3xl p-10 bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <p className="text-content-muted text-xs font-bold uppercase tracking-widest">Commits</p>
                <p className="text-content-dark tracking-tighter text-5xl font-black">
                  8.4<span className="text-primary">k</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-gray-200/60">
          <h3 className="text-center text-content-muted text-xs font-black uppercase tracking-[0.3em] mb-16">Expertise &amp; Technologies</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">javascript</span>
              <span className="text-[10px] font-black uppercase tracking-widest">JS / TS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">deployed_code</span>
              <span className="text-[10px] font-black uppercase tracking-widest">React</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">database</span>
              <span className="text-[10px] font-black uppercase tracking-widest">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">cloud_done</span>
              <span className="text-[10px] font-black uppercase tracking-widest">AWS Cloud</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">terminal</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-5xl">layers</span>
              <span className="text-[10px] font-black uppercase tracking-widest">Architecture</span>
            </div>
          </div>
        </section>
    </main>
  );
}
