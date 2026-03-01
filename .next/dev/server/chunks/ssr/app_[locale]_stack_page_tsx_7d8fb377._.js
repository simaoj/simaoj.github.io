module.exports = [
"[project]/app/[locale]/stack/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TechStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const categoriaMeta = {
    languages: {
        icon: "code",
        pillBg: "bg-blue-50",
        pillText: "text-blue-700"
    },
    frontend: {
        icon: "web",
        pillBg: "bg-sky-50",
        pillText: "text-sky-700"
    },
    backend: {
        icon: "dns",
        pillBg: "bg-emerald-50",
        pillText: "text-emerald-700"
    },
    dataAi: {
        icon: "neurology",
        pillBg: "bg-violet-50",
        pillText: "text-violet-700"
    },
    infraDevops: {
        icon: "settings_suggest",
        pillBg: "bg-slate-100",
        pillText: "text-slate-700"
    },
    cloud: {
        icon: "cloud",
        pillBg: "bg-amber-50",
        pillText: "text-amber-700"
    },
    observability: {
        icon: "monitoring",
        pillBg: "bg-teal-50",
        pillText: "text-teal-700"
    },
    databases: {
        icon: "database",
        pillBg: "bg-indigo-50",
        pillText: "text-indigo-700"
    },
    messaging: {
        icon: "move_to_inbox",
        pillBg: "bg-orange-50",
        pillText: "text-orange-700"
    },
    testing: {
        icon: "fact_check",
        pillBg: "bg-lime-50",
        pillText: "text-lime-800"
    }
};
function experienciaBadge(levelKey) {
    if (!levelKey) return {
        bg: "bg-slate-50",
        text: "text-slate-600",
        border: "border-slate-100"
    };
    switch(levelKey){
        case "specialist":
            return {
                bg: "bg-emerald-50",
                text: "text-emerald-700",
                border: "border-emerald-100"
            };
        case "advanced":
            return {
                bg: "bg-blue-50",
                text: "text-blue-700",
                border: "border-blue-100"
            };
        case "proficient":
            return {
                bg: "bg-indigo-50",
                text: "text-indigo-700",
                border: "border-indigo-100"
            };
        case "intermediate":
            return {
                bg: "bg-amber-50",
                text: "text-amber-700",
                border: "border-amber-100"
            };
        case "learning":
            return {
                bg: "bg-slate-50",
                text: "text-slate-600",
                border: "border-slate-100"
            };
    }
}
function TechStack() {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])();
    const techs = [
        // Linguagens
        {
            name: "TypeScript",
            categoryKey: "languages",
            icon: "data_object",
            levelKey: "specialist",
            descriptionKey: "typescript",
            bgColor: "bg-blue-600"
        },
        {
            name: "Python",
            categoryKey: "languages",
            icon: "integration_instructions",
            levelKey: "advanced",
            descriptionKey: "python",
            bgColor: "bg-yellow-400"
        },
        {
            name: "Go",
            categoryKey: "languages",
            icon: "bolt",
            levelKey: "learning",
            descriptionKey: "go",
            bgColor: "bg-cyan-500"
        },
        {
            name: "Ruby",
            categoryKey: "languages",
            icon: "diamond",
            levelKey: "intermediate",
            descriptionKey: "ruby",
            bgColor: "bg-rose-600"
        },
        {
            name: "PHP",
            categoryKey: "languages",
            icon: "code_blocks",
            levelKey: "intermediate",
            descriptionKey: "php",
            bgColor: "bg-indigo-600"
        },
        // Frontend
        {
            name: "Next.js",
            categoryKey: "frontend",
            icon: "token",
            levelKey: "advanced",
            descriptionKey: "nextjs",
            bgColor: "bg-black"
        },
        {
            name: "React",
            categoryKey: "frontend",
            icon: "extension",
            levelKey: "advanced",
            descriptionKey: "react",
            bgColor: "bg-sky-500"
        },
        {
            name: "Tailwind CSS",
            categoryKey: "frontend",
            icon: "palette",
            levelKey: "advanced",
            descriptionKey: "tailwind",
            bgColor: "bg-sky-400"
        },
        // Backend
        {
            name: "FastAPI",
            categoryKey: "backend",
            icon: "api",
            levelKey: "specialist",
            descriptionKey: "fastapi",
            bgColor: "bg-emerald-500"
        },
        {
            name: "Node.js",
            categoryKey: "backend",
            icon: "memory",
            levelKey: "specialist",
            descriptionKey: "nodejs",
            bgColor: "bg-emerald-600"
        },
        {
            name: "Ruby on Rails",
            categoryKey: "backend",
            icon: "diamond",
            levelKey: "advanced",
            descriptionKey: "rails",
            bgColor: "bg-rose-500"
        },
        {
            name: "GraphQL",
            categoryKey: "backend",
            icon: "account_tree",
            levelKey: "advanced",
            descriptionKey: "graphql",
            bgColor: "bg-pink-600"
        },
        {
            name: "Laravel",
            categoryKey: "backend",
            icon: "layers",
            levelKey: "advanced",
            descriptionKey: "laravel",
            bgColor: "bg-red-600"
        },
        // Dados & IA
        {
            name: "Amazon Bedrock",
            categoryKey: "dataAi",
            icon: "hub",
            levelKey: "specialist",
            descriptionKey: "bedrock",
            bgColor: "bg-orange-600"
        },
        {
            name: "OpenAI",
            categoryKey: "dataAi",
            icon: "auto_awesome",
            levelKey: "specialist",
            descriptionKey: "openai",
            bgColor: "bg-slate-900"
        },
        // Bancos de Dados
        {
            name: "PostgreSQL",
            categoryKey: "databases",
            icon: "database",
            levelKey: "specialist",
            descriptionKey: "postgresql",
            bgColor: "bg-indigo-600"
        },
        {
            name: "DynamoDB",
            categoryKey: "databases",
            icon: "storage",
            levelKey: "specialist",
            descriptionKey: "dynamodb",
            bgColor: "bg-indigo-500"
        },
        {
            name: "Redis",
            categoryKey: "databases",
            icon: "bolt",
            levelKey: "advanced",
            descriptionKey: "redis",
            bgColor: "bg-rose-600"
        },
        // Infra & DevOps
        {
            name: "Docker",
            categoryKey: "infraDevops",
            icon: "view_in_ar",
            levelKey: "advanced",
            descriptionKey: "docker",
            bgColor: "bg-blue-600"
        },
        {
            name: "Kubernetes",
            categoryKey: "infraDevops",
            icon: "workspaces",
            levelKey: "advanced",
            descriptionKey: "kubernetes",
            bgColor: "bg-blue-700"
        },
        {
            name: "CloudFormation",
            categoryKey: "infraDevops",
            icon: "cloud_queue",
            levelKey: "advanced",
            descriptionKey: "cloudformation",
            bgColor: "bg-purple-600"
        },
        {
            name: "Terraform",
            categoryKey: "infraDevops",
            icon: "schema",
            levelKey: "intermediate",
            descriptionKey: "terraform",
            bgColor: "bg-purple-700"
        },
        {
            name: "GitHub Actions",
            categoryKey: "infraDevops",
            icon: "bolt",
            levelKey: "advanced",
            descriptionKey: "githubactions",
            bgColor: "bg-slate-900"
        },
        // Nuvem
        {
            name: "AWS",
            categoryKey: "cloud",
            icon: "cloud_circle",
            levelKey: "advanced",
            descriptionKey: "aws",
            bgColor: "bg-orange-500"
        },
        {
            name: "Azure",
            categoryKey: "cloud",
            icon: "cloud",
            levelKey: "intermediate",
            descriptionKey: "azure",
            bgColor: "bg-sky-600"
        },
        // Observabilidade
        {
            name: "OpenTelemetry",
            categoryKey: "observability",
            icon: "timeline",
            levelKey: "advanced",
            descriptionKey: "opentelemetry",
            bgColor: "bg-teal-700"
        },
        {
            name: "Dynatrace",
            categoryKey: "observability",
            icon: "monitor_heart",
            levelKey: "advanced",
            descriptionKey: "dynatrace",
            bgColor: "bg-teal-600"
        },
        {
            name: "Kibana",
            categoryKey: "observability",
            icon: "bar_chart",
            levelKey: "advanced",
            descriptionKey: "kibana",
            bgColor: "bg-amber-600"
        },
        {
            name: "SonarQube",
            categoryKey: "observability",
            icon: "rule",
            levelKey: "advanced",
            descriptionKey: "sonarqube",
            bgColor: "bg-emerald-700"
        },
        // Testes
        {
            name: "Jest",
            categoryKey: "testing",
            levelKey: "advanced",
            icon: "science",
            descriptionKey: "jest",
            bgColor: "bg-lime-700"
        },
        {
            name: "Pytest",
            categoryKey: "testing",
            levelKey: "advanced",
            icon: "biotech",
            descriptionKey: "pytest",
            bgColor: "bg-lime-600"
        },
        {
            name: "Locust",
            categoryKey: "testing",
            levelKey: "intermediate",
            icon: "speed",
            descriptionKey: "locust",
            bgColor: "bg-lime-800"
        }
    ];
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const unique = Array.from(new Set(techs.map((t)=>t.categoryKey)));
        return [
            "all",
            ...unique
        ];
    }, [
        techs
    ]);
    const filteredTechs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = query.trim().toLowerCase();
        return techs.filter((tech)=>selectedCategory === "all" ? true : tech.categoryKey === selectedCategory).filter((tech)=>{
            if (!q) return true;
            const categoryTranslated = t(`stack.categories.${tech.categoryKey}`);
            const levelTranslated = tech.levelKey ? t(`stack.experience.${tech.levelKey}`) : "";
            const descTranslated = tech.descriptionKey ? t(`stack.techs.${tech.descriptionKey}`) : "";
            const hay = [
                tech.name,
                categoryTranslated,
                levelTranslated,
                descTranslated,
                ...tech.tags ?? []
            ].join(" ").toLowerCase();
            return hay.includes(q);
        }).sort((a, b)=>{
            if (a.categoryKey !== b.categoryKey) return a.categoryKey.localeCompare(b.categoryKey);
            return a.name.localeCompare(b.name);
        });
    }, [
        techs,
        selectedCategory,
        query,
        t
    ]);
    const grouped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const tech of filteredTechs){
            const arr = map.get(tech.categoryKey) ?? [];
            arr.push(tech);
            map.set(tech.categoryKey, arr);
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
                        children: t("stack.title")
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-content-muted text-lg max-w-3xl font-light leading-relaxed",
                        children: t("stack.description")
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/stack/page.tsx",
                lineNumber: 149,
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
                                children: t("stack.ui.category")
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedCategory(cat),
                                    className: `px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${selectedCategory === cat ? "bg-content-dark text-white shadow-sm" : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"}`,
                                    children: cat === "all" ? t("stack.ui.all") : t(`stack.categories.${cat}`)
                                }, cat, false, {
                                    fileName: "[project]/app/[locale]/stack/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 158,
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
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: t("stack.ui.searchPlaceholder"),
                                        className: "w-full outline-none text-sm text-slate-700 placeholder:text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuery(""),
                                        className: "text-slate-500 hover:text-slate-800 transition",
                                        "aria-label": t("stack.ui.clear"),
                                        title: t("stack.ui.clear"),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "close"
                                        }, void 0, false, {
                                            fileName: "[project]/app/[locale]/stack/page.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/[locale]/stack/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-slate-500",
                        children: [
                            t("stack.ui.showing"),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-slate-800",
                                children: filteredTechs.length
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                lineNumber: 204,
                                columnNumber: 35
                            }, this),
                            " ",
                            filteredTechs.length === 1 ? t("stack.ui.item") : t("stack.ui.items"),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[locale]/stack/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-14",
                children: grouped.map(([categoryKey, items])=>{
                    const meta = categoriaMeta[categoryKey];
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
                                            fileName: "[project]/app/[locale]/stack/page.tsx",
                                            lineNumber: 218,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-slate-900 text-2xl font-extrabold tracking-tight",
                                                children: t(`stack.categories.${categoryKey}`)
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                lineNumber: 221,
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
                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                lineNumber: 216,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                                children: items.map((tech)=>{
                                    const lb = experienciaBadge(tech.levelKey);
                                    const iconBg = tech.bgColor ?? "bg-slate-800";
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
                                                            children: tech.icon
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/[locale]/stack/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-slate-900 text-xl font-extrabold leading-tight truncate",
                                                                    children: tech.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/[locale]/stack/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5 mt-2",
                                                                children: [
                                                                    tech.levelKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] leading-none font-bold px-2 py-1 rounded-full border uppercase tracking-tight ${lb.bg} ${lb.text} ${lb.border}`,
                                                                        children: t(`stack.experience.${tech.levelKey}`)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                                                        lineNumber: 256,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    tech.tags?.length ? tech.tags.slice(0, 4).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] leading-none px-2 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-100",
                                                                            children: tag
                                                                        }, tag, false, {
                                                                            fileName: "[project]/app/[locale]/stack/page.tsx",
                                                                            lineNumber: 265,
                                                                            columnNumber: 35
                                                                        }, this)) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 23
                                            }, this),
                                            tech.descriptionKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 text-sm leading-relaxed",
                                                children: t(`stack.techs.${tech.descriptionKey}`)
                                            }, void 0, false, {
                                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 234,
                                        columnNumber: 21
                                    }, this);
                                    if (tech.url) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: tech.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "block",
                                            "aria-label": `Link ${tech.name}`,
                                            children: card
                                        }, tech.name, false, {
                                            fileName: "[project]/app/[locale]/stack/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 23
                                        }, this);
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: card
                                    }, tech.name, false, {
                                        fileName: "[project]/app/[locale]/stack/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 26
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/[locale]/stack/page.tsx",
                                lineNumber: 228,
                                columnNumber: 15
                            }, this)
                        ]
                    }, categoryKey, true, {
                        fileName: "[project]/app/[locale]/stack/page.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/[locale]/stack/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[locale]/stack/page.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%5Blocale%5D_stack_page_tsx_7d8fb377._.js.map