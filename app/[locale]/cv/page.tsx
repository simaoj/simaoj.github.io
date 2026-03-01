"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CV() {
  const t = useTranslations();
  const [selectedFilter, setSelectedFilter] = useState(t("cv.filters.education"));

  const filters = [
    t("cv.filters.education"),
    t("cv.filters.technical"),
    t("cv.filters.academic")
  ];

  const showEducation = selectedFilter === t("cv.filters.education");
  const showWorkExperience = selectedFilter === t("cv.filters.technical");
  const showAcademicExperience = selectedFilter === t("cv.filters.academic");

  const skills = t.raw("cv.skills") as string[];
  const education = t.raw("cv.education") as Array<{degree: string, school: string, date: string}>;
  const workExperience = t.raw("cv.workExperience") as Array<{title: string, company: string, date: string, description: string}>;
  const academicExperience = t.raw("cv.academicExperience") as Array<{title: string, company: string, date: string, description: string}>;
  const languages = t.raw("cv.languages") as Array<{name: string, level: string}>;

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-5xl mb-4 text-content-dark">{t("cv.title")}</h1>
        <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
          {t("cv.description")}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 items-center mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all ${
              selectedFilter === filter
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
                <h2 className="text-2xl font-bold text-slate-900">{t("cv.sections.technical")}</h2>
              </div>
              <div className="relative space-y-0 border-l border-slate-200 ml-2.5 pl-10">
                {workExperience.map((job, idx) => (
                  <div key={idx} className="relative pb-12">
                    <div
                      className={`absolute -left-[46px] top-1.5 h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(226,232,240,1)] ${
                        idx === 0 ? "bg-slate-900" : "bg-slate-300"
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
                <h2 className="text-2xl font-bold text-slate-900">{t("cv.sections.education")}</h2>
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
                <h2 className="text-2xl font-bold text-slate-900">{t("cv.sections.academic")}</h2>
              </div>
              <div className="relative space-y-0 border-l border-slate-200 ml-2.5 pl-10">
                {academicExperience.map((exp, idx) => (
                  <div key={idx} className="relative pb-12">
                    <div
                      className={`absolute -left-[46px] top-1.5 h-3 w-3 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(226,232,240,1)] ${
                        idx === 0 ? "bg-slate-900" : "bg-slate-300"
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
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">{t("cv.sections.skills")}</h3>
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
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">{t("cv.sections.languages")}</h3>
            <ul className="space-y-4">
              {languages.map((item) => (
                <li key={item.name} className="flex items-center justify-between border-b border-slate-50 pb-3">
                  <span className="font-bold text-slate-900">{item.name}</span>
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
