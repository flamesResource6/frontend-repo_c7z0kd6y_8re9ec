import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-black tracking-tight text-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Your Name
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition"
          >
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                onClick={() => setOpen(false)}
                href={l.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
