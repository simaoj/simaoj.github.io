"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

type ExperienciaKey = "specialist" | "advanced" | "proficient" | "intermediate" | "learning";
type CategoriaKey = "languages" | "frontend" | "backend" | "dataAi" | "infraDevops" | "cloud" | "observability" | "databases" | "messaging" | "testing";

type Tech = {
  name: string;
  categoryKey: CategoriaKey;
  icon: string;
  levelKey?: ExperienciaKey;
  descriptionKey?: string;
  tags?: string[];
  url?: string;
  bgColor?: string;
};

const categoriaMeta: Record<
  CategoriaKey,
  { icon: string; pillBg: string; pillText: string }
> = {
  languages: { icon: "code", pillBg: "bg-blue-50", pillText: "text-blue-700" },
  frontend: { icon: "web", pillBg: "bg-sky-50", pillText: "text-sky-700" },
  backend: { icon: "dns", pillBg: "bg-emerald-50", pillText: "text-emerald-700" },
  dataAi: { icon: "neurology", pillBg: "bg-violet-50", pillText: "text-violet-700" },
  infraDevops: { icon: "settings_suggest", pillBg: "bg-slate-100", pillText: "text-slate-700" },
  cloud: { icon: "cloud", pillBg: "bg-amber-50", pillText: "text-amber-700" },
  observability: { icon: "monitoring", pillBg: "bg-teal-50", pillText: "text-teal-700" },
  databases: { icon: "database", pillBg: "bg-indigo-50", pillText: "text-indigo-700" },
  messaging: { icon: "move_to_inbox", pillBg: "bg-orange-50", pillText: "text-orange-700" },
  testing: { icon: "fact_check", pillBg: "bg-lime-50", pillText: "text-lime-800" },
};

function experienciaBadge(levelKey?: ExperienciaKey) {
  if (!levelKey) return { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100" };
  switch (levelKey) {
    case "specialist":
      return { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-100" };
    case "advanced":
      return { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-100" };
    case "proficient":
      return { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-100" };
    case "intermediate":
      return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" };
    case "learning":
      return { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-100" };
  }
}

export default function TechStack() {
  const t = useTranslations();
  
  const techs: Tech[] = [
    // Linguagens
    { name: "TypeScript", categoryKey: "languages", icon: "data_object", levelKey: "specialist", descriptionKey: "typescript", bgColor: "bg-blue-600" },
    { name: "Python", categoryKey: "languages", icon: "integration_instructions", levelKey: "advanced", descriptionKey: "python", bgColor: "bg-yellow-400" },
    { name: "Go", categoryKey: "languages", icon: "bolt", levelKey: "learning", descriptionKey: "go", bgColor: "bg-cyan-500" },
    { name: "Ruby", categoryKey: "languages", icon: "diamond", levelKey: "intermediate", descriptionKey: "ruby", bgColor: "bg-rose-600" },
    { name: "PHP", categoryKey: "languages", icon: "code_blocks", levelKey: "intermediate", descriptionKey: "php", bgColor: "bg-indigo-600" },

    // Frontend
    { name: "Next.js", categoryKey: "frontend", icon: "token", levelKey: "advanced", descriptionKey: "nextjs", bgColor: "bg-black" },
    { name: "React", categoryKey: "frontend", icon: "extension", levelKey: "advanced", descriptionKey: "react", bgColor: "bg-sky-500" },
    { name: "Tailwind CSS", categoryKey: "frontend", icon: "palette", levelKey: "advanced", descriptionKey: "tailwind", bgColor: "bg-sky-400" },

    // Backend
    { name: "FastAPI", categoryKey: "backend", icon: "api", levelKey: "specialist", descriptionKey: "fastapi", bgColor: "bg-emerald-500" },
    { name: "Node.js", categoryKey: "backend", icon: "memory", levelKey: "specialist", descriptionKey: "nodejs", bgColor: "bg-emerald-600" },
    { name: "Ruby on Rails", categoryKey: "backend", icon: "diamond", levelKey: "advanced", descriptionKey: "rails", bgColor: "bg-rose-500" },
    { name: "GraphQL", categoryKey: "backend", icon: "account_tree", levelKey: "advanced", descriptionKey: "graphql", bgColor: "bg-pink-600" },
    { name: "Laravel", categoryKey: "backend", icon: "layers", levelKey: "advanced", descriptionKey: "laravel", bgColor: "bg-red-600" },

    // Dados & IA
    { name: "Amazon Bedrock", categoryKey: "dataAi", icon: "hub", levelKey: "specialist", descriptionKey: "bedrock", bgColor: "bg-orange-600" },
    { name: "OpenAI", categoryKey: "dataAi", icon: "auto_awesome", levelKey: "specialist", descriptionKey: "openai", bgColor: "bg-slate-900" },

    // Bancos de Dados
    { name: "PostgreSQL", categoryKey: "databases", icon: "database", levelKey: "specialist", descriptionKey: "postgresql", bgColor: "bg-indigo-600" },
    { name: "DynamoDB", categoryKey: "databases", icon: "storage", levelKey: "specialist", descriptionKey: "dynamodb", bgColor: "bg-indigo-500" },
    { name: "Redis", categoryKey: "databases", icon: "bolt", levelKey: "advanced", descriptionKey: "redis", bgColor: "bg-rose-600" },

    // Infra & DevOps
    { name: "Docker", categoryKey: "infraDevops", icon: "view_in_ar", levelKey: "advanced", descriptionKey: "docker", bgColor: "bg-blue-600" },
    { name: "Kubernetes", categoryKey: "infraDevops", icon: "workspaces", levelKey: "advanced", descriptionKey: "kubernetes", bgColor: "bg-blue-700" },
    { name: "CloudFormation", categoryKey: "infraDevops", icon: "cloud_queue", levelKey: "advanced", descriptionKey: "cloudformation", bgColor: "bg-purple-600" },
    { name: "Terraform", categoryKey: "infraDevops", icon: "schema", levelKey: "intermediate", descriptionKey: "terraform", bgColor: "bg-purple-700" },
    { name: "GitHub Actions", categoryKey: "infraDevops", icon: "bolt", levelKey: "advanced", descriptionKey: "githubactions", bgColor: "bg-slate-900" },

    // Nuvem
    { name: "AWS", categoryKey: "cloud", icon: "cloud_circle", levelKey: "advanced", descriptionKey: "aws", bgColor: "bg-orange-500" },
    { name: "Azure", categoryKey: "cloud", icon: "cloud", levelKey: "intermediate", descriptionKey: "azure", bgColor: "bg-sky-600" },

    // Observabilidade
    { name: "OpenTelemetry", categoryKey: "observability", icon: "timeline", levelKey: "advanced", descriptionKey: "opentelemetry", bgColor: "bg-teal-700" },
    { name: "Dynatrace", categoryKey: "observability", icon: "monitor_heart", levelKey: "advanced", descriptionKey: "dynatrace", bgColor: "bg-teal-600" },
    { name: "Kibana", categoryKey: "observability", icon: "bar_chart", levelKey: "advanced", descriptionKey: "kibana", bgColor: "bg-amber-600" },
    { name: "SonarQube", categoryKey: "observability", icon: "rule", levelKey: "advanced", descriptionKey: "sonarqube", bgColor: "bg-emerald-700" },

    // Testes
    { name: "Jest", categoryKey: "testing", levelKey: "advanced", icon: "science", descriptionKey: "jest", bgColor: "bg-lime-700" },
    { name: "Pytest", categoryKey: "testing", levelKey: "advanced", icon: "biotech", descriptionKey: "pytest", bgColor: "bg-lime-600" },
    { name: "Locust", categoryKey: "testing", levelKey: "intermediate", icon: "speed", descriptionKey: "locust", bgColor: "bg-lime-800" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<"all" | CategoriaKey>("all");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(techs.map((t) => t.categoryKey)));
    return ["all", ...unique] as const;
  }, [techs]);

  const filteredTechs = useMemo(() => {
    const q = query.trim().toLowerCase();

    return techs
      .filter((tech) => (selectedCategory === "all" ? true : tech.categoryKey === selectedCategory))
      .filter((tech) => {
        if (!q) return true;
        const categoryTranslated = t(`stack.categories.${tech.categoryKey}`);
        const levelTranslated = tech.levelKey ? t(`stack.experience.${tech.levelKey}`) : "";
        const descTranslated = tech.descriptionKey ? t(`stack.techs.${tech.descriptionKey}`) : "";
        
        const hay = [tech.name, categoryTranslated, levelTranslated, descTranslated, ...(tech.tags ?? [])]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => {
        if (a.categoryKey !== b.categoryKey) return a.categoryKey.localeCompare(b.categoryKey);
        return a.name.localeCompare(b.name);
      });
  }, [techs, selectedCategory, query, t]);

  const grouped = useMemo(() => {
    const map = new Map<CategoriaKey, Tech[]>();
    for (const tech of filteredTechs) {
      const arr = map.get(tech.categoryKey) ?? [];
      arr.push(tech);
      map.set(tech.categoryKey, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredTechs]);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-5xl mb-4 text-content-dark">{t("stack.title")}</h1>
        <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
          {t("stack.description")}
        </p>
      </div>

      {/* Controles */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-wrap gap-2 items-center mb-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-content-muted mr-3">
            {t("stack.ui.category")}
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
              {cat === "all" ? t("stack.ui.all") : t(`stack.categories.${cat}`)}
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
                placeholder={t("stack.ui.searchPlaceholder")}
                className="w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-slate-500 hover:text-slate-800 transition"
                  aria-label={t("stack.ui.clear")}
                  title={t("stack.ui.clear")}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-500">
          {t("stack.ui.showing")} <span className="font-semibold text-slate-800">{filteredTechs.length}</span>{" "}
          {filteredTechs.length === 1 ? t("stack.ui.item") : t("stack.ui.items")}.
        </div>
      </div>

      {/* Seções */}
      <div className="space-y-14">
        {grouped.map(([categoryKey, items]) => {
          const meta = categoriaMeta[categoryKey];

          return (
            <section key={categoryKey}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`${meta.pillBg} p-2 rounded-lg ${meta.pillText}`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{meta.icon}</span>
                </div>
                <div className="flex items-center gap-3">
                  <h2 className="text-slate-900 text-2xl font-extrabold tracking-tight">
                    {t(`stack.categories.${categoryKey}`)}
                  </h2>
                  <span className="text-xs text-slate-500 font-semibold">({items.length})</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((tech) => {
                  const lb = experienciaBadge(tech.levelKey);
                  const iconBg = tech.bgColor ?? "bg-slate-800";

                  const card = (
                    <div className="group flex flex-col gap-5 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[171px]">
                      {/* HEADER: ícone + título (à direita) */}
                      <div className="flex items-start gap-4">
                        <div
                          className={`size-14 rounded-2xl ${iconBg} flex items-center justify-center text-white shadow-lg shrink-0`}
                        >
                          <span className="material-symbols-outlined text-3xl font-medium">
                            {tech.icon}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3">
                            <h3 className="text-slate-900 text-xl font-extrabold leading-tight truncate">
                              {tech.name}
                            </h3>
                          </div>

                          {/* TAGS (categoria + experiência) lado a lado, menores */}
                          <div className="flex flex-wrap gap-1.5 mt-2">

                            {tech.levelKey && (
                              <span
                                className={`text-[10px] leading-none font-bold px-2 py-1 rounded-full border uppercase tracking-tight ${lb.bg} ${lb.text} ${lb.border}`}
                              >
                                {t(`stack.experience.${tech.levelKey}`)}
                              </span>
                            )}

                            {tech.tags?.length
                              ? tech.tags.slice(0, 4).map((tag) => (
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
                      {tech.descriptionKey && (
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {t(`stack.techs.${tech.descriptionKey}`)}
                        </p>
                      )}
                    </div>
                  );

                  if (tech.url) {
                    return (
                      <a
                        key={tech.name}
                        href={tech.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                        aria-label={`Link ${tech.name}`}
                      >
                        {card}
                      </a>
                    );
                  }

                  return <div key={tech.name}>{card}</div>;
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
