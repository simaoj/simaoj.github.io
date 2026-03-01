"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  const rolesEn = ["Senior Software Engineer", "Professor"];
  const rolesPt = ["Engenheiro de Software Sênior", "Professor"];

  const stats = [
    { label: "Experiência", value: "15+", unit: "anos" },
    { label: "Projetos", value: "40+", unit: "" },
    { label: "Café", value: "1.2k", unit: "xícaras" },
    { label: "Commits", value: "8.4k", unit: "" },
  ];

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20">
      <div className="py-15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col gap-10 order-2 lg:order-1">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2">
                {(t("common.language") === "Português" ? rolesPt : rolesEn).map((role: string, idx: number) => (
                  <div key={idx} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary w-fit border border-blue-100">
                    <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-bold tracking-widest uppercase text-[10px]">{role}</span>
                  </div>
                ))}
              </div>
              <h1 className="section-heading text-5xl md:text-6xl leading-[1.05] tracking-tight">
                {t("home.title")}
              </h1>
              <p className="text-content-muted text-md md:text-xl leading-relaxed max-w-2xl font-light">
                {t("home.description")}
              </p>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link href="/cv" className="bg-primary hover:bg-blue-700 text-white px-10 py-5 rounded-full font-bold transition-all flex items-center gap-3 shadow-xl shadow-blue-500/20 group">
                {t("home.cta.cv")}
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/stack" className="bg-white border border-gray-200 hover:border-content-dark text-content-dark px-10 py-5 rounded-full font-bold transition-all">
                {t("home.cta.stack")}
              </Link>
            </div>
            <div className="flex items-center gap-8 pt-6">
              <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://github.com/simaoj" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">code</span> {t("home.social.github")}
              </a>
              <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://www.linkedin.com/in/jpsimao" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">group</span> {t("home.social.linkedin")}
              </a>
              <a className="text-content-muted hover:text-content-dark transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" href="https://lattes.cnpq.br/4305682045202863" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-xl">science</span> {t("home.social.lattes")}
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
                    alt="Professional headshot"
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
            <h2 className="section-heading text-4xl mb-8">
              {t("home.title").split(",")[0]}
            </h2>
            <div className="flex flex-col gap-6 text-content-muted text-lg leading-relaxed">
              <p>
                {t("home.philosophy.paragraph1")}
              </p>
              <p>
                {t("home.philosophy.paragraph2")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-3 rounded-3xl p-10 bg-white border border-gray-100 hover:border-primary/20 transition-colors shadow-sm">
                <p className="text-content-muted text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                <p className="text-content-dark tracking-tighter text-5xl font-black">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
