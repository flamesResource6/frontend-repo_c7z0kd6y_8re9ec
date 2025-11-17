export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">About</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I’m a full‑stack engineer who loves blending delightful visuals with robust systems. I’ve built
            data‑heavy dashboards, e‑commerce experiences, and interactive 3D moments. My focus is on clarity,
            performance, and polish.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Experience</p>
              <p className="font-semibold text-slate-900">5+ years</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Stack</p>
              <p className="font-semibold text-slate-900">React, FastAPI, MongoDB</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Focus</p>
              <p className="font-semibold text-slate-900">UI/UX + Systems</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-sm text-slate-500">Location</p>
              <p className="font-semibold text-slate-900">Remote / Worldwide</p>
            </div>
          </div>
        </div>
        <div className="lg:pl-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              When I’m not coding, I’m exploring generative visuals, tinkering with Spline, and learning new
              interaction patterns. I care about accessibility, maintainability, and creating interfaces that feel
              effortless to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
