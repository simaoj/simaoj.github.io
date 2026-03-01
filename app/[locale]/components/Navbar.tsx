"use client";

import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const params = useParams();
  const locale = (params?.locale as string) || "pt";
  const t = useTranslations();

  const navLinks = [
    { href: `/${locale}`, key: "home" },
    { href: `/${locale}/cv`, key: "cv" },
    { href: `/${locale}/stack`, key: "stack" },
    { href: `/${locale}/publications`, key: "publications" },
    { href: `/${locale}/blog`, key: "blog" },
  ];

  // Function to change language
  const changeLanguage = (newLocale: string) => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const segments = pathname.split("/");
      segments[1] = newLocale;
      window.location.href = segments.join("/");
    }
  };

  return (
    <header className="border-b border-gray-100 bg-white/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4 md:py-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="size-9 bg-content-dark rounded-xl flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-lg">terminal</span>
          </div>
          <h2 className="text-content-dark text-xl font-black tracking-tight">Schardosim</h2>
        </Link>

        <div className="hidden md:flex flex-1 justify-end gap-12 items-center">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors text-sm font-semibold tracking-wide text-content-muted hover:text-primary"
              >
                {t(`navbar.${link.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="bg-gray-100 hover:bg-gray-200 text-content-dark px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">language</span>
              EN / PT
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-semibold transition-colors text-content-dark hover:bg-gray-100"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    changeLanguage("pt");
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm font-semibold transition-colors text-content-dark hover:bg-gray-100"
                >
                  Português
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 p-6 bg-white">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-content-dark font-semibold hover:text-primary transition-colors"
              >
                {t(`navbar.${link.key}`)}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-4 mt-4">
              <button
                onClick={() => changeLanguage("pt")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-content-dark px-4 py-2 rounded-full text-sm font-semibold transition-all mb-2"
              >
                Português
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className="w-full bg-gray-100 hover:bg-gray-200 text-content-dark px-4 py-2 rounded-full text-sm font-semibold transition-all"
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
