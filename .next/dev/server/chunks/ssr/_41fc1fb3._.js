module.exports = [
"[project]/app/stack/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const categoriaMeta = {
    Linguagens: {
        title: "Linguagens",
        icon: "code",
        pillBg: "bg-blue-50",
        pillText: "text-blue-700"
    },
    Frontend: {
        title: "Frontend",
        icon: "web",
        pillBg: "bg-sky-50",
        pillText: "text-sky-700"
    },
    Backend: {
        title: "Backend",
        icon: "dns",
        pillBg: "bg-emerald-50",
        pillText: "text-emerald-700"
    },
    "Dados & IA": {
        title: "Dados & IA",
        icon: "neurology",
        pillBg: "bg-violet-50",
        pillText: "text-violet-700"
    },
    "Infra & DevOps": {
        title: "Infra & DevOps",
        icon: "settings_suggest",
        pillBg: "bg-slate-100",
        pillText: "text-slate-700"
    },
    Nuvem: {
        title: "Nuvem",
        icon: "cloud",
        pillBg: "bg-amber-50",
        pillText: "text-amber-700"
    },
    Observabilidade: {
        title: "Observabilidade",
        icon: "monitoring",
        pillBg: "bg-teal-50",
        pillText: "text-teal-700"
    },
    "Bancos de Dados": {
        title: "Bancos de Dados",
        icon: "database",
        pillBg: "bg-indigo-50",
        pillText: "text-indigo-700"
    },
    Mensageria: {
        title: "Mensageria",
        icon: "move_to_inbox",
        pillBg: "bg-orange-50",
        pillText: "text-orange-700"
    },
    Testes: {
        title: "Testes",
        icon: "fact_check",
        pillBg: "bg-lime-50",
        pillText: "text-lime-800"
    }
};
function experienciaBadge(level) {
    if (!level) return {
        bg: "bg-slate-50",
        text: "text-slate-600",
        border: "border-slate-100"
    };
    switch(level){
        case "Especialista":
            return {
                bg: "bg-emerald-50",
                text: "text-emerald-700",
                border: "border-emerald-100"
            };
        case "Avançado":
            return {
                bg: "bg-blue-50",
                text: "text-blue-700",
                border: "border-blue-100"
            };
        case "Proficiente":
            return {
                bg: "bg-indigo-50",
                text: "text-indigo-700",
                border: "border-indigo-100"
            };
        case "Intermediário":
            return {
                bg: "bg-amber-50",
                text: "text-amber-700",
                border: "border-amber-100"
            };
        case "Aprendendo":
            return {
                bg: "bg-slate-50",
                text: "text-slate-600",
                border: "border-slate-100"
            };
    }
}
function experienciaRank(level) {
    switch(level){
        case "Especialista":
            return 5;
        case "Avançado":
            return 4;
        case "Proficiente":
            return 3;
        case "Intermediário":
            return 2;
        case "Aprendendo":
            return 1;
        default:
            return 0;
    }
}
function TechStack() {
    const techs = [
        // Linguagens
        {
            name: "TypeScript",
            category: "Linguagens",
            icon: "data_object",
            level: "Especialista",
            description: "Minha principal ferramenta para aplicações complexas e seguras por tipagem.",
            bgColor: "bg-blue-600"
        },
        {
            name: "Python",
            category: "Linguagens",
            icon: "integration_instructions",
            level: "Especialista",
            description: "APIs, automação, processamento de dados e integrações com IA.",
            bgColor: "bg-yellow-400"
        },
        {
            name: "Go",
            category: "Linguagens",
            icon: "bolt",
            level: "Intermediário",
            description: "Serviços cloud-native e ferramentas com alta performance.",
            bgColor: "bg-cyan-500"
        },
        {
            name: "Ruby",
            category: "Linguagens",
            icon: "diamond",
            level: "Intermediário",
            description: "Scripts, automações e manutenção de sistemas legados.",
            bgColor: "bg-rose-600"
        },
        {
            name: "PHP",
            category: "Linguagens",
            icon: "code_blocks",
            level: "Avançado",
            description: "Backends web e manutenção/evolução de aplicações.",
            bgColor: "bg-indigo-600"
        },
        // Frontend
        {
            name: "Next.js",
            category: "Frontend",
            icon: "token",
            level: "Avançado",
            description: "Apps SSR/ISR, SEO e performance.",
            bgColor: "bg-black"
        },
        {
            name: "React",
            category: "Frontend",
            icon: "extension",
            level: "Avançado",
            description: "Componentização, hooks e padrões de UI.",
            bgColor: "bg-sky-500"
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            icon: "palette",
            level: "Avançado",
            description: "UI rápida com utilitários e consistência de design.",
            bgColor: "bg-sky-400"
        },
        // Backend
        {
            name: "FastAPI",
            category: "Backend",
            icon: "api",
            level: "Especialista",
            description: "APIs assíncronas com OpenAPI e tipagem.",
            bgColor: "bg-emerald-500"
        },
        {
            name: "Node.js",
            category: "Backend",
            icon: "memory",
            level: "Especialista",
            description: "APIs, workers e integrações.",
            bgColor: "bg-emerald-600"
        },
        {
            name: "Ruby on Rails",
            category: "Backend",
            icon: "diamond",
            level: "Avançado",
            description: "Desenvolvimento ágil de backends web com convenção sobre configuração.",
            bgColor: "bg-rose-500"
        },
        {
            name: "GraphQL",
            category: "Backend",
            icon: "account_tree",
            level: "Avançado",
            description: "APIs orientadas a schema e camadas de agregação.",
            bgColor: "bg-pink-600"
        },
        {
            name: "Laravel",
            category: "Backend",
            icon: "layers",
            level: "Avançado",
            description: "Desenvolvimento rápido de aplicações PHP com boa estrutura e produtividade.",
            bgColor: "bg-red-600"
        },
        // Dados & IA
        {
            name: "Amazon Bedrock",
            category: "Dados & IA",
            icon: "hub",
            level: "Especialista",
            description: "Agents, tool use, integrações e arquitetura de apps com modelos fundacionais.",
            bgColor: "bg-orange-600"
        },
        {
            name: "OpenAI",
            category: "Dados & IA",
            icon: "auto_awesome",
            level: "Especialista",
            description: "Construção de aplicações com LLMs, ferramentas e fluxos multimodais.",
            bgColor: "bg-slate-900"
        },
        // Bancos de Dados
        {
            name: "PostgreSQL",
            category: "Bancos de Dados",
            icon: "database",
            level: "Especialista",
            description: "Modelagem relacional, índices e performance.",
            bgColor: "bg-indigo-600"
        },
        {
            name: "DynamoDB",
            category: "Bancos de Dados",
            icon: "storage",
            level: "Especialista",
            description: "Padrões de alta escala e single-table.",
            bgColor: "bg-indigo-500"
        },
        {
            name: "Redis",
            category: "Bancos de Dados",
            icon: "bolt",
            level: "Avançado",
            description: "Cache, rate limit e filas simples.",
            bgColor: "bg-rose-600"
        },
        // Infra & DevOps
        {
            name: "Docker",
            category: "Infra & DevOps",
            icon: "view_in_ar",
            level: "Avançado",
            description: "Containers, multi-stage builds e consistência dev/prod.",
            bgColor: "bg-blue-600"
        },
        {
            name: "Kubernetes",
            category: "Infra & DevOps",
            icon: "workspaces",
            level: "Avançado",
            description: "Deployments, services e escalabilidade.",
            bgColor: "bg-blue-700"
        },
        {
            name: "CloudFormation",
            category: "Infra & DevOps",
            icon: "cloud_queue",
            level: "Avançado",
            description: "IaC com templates e stacks.",
            bgColor: "bg-purple-600"
        },
        {
            name: "Terraform",
            category: "Infra & DevOps",
            icon: "schema",
            level: "Intermediário",
            description: "IaC com módulos e ambientes.",
            bgColor: "bg-purple-700"
        },
        {
            name: "GitHub Actions",
            category: "Infra & DevOps",
            icon: "bolt",
            level: "Avançado",
            description: "CI/CD com workflows, gates e releases.",
            bgColor: "bg-slate-900"
        },
        // Nuvem
        {
            name: "AWS",
            category: "Nuvem",
            icon: "cloud_circle",
            level: "Avançado",
            description: "Serviços cloud-native e arquitetura.",
            bgColor: "bg-orange-500"
        },
        {
            name: "Azure",
            category: "Nuvem",
            icon: "cloud",
            level: "Intermediário",
            description: "Serviços e integrações em ambiente corporativo.",
            bgColor: "bg-sky-600"
        },
        // Observabilidade
        {
            name: "OpenTelemetry",
            category: "Observabilidade",
            icon: "timeline",
            level: "Avançado",
            description: "Traces, métricas e logs com instrumentação padrão.",
            bgColor: "bg-teal-700"
        },
        {
            name: "Dynatrace",
            category: "Observabilidade",
            icon: "monitor_heart",
            level: "Avançado",
            description: "APM, dashboards e alertas.",
            bgColor: "bg-teal-600"
        },
        {
            name: "Kibana",
            category: "Observabilidade",
            icon: "bar_chart",
            level: "Avançado",
            description: "Dashboards, exploração e visualização de logs/métricas.",
            bgColor: "bg-amber-600"
        },
        {
            name: "SonarQube",
            category: "Observabilidade",
            icon: "rule",
            level: "Avançado",
            description: "Qualidade de código, métricas e análise estática.",
            bgColor: "bg-emerald-700"
        },
        // Testes
        {
            name: "Jest",
            category: "Testes",
            level: "Avançado",
            icon: "science",
            description: "Testes unitários e integração em JS/TS.",
            bgColor: "bg-lime-700"
        },
        {
            name: "Pytest",
            category: "Testes",
            level: "Avançado",
            icon: "biotech",
            description: "Testes em Python com fixtures.",
            bgColor: "bg-lime-600"
        },
        {
            name: "Locust",
            category: "Testes",
            level: "Intermediário",
            icon: "speed",
            description: "Testes de carga e performance com cenários realistas.",
            bgColor: "bg-lime-800"
        }
    ];
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Todos");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const unique = Array.from(new Set(techs.map((t)=>t.category)));
        return [
            "Todos",
            ...unique
        ];
    }, [
        techs
    ]);
    const filteredTechs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = query.trim().toLowerCase();
        return techs.filter((t)=>selectedCategory === "Todos" ? true : t.category === selectedCategory).filter((t)=>{
            if (!q) return true;
            const hay = [
                t.name,
                t.category,
                t.level ?? "",
                t.description ?? "",
                ...t.tags ?? []
            ].join(" ").toLowerCase();
            return hay.includes(q);
        }).sort((a, b)=>{
            if (a.category !== b.category) return a.category.localeCompare(b.category);
            const levelDiff = experienciaRank(b.level) - experienciaRank(a.level);
            if (levelDiff !== 0) return levelDiff;
            return a.name.localeCompare(b.name);
        });
    }, [
        techs,
        selectedCategory,
        query
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const t of filteredTechs){
            const arr = map.get(t.category) ?? [];
            arr.push(t);
            map.set(t.category, arr);
        }
        return Array.from(map.entries()).sort(([a], [b])=>a.localeCompare(b));
    }, [
        filteredTechs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-serif text-5xl mb-4 text-content-dark",
                        children: "Stack"
                    }, void 0, false, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-content-muted text-lg max-w-3xl font-light leading-relaxed",
                        children: "Uma visão geral das tecnologias, linguagens e ferramentas que compõem minha stack."
                    }, void 0, false, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/stack/page.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 items-center mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black uppercase tracking-widest text-content-muted mr-3",
                                children: "Categoria:"
                            }, void 0, false, {
                                fileName: "[project]/app/stack/page.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(cat),
                                    className: `px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${selectedCategory === cat ? "bg-content-dark text-white shadow-sm" : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"}`,
                                    children: cat
                                }, cat, false, {
                                    fileName: "[project]/app/stack/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-3 md:items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-slate-500",
                                        children: "search"
                                    }, void 0, false, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Buscar tecnologia, categoria, experiência...",
                                        className: "w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuery(""),
                                        className: "text-slate-500 hover:text-slate-800 transition",
                                        "aria-label": "Limpar busca",
                                        title: "Limpar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/stack/page.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stack/page.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/stack/page.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: [
                            "Mostrando ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800",
                                children: filteredTechs.length
                            }, void 0, false, {
                                fileName: "[project]/app/stack/page.tsx",
                                lineNumber: 227,
                                columnNumber: 21
                            }, this),
                            " ",
                            filteredTechs.length === 1 ? "item" : "itens",
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/stack/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-14",
                children: grouped.map(([category, items])=>{
                    const meta = categoriaMeta[category];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${meta.pillBg} p-2 rounded-lg ${meta.pillText}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-2xl font-bold",
                                            children: meta.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/stack/page.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-slate-900 text-2xl font-extrabold tracking-tight",
                                                children: meta.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/stack/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-500 font-semibold",
                                                children: [
                                                    "(",
                                                    items.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/stack/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/stack/page.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: items.map((t)=>{
                                    const lb = experienciaBadge(t.level);
                                    const iconBg = t.bgColor ?? "bg-slate-800";
                                    const card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group flex flex-col gap-5 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[171px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `size-14 rounded-2xl ${iconBg} flex items-center justify-center text-white shadow-lg shrink-0`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-3xl font-medium",
                                                            children: t.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/stack/page.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/stack/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-slate-900 text-xl font-extrabold leading-tight truncate",
                                                                    children: t.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/stack/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/stack/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5 mt-2",
                                                                children: [
                                                                    t.level && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] leading-none font-bold px-2 py-1 rounded-full border uppercase tracking-tight ${lb.bg} ${lb.text} ${lb.border}`,
                                                                        children: t.level
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/stack/page.tsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    t.tags?.length ? t.tags.slice(0, 4).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] leading-none px-2 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100",
                                                                            children: tag
                                                                        }, tag, false, {
                                                                            fileName: "[project]/app/stack/page.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 35
                                                                        }, this)) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/stack/page.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/stack/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/stack/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 23
                                            }, this),
                                            t.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-sm leading-relaxed",
                                                children: t.description
                                            }, void 0, false, {
                                                fileName: "[project]/app/stack/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 21
                                    }, this);
                                    if (t.url) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: t.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "block",
                                            "aria-label": `Link ${t.name}`,
                                            children: card
                                        }, t.name, false, {
                                            fileName: "[project]/app/stack/page.tsx",
                                            lineNumber: 311,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: card
                                    }, t.name, false, {
                                        fileName: "[project]/app/stack/page.tsx",
                                        lineNumber: 324,
                                        columnNumber: 26
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/stack/page.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, this)
                        ]
                    }, category, true, {
                        fileName: "[project]/app/stack/page.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/stack/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/stack/page.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_41fc1fb3._.js.map