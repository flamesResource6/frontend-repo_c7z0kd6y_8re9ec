import { useEffect, useState } from 'react';

export default function Projects() {
  const [projects] = useState([
    {
      title: 'Interactive 3D Landing',
      description: 'A Spline-powered hero with smooth scroll and micro-interactions.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Realtime Chat App',
      description: 'WebSocket chat with presence, typing indicators, and message threads.',
      tags: ['FastAPI', 'MongoDB', 'WebSocket'],
      link: '#',
    },
    {
      title: 'Design System Kit',
      description: 'A set of accessible, themeable UI primitives for rapid prototyping.',
      tags: ['TypeScript', 'Storybook', 'Radix UI'],
      link: '#',
    },
  ]);

  useEffect(() => {
    // future: fetch from backend or CMS
  }, []);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Selected Work</h2>
            <p className="text-slate-600 mt-2">A mix of client work, experiments, and passion projects.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-semibold hover:opacity-90">Start a project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition relative overflow-hidden">
              <div className="absolute -inset-20 bg-gradient-to-tr from-blue-100/60 via-fuchsia-100/40 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
