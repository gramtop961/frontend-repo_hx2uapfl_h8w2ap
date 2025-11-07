import { Code2, Globe, Smartphone } from 'lucide-react';

const items = [
  {
    icon: <Globe className="h-5 w-5 text-indigo-600" />,
    title: 'Website Perusahaan',
    desc: 'Landing page modern dengan performa cepat dan SEO siap pakai.',
    tags: ['React', 'Tailwind', 'SEO'],
  },
  {
    icon: <Smartphone className="h-5 w-5 text-indigo-600" />,
    title: 'Aplikasi Mobile Web',
    desc: 'Progressive Web App (PWA) dengan akses offline dan push notif.',
    tags: ['PWA', 'TypeScript', 'Workbox'],
  },
  {
    icon: <Code2 className="h-5 w-5 text-indigo-600" />,
    title: 'Dashboard Analitik',
    desc: 'Visualisasi data interaktif dan integrasi API yang aman.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Proyek Pilihan</h2>
          <p className="mt-3 text-gray-700">Beberapa karya yang pernah saya bangun dan banggakan.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md bg-indigo-50 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </div>
              <p className="mt-3 text-gray-700">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
