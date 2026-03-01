import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="size-7 bg-content-dark rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <h2 className="text-content-dark text-sm font-bold tracking-tight">
            Schardosim © {currentYear}
          </h2>
        </div>
      </div>
    </footer>
  );
}
