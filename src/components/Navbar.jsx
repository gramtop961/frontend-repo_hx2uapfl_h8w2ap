import { useState } from 'react';
import { Menu, X, User, Mail, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#projects', label: 'Proyek' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 text-white">
              <User size={18} />
            </span>
            <span>Portofolio Saya</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a
                href="mailto:email@contoh.com"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/username"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="mailto:email@contoh.com" className="text-gray-700"><Mail size={18} /></a>
                <a href="https://github.com/username" target="_blank" rel="noreferrer" className="text-gray-700"><Github size={18} /></a>
                <a href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer" className="text-gray-700"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
