"use client";

import { useMemo, useState } from "react";

type Experiencia = "Especialista" | "Avançado" | "Proficiente" | "Intermediário" | "Aprendendo";

type Categoria =
  | "Linguagens"
  | "Frontend"
  | "Backend"
  | "Dados & IA"
  | "Infra & DevOps"
  | "Nuvem"
  | "Observabilidade"
  | "Bancos de Dados"
  | "Mensageria"
  | "Testes";

type Tech = {
  name: string;
  category: Categoria;
  icon: string; // material-symbols-outlined
  level?: Experiencia;
  description?: string;
  tags?: string[];
  url?: string;
  bgColor?: string; // icon background
};

const categoriaMeta: Record<
  Categoria,
  { title: string; icon: string; pillBg: string; pillText: string }
> = {
  Linguagens: { title: "Linguagens", icon: "code", pillBg: "bg-blue-50", pillText: "text-blue-700" },
  Frontend: { title: "Frontend", icon: "web", pillBg: "bg-sky-50", pillText: "text-sky-700" },
  Backend: { title: "Backend", icon: "dns", pillBg: "bg-emerald-50", pillText: "text-emerald-700" },
  "Dados & IA": { title: "Dados & IA", icon: "neurology", pillBg: "bg-violet-50", pillText: "text-violet-700" },
  "Infra & DevOps": { title: "Infra & DevOps", icon: "settings_suggest", pillBg: "bg-slate-100", pillText: "text-slate-700" },
  Nuvem: { title: "Nuvem", icon: "cloud", pillBg: "bg-amber-50", pillText: "text-amber-700" },
  Observabilidade: { title: "Observabilidade", icon: "monitoring", pillBg: "bg-teal-50", pillText: "text-teal-700" },
  "Bancos de Dados": { title: "Bancos de Dados", icon: "database", pillBg: "bg-indigo-50", pillText: "text-indigo-700" },
  Mensageria: { title: "Mensageria", icon: "move_to_inbox", pillBg: "bg-orange-50", pillText: "text-orange-700" },
  Testes: { title: "Testes", icon: "fact_check", pillBg: "bg-lime-50", pillText: "text-lime-800" },
};

function experienciaBadge(level?: Experiencia) {
  if (!level) return { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100" };
  switch (level) {
    case "Especialista":
      return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" };
    case "Avançado":
      return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" };
    case "Proficiente":
      return { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-100" };
    case "Intermediário":
      return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" };
    case "Aprendendo":
      return { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100" };
  }
}

export default function TechStack() {
  const techs: Tech[] = [
    // Linguagens
    { name: "TypeScript", category: "Linguagens", icon: "data_object", level: "Especialista", description: "Minha principal ferramenta para aplicações complexas e seguras por tipagem.", bgColor: "bg-blue-600" },
    { name: "Python", category: "Linguagens", icon: "integration_instructions", level: "Avançado", description: "APIs, automação, processamento de dados e integrações com IA.", bgColor: "bg-yellow-400" },
    { name: "Go", category: "Linguagens", icon: "bolt", level: "Aprendendo", description: "Serviços cloud-native e ferramentas com alta performance.", bgColor: "bg-cyan-500" },
    { name: "Ruby", category: "Linguagens", icon: "diamond", level: "Intermediário", description: "Scripts, automações e manutenção de sistemas legados.", bgColor: "bg-rose-600" },
    { name: "PHP", category: "Linguagens", icon: "code_blocks", level: "Intermediário", description: "Backends web e manutenção/evolução de aplicações.", bgColor: "bg-indigo-600" },

    // Frontend
    { name: "Next.js", category: "Frontend", icon: "token", level: "Avançado", description: "Apps SSR/ISR, SEO e performance.", bgColor: "bg-black" },
    { name: "React", category: "Frontend", icon: "extension", level: "Avançado", description: "Componentização, hooks e padrões de UI.", bgColor: "bg-sky-500" },
    { name: "Tailwind CSS", category: "Frontend", icon: "palette", level: "Avançado", description: "UI rápida com utilitários e consistência de design.", bgColor: "bg-sky-400" },

    // Backend
    { name: "FastAPI", category: "Backend", icon: "api", level: "Especialista", description: "APIs assíncronas com OpenAPI e tipagem.", bgColor: "bg-emerald-500" },
    { name: "Node.js", category: "Backend", icon: "memory", level: "Especialista", description: "APIs, workers e integrações.", bgColor: "bg-emerald-600" },
    { name: "Ruby on Rails", category: "Backend", icon: "diamond", level: "Avançado", description: "Desenvolvimento ágil de backends web com convenção sobre configuração.", bgColor: "bg-rose-500" },
    { name: "GraphQL", category: "Backend", icon: "account_tree", level: "Avançado", description: "APIs orientadas a schema e camadas de agregação.", bgColor: "bg-pink-600" },
    { name: "Laravel", category: "Backend", icon: "layers", level: "Avançado", description: "Desenvolvimento rápido de aplicações PHP com boa estrutura e produtividade.", bgColor: "bg-red-600" },

    // Dados & IA
    { name: "Amazon Bedrock", category: "Dados & IA", icon: "hub", level: "Especialista", description: "Agents, tool use, integrações e arquitetura de apps com modelos fundacionais.", bgColor: "bg-orange-600" },
    { name: "OpenAI", category: "Dados & IA", icon: "auto_awesome", level: "Especialista", description: "Construção de aplicações com LLMs, ferramentas e fluxos multimodais.", bgColor: "bg-slate-900" },

    // Bancos de Dados
    { name: "PostgreSQL", category: "Bancos de Dados", icon: "database", level: "Especialista", description: "Modelagem relacional, índices e performance.", bgColor: "bg-indigo-600" },
    { name: "DynamoDB", category: "Bancos de Dados", icon: "storage", level: "Especialista", description: "Padrões de alta escala e single-table.", bgColor: "bg-indigo-500" },
    { name: "Redis", category: "Bancos de Dados", icon: "bolt", level: "Avançado", description: "Cache, rate limit e filas simples.", bgColor: "bg-rose-600" },

    // Infra & DevOps
    { name: "Docker", category: "Infra & DevOps", icon: "view_in_ar", level: "Avançado", description: "Containers, multi-stage builds e consistência dev/prod.", bgColor: "bg-blue-600" },
    { name: "Kubernetes", category: "Infra & DevOps", icon: "workspaces", level: "Avançado", description: "Deployments, services e escalabilidade.", bgColor: "bg-blue-700" },
    { name: "CloudFormation", category: "Infra & DevOps", icon: "cloud_queue", level: "Avançado", description: "IaC com templates e stacks.", bgColor: "bg-purple-600" },
    { name: "Terraform", category: "Infra & DevOps", icon: "schema", level: "Intermediário", description: "IaC com módulos e ambientes.", bgColor: "bg-purple-700" },
    { name: "GitHub Actions", category: "Infra & DevOps", icon: "bolt", level: "Avançado", description: "CI/CD com workflows, gates e releases.", bgColor: "bg-slate-900" },

    // Nuvem
    { name: "AWS", category: "Nuvem", icon: "cloud_circle", level: "Avançado", description: "Serviços cloud-native e arquitetura.", bgColor: "bg-orange-500" },
    { name: "Azure", category: "Nuvem", icon: "cloud", level: "Intermediário", description: "Serviços e integrações em ambiente corporativo.", bgColor: "bg-sky-600" },

    // Observabilidade
    { name: "OpenTelemetry", category: "Observabilidade", icon: "timeline", level: "Avançado", description: "Traces, métricas e logs com instrumentação padrão.", bgColor: "bg-teal-700" },
    { name: "Dynatrace", category: "Observabilidade", icon: "monitor_heart", level: "Avançado", description: "APM, dashboards e alertas.", bgColor: "bg-teal-600" },
    { name: "Kibana", category: "Observabilidade", icon: "bar_chart", level: "Avançado", description: "Dashboards, exploração e visualização de logs/métricas.", bgColor: "bg-amber-600" },
    { name: "SonarQube", category: "Observabilidade", icon: "rule", level: "Avançado", description: "Qualidade de código, métricas e análise estática.", bgColor: "bg-emerald-700" },

    // Testes
    { name: "Jest", category: "Testes", level: "Avançado", icon: "science", description: "Testes unitários e integração em JS/TS.", bgColor: "bg-lime-700" },
    { name: "Pytest", category: "Testes", level: "Avançado", icon: "biotech", description: "Testes em Python com fixtures.", bgColor: "bg-lime-600" },
    { name: "Locust", category: "Testes", level: "Intermediário", icon: "speed", description: "Testes de carga e performance com cenários realistas.", bgColor: "bg-lime-800" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<"Todos" | Categoria>("Todos");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(techs.map((t) => t.category)));
    return ["Todos", ...unique] as const;
  }, [techs]);

  const filteredTechs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return techs
      .filter((t) => (selectedCategory === "Todos" ? true : t.category === selectedCategory))
      .filter((t) => {
        if (!q) return true;
        const hay = [t.name, t.category, t.level ?? "", t.description ?? "", ...(t.tags ?? [])]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => {
        if (a.category !== b.category) return a.category.localeCompare(b.category);
        return a.name.localeCompare(b.name);
      });
  }, [techs, selectedCategory, query]);

  const grouped = useMemo(() => {
    const map = new Map<Categoria, Tech[]>();
    for (const t of filteredTechs) {
      const arr = map.get(t.category) ?? [];
      arr.push(t);
      map.set(t.category, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTechs]);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-5xl mb-4 text-content-dark">Stack</h1>
        <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
          Uma visão geral das tecnologias, linguagens e ferramentas que compõem minha stack.
        </p>
      </div>

      {/* Controles */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-wrap gap-2 items-center mb-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-content-muted mr-3">
            Categoria:
          </span>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-content-dark text-white shadow-sm"
                  : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          {/* Busca */}
          <div className="flex-1">
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
              <span className="material-symbols-outlined text-slate-500">search</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar tecnologia, categoria, experiência..."
                className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-slate-500 hover:text-slate-800 transition"
                  aria-label="Limpar busca"
                  title="Limpar"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500">
          Mostrando <span className="font-semibold text-slate-800">{filteredTechs.length}</span>{" "}
          {filteredTechs.length === 1 ? "item" : "itens"}.
        </div>
      </div>

      {/* Seções */}
      <div className="space-y-14">
        {grouped.map(([category, items]) => {
          const meta = categoriaMeta[category];

          return (
            <section key={category}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`${meta.pillBg} p-2 rounded-lg ${meta.pillText}`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{meta.icon}</span>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-slate-900 text-2xl font-extrabold tracking-tight">
                    {meta.title}
                  </h2>
                  <span className="text-xs text-slate-500 font-semibold">({items.length})</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((t) => {
                  const lb = experienciaBadge(t.level);
                  const iconBg = t.bgColor ?? "bg-slate-800";

                  const card = (
                    <div className="group flex flex-col gap-5 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[171px]">
                      {/* HEADER: ícone + título (à direita) */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`size-14 rounded-2xl ${iconBg} flex items-center justify-center text-white shadow-lg shrink-0`}
                        >
                          <span className="material-symbols-outlined text-3xl font-medium">
                            {t.icon}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-slate-900 text-xl font-extrabold leading-tight truncate">
                              {t.name}
                            </h3>
                          </div>

                          {/* TAGS (categoria + experiência) lado a lado, menores */}
                          <div className="flex flex-wrap gap-1.5 mt-2">

                            {t.level && (
                              <span
                                className={`text-[10px] leading-none font-bold px-2 py-1 rounded-full border uppercase tracking-tight ${lb.bg} ${lb.text} ${lb.border}`}
                              >
                                {t.level}
                              </span>
                            )}

                            {t.tags?.length
                              ? t.tags.slice(0, 4).map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] leading-none px-2 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100"
                                  >
                                    {tag}
                                  </span>
                                ))
                              : null}
                          </div>
                        </div>
                      </div>

                      {/* Descrição */}
                      {t.description && (
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {t.description}
                        </p>
                      )}
                    </div>
                  );

                  if (t.url) {
                    return (
                      <a
                        key={t.name}
                        href={t.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                        aria-label={`Link ${t.name}`}
                      >
                        {card}
                      </a>
                    );
                  }

                  return <div key={t.name}>{card}</div>;
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}