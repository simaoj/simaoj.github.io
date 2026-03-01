"use client";

import { useState } from "react";

export default function CV() {
  const filters = ["Educação", "Experiência Técnica", "Experiência Acadêmica"];
  const [selectedFilter, setSelectedFilter] = useState("Educação");

  const showEducation = selectedFilter === "Educação";
  const showWorkExperience = selectedFilter === "Experiência Técnica";
  const showAcademicExperience = selectedFilter === "Experiência Acadêmica";

  const skills = [
    "DevOps",
    "Cloud Computing",
    "Microservices",
    "System Design",
    "Scalability",
    "Agile Methodologies",
    "CI/CD Pipelines",
  ];
  const education = [
    {
      "degree": "Doutorado em Informática na Educação",
      "school": "Universidade Federal do Rio Grande do Sul",
      "date": "2023 — presente"
    },
    {
      "degree": "Especialização em Tecnologias para Educação Profissional",
      "school": "Instituto Federal de Santa Catarina",
      "date": "2018 — 2019"
    },
    {
      "degree": "Mestrado em Tecnologias da Informação e Comunicação",
      "school": "Universidade Federal de Santa Catarina",
      "date": "2016 — 2018"
    },
    {
      "degree": "Bacharelado em Tecnologias da Informação e Comunicação",
      "school": "Universidade Federal de Santa Catarina",
      "date": "2011 — 2015"
    }
  ];

  const workExperience = [
    {
      "title": "Engenheiro de Software Sênior",
      "company": "SAP",
      "date": "Out 2024 — presente",
      "description": ""
    },
    {
      "title": "Líder Técnico",
      "company": "HardFun Studios",
      "date": "Set 2023 — Out 2024",
      "description": ""
    },
    {
      "title": "Mentor Educacional",
      "company": "SENAI - Departamento Regional de Santa Catarina",
      "date": "Nov 2022 — Abr 2023",
      "description": ""
    },
    {
      "title": "Engenheiro de Software",
      "company": "Hewlett-Packard Computadores",
      "date": "Ago 2021 — Set 2023",
      "description": ""
    },
    {
      "title": "Analista de Tecnologia da Informação",
      "company": "SENAI - Departamento Regional do Rio Grande do Sul",
      "date": "Set 2019 — Out 2021",
      "description": ""
    },
    {
      "title": "Estagiário",
      "company": "Rede Nacional de Ensino e Pesquisa",
      "date": "Jan 2015 — Dez 2015",
      "description": ""
    }
  ];

  const academicExperience = [
    {
      "title": "Professor Assistente",
      "company": "Pontifícia Universidade Católica do Rio Grande do Sul",
      "date": "Fev 2026 — presente",
      "description": ""
    },
    {
      "title": "Professor Tutor",
      "company": "Universidade Federal de Mato Grosso do Sul",
      "date": "Mar 2025 — presente",
      "description": ""
    },
    {
      "title": "Tutor",
      "company": "Universidade Federal do Rio Grande",
      "date": "Set 2020 — Mar 2022",
      "description": ""
    },
    {
      "title": "Professor Substituto",
      "company": "Instituto Federal de Santa Catarina",
      "date": "Fev 2018 — Set 2019",
      "description": ""
    },
    {
      "title": "Bolsista de Mestrado",
      "company": "Universidade Federal de Santa Catarina",
      "date": "Mar 2016 — Fev 2017",
      "description": ""
    },
    {
      "title": "Estagiário de Pesquisa",
      "company": "Télé-Université, Université du Québec",
      "date": "Out 2016 — Fev 2017",
      "description": ""
    },
    {
      "title": "Auxiliar de Pesquisa e Educação",
      "company": "Télé-Université, Université du Québec",
      "date": "Nov 2016 — Fev 2017",
      "description": ""
    },
    {
      "title": "Bolsista de Iniciação Científica",
      "company": "Universidade Federal de Santa Catarina",
      "date": "Jun 2012 — Dez 2015",
      "description": ""
    }
  ];

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-5xl mb-4 text-content-dark">Experiência</h1>
        <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
          Mais de 15 anos de experiência combinada em engenharia de software, educação e pesquisa.
        </p>
      </div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${selectedFilter === filter
                ? "bg-content-dark text-white shadow-sm"
                : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">

          {/* Work Experience */}
          {showWorkExperience && (
            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-slate-400">work</span>
                <h2 className="text-2xl font-bold text-slate-900">Experiência Técnica</h2>
              </div>
              <div className="relative space-y-0 border-l border-slate-200 ml-2.5 pl-10">
                {workExperience.map((job, idx) => (
                  <div key={idx} className="relative pb-12">
                    <div
                      className={`absolute -left-[46px] top-1.5 h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(226,232,240,1)] ${idx === 0 ? "bg-slate-900" : "bg-slate-300"
                        }`}
                    ></div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{job.date}</span>
                    </div>
                    <p className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-wide">{job.company}</p>
                    {job.description && <p className="text-slate-600 leading-relaxed text-[15px]">{job.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {showEducation && (
            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-slate-400">school</span>
                <h2 className="text-2xl font-bold text-slate-900">Educação</h2>
              </div>
              <div className="grid gap-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="group relative rounded-xl border border-slate-100 p-8 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 mb-1">{edu.degree}</h3>
                        <p className="text-slate-500 font-medium">{edu.school}</p>
                      </div>
                      <span className="text-sm font-bold text-slate-400">{edu.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Academic Experience */}
          {showAcademicExperience && (
            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-slate-400">account_balance</span>
                <h2 className="text-2xl font-bold text-slate-900">Experiência Acadêmica</h2>
              </div>
              <div className="relative space-y-0 border-l border-slate-200 ml-2.5 pl-10">
                {academicExperience.map((exp, idx) => (
                  <div key={idx} className="relative pb-12">
                    <div
                      className={`absolute -left-[46px] top-1.5 h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(226,232,240,1)] ${idx === 0 ? "bg-slate-900" : "bg-slate-300"
                        }`}
                    ></div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{exp.date}</span>
                    </div>
                    <p className="text-slate-900 font-bold text-sm mb-4 uppercase tracking-wide">{exp.company}</p>
                    {exp.description && <p className="text-slate-600 leading-relaxed text-[15px]">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Habilidades</h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span key={skill} className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Idiomas</h3>
            <ul className="space-y-4">
              {[
                { lang: "Inglês", level: "Fluente/Avançado" },
                { lang: "Espanhol", level: "Intermediário" },
              ].map((item) => (
                <li key={item.lang} className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <span className="font-bold text-slate-900">{item.lang}</span>
                  <span className="text-xs font-bold text-slate-400 uppercase">{item.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}