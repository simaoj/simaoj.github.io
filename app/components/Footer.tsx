export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="size-7 bg-content-dark rounded-lg flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-sm">terminal</span>
          </div>
          <h2 className="text-content-dark text-sm font-bold tracking-tight">Alex Rivera © 2024</h2>
        </div>
        <div className="flex gap-10">
          <a className="text-content-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">
            Privacy
          </a>
          <a className="text-content-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">
            Terms
          </a>
          <a className="text-content-muted hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="#">
            Work
          </a>
        </div>
      </div>
    </footer>
  );
}
