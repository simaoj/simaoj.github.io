"use client";

import { useState } from "react";
import publications from "./publications.json";

type Publication = typeof publications[0];

export default function Publications() {
  const filters = ["Todos", "Artigos", "Anais de Eventos", "Capítulos de Livros"];
  const [selectedPublication, setSelectedPublication] = useState<Publication | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  // Map filter names to categories
  const filterToCategory: Record<string, string | null> = {
    "Todos": null,
    "Artigos": "Peer-Reviewed",
    "Anais de Eventos": "Conferences",
    "Capítulos de Livros": "Book Chapter",
  };

  // Generate ABNT citation
  const generateABNTCitation = (pub: Publication) => {
    // Format authors: LASTNAME, N. N.
    const formattedAuthors = pub.authors.map(author => {
      const parts = author.split(", ");
      if (parts.length === 2) {
        const [lastname, initials] = parts;
        return `${lastname}, ${initials}`;
      }
      return author;
    }).join("; ");

    // Build citation
    let citation = `${formattedAuthors}. **${pub.title}**. `;
    
    if (pub.venue) {
      citation += `*${pub.venue}*`;
      if (pub.volumeIssue) {
        citation += `, ${pub.volumeIssue}`;
      }
      citation += ". ";
    }
    
    if (pub.city) {
      citation += `${pub.city}: `;
    }
    
    if (pub.publisher) {
      citation += `${pub.publisher}, `;
    }
    
    citation += `${pub.year}.`;
    
    if (pub.doi) {
      citation += ` DOI: ${pub.doi}.`;
    }
    
    return citation;
  };

  // Generate BibTeX citation
  const generateBibTeX = (pub: Publication) => {
    // Generate citation key from first author and year
    const firstAuthor = pub.authors[0].split(", ")[0].toLowerCase().replace(/[^a-z]/g, "");
    const citationKey = `${firstAuthor}${pub.year}`;
    
    // Determine entry type
    let entryType = "article";
    if (pub.category === "Book Chapter") {
      entryType = "inbook";
    } else if (pub.category === "Conference") {
      entryType = "inproceedings";
    }
    
    // Format authors for BibTeX
    const bibtexAuthors = pub.authors.join(" and ");
    
    let bibtex = `@${entryType}{${citationKey},\n`;
    bibtex += `  author = {${bibtexAuthors}},\n`;
    bibtex += `  title = {${pub.title}},\n`;
    
    if (pub.venue) {
      if (entryType === "inproceedings") {
        bibtex += `  booktitle = {${pub.venue}},\n`;
      } else {
        bibtex += `  journal = {${pub.venue}},\n`;
      }
    }
    
    if (pub.volumeIssue) {
      bibtex += `  volume = {${pub.volumeIssue}},\n`;
    }
    
    bibtex += `  year = {${pub.year}},\n`;
    
    if (pub.publisher) {
      bibtex += `  publisher = {${pub.publisher}},\n`;
    }
    
    if (pub.city) {
      bibtex += `  address = {${pub.city}},\n`;
    }
    
    if (pub.doi) {
      bibtex += `  doi = {${pub.doi}},\n`;
    }
    
    bibtex += `}`;
    
    return bibtex;
  };

  // Download BibTeX file
  const downloadBibTeX = (pub: Publication) => {
    const bibtex = generateBibTeX(pub);
    const blob = new Blob([bibtex], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const firstAuthor = pub.authors[0].split(", ")[0].toLowerCase().replace(/[^a-z]/g, "");
    link.download = `${firstAuthor}${pub.year}.tex`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Get filtered publications ordered by year (descending)
  const recentPublications = [...publications]
    .filter(pub => {
      // Filter by category
      const category = filterToCategory[selectedFilter];
      const categoryMatch = category === null || pub.category === category;
      
      // Filter by search term (author, title, venue)
      if (searchTerm.trim() === "") {
        return categoryMatch;
      }
      
      const searchLower = searchTerm.toLowerCase();
      const titleMatch = pub.title.toLowerCase().includes(searchLower);
      const venueMatch = pub.venue?.toLowerCase().includes(searchLower) || false;
      const authorMatch = pub.authors.some(author => 
        author.toLowerCase().includes(searchLower)
      );
      
      return categoryMatch && (titleMatch || venueMatch || authorMatch);
    })
    .sort((a, b) => Number(b.year) - Number(a.year));
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-5xl mb-4 text-content-dark">Publicações</h1>
        <p className="text-content-muted text-lg max-w-3xl font-light leading-relaxed">
          Documentos que refletem minha pesquisa e contribuições para a comunidade acadêmica.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-content-muted">search</span>
          <input
            className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm transition-all"
            placeholder="Pesquisar publicações..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-content-muted mr-3">Filter:</span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                selectedFilter === filter
                  ? "bg-content-dark text-white shadow-sm"
                  : "bg-white text-content-muted border border-gray-200 hover:border-content-dark hover:text-content-dark"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Table */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Table Header - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-[1fr_240px_100px_120px] items-center py-2 px-4 bg-gray-50 border-y border-gray-200 text-[10px] font-black uppercase tracking-widest text-content-muted">
          <div>Título e Autores</div>
          <div>Publicação</div>
          <div className="text-center">Ano</div>
          <div className="text-right"></div>
        </div>

        {/* Table Rows */}
        {recentPublications.map((pub) => (
          <div key={pub.title} className="group border-b border-gray-100 bg-white hover:bg-blue-50/30 transition-colors">
            {/* Desktop Layout */}
            <div className="hidden lg:grid grid-cols-[1fr_240px_100px_120px] items-center py-3 px-4">
              <div className="pr-6">
                <h3 className="font-serif text-base text-content-dark mb-1 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-xs text-content-muted">
                  {pub.authors.map((author, idx) => (
                    <span key={author}>
                      {author === "SIMÃO, J. P. S." ? (
                        <span className="font-bold text-gray-700">{author}</span>
                      ) : (
                        author
                      )}
                      {idx < pub.authors.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
              <div className="text-xs text-content-muted uppercase leading-tight pr-4">
                {pub.venue}
                {pub.volumeIssue && <span className="block text-[10px] text-gray-400 mt-0.5">{pub.volumeIssue}</span>}
              </div>
              <div className="text-center">
                <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded">{pub.year}</span>
              </div>
              <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {pub.doi &&
                  <button
                    className="p-1.5 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors"
                    title="Ler"
                  >
                    <span className="material-symbols-outlined text-lg">description</span>
                  </button>
                }
                <button
                  className="p-1.5 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors"
                  title="Cite"
                  onClick={() => setSelectedPublication(pub)}
                >
                  <span className="material-symbols-outlined text-lg">format_quote</span>
                </button>
                <button
                  className="p-1.5 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors"
                  title="BibTeX"
                  onClick={() => downloadBibTeX(pub)}
                >
                  <span className="material-symbols-outlined text-lg">code</span>
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-base text-content-dark group-hover:text-primary transition-colors flex-1">
                  {pub.title}
                </h3>
                <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded shrink-0">{pub.year}</span>
              </div>
              
              <p className="text-xs text-content-muted">
                {pub.authors.map((author, idx) => (
                  <span key={author}>
                    {author === "SIMÃO, J. P. S." ? (
                      <span className="font-bold text-gray-700">{author}</span>
                    ) : (
                      author
                    )}
                    {idx < pub.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>
              
              <div className="text-xs text-content-muted">
                <span className="uppercase">{pub.venue}</span>
                {pub.volumeIssue && <span className="block text-[10px] text-gray-400 mt-0.5">{pub.volumeIssue}</span>}
              </div>

              <div className="flex gap-2 pt-2">
                {pub.doi &&
                  <button
                    className="flex-1 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors flex items-center justify-center gap-1"
                    title="Ler"
                  >
                    <span className="material-symbols-outlined text-lg">description</span>
                    <span className="text-xs font-medium">Ler</span>
                  </button>
                }
                <button
                  className="flex-1 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors flex items-center justify-center gap-1"
                  title="Cite"
                  onClick={() => setSelectedPublication(pub)}
                >
                  <span className="material-symbols-outlined text-lg">format_quote</span>
                  <span className="text-xs font-medium">Citar</span>
                </button>
                <button
                  className="flex-1 p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors flex items-center justify-center gap-1"
                  title="BibTeX"
                  onClick={() => downloadBibTeX(pub)}
                >
                  <span className="material-symbols-outlined text-lg">code</span>
                  <span className="text-xs font-medium">BibTeX</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Citation Modal */}
      {selectedPublication && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPublication(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="font-serif text-2xl text-content-dark">Citação ABNT</h2>
              <button
                onClick={() => setSelectedPublication(null)}
                className="p-2 hover:bg-gray-100 rounded-lg text-content-muted hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p 
                className="text-sm text-content-dark leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: generateABNTCitation(selectedPublication)
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }}
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const citation = generateABNTCitation(selectedPublication)
                    .replace(/\*\*(.*?)\*\*/g, '$1')
                    .replace(/\*(.*?)\*/g, '$1');
                  navigator.clipboard.writeText(citation);
                }}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">content_copy</span>
                Copiar Citação
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
