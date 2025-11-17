import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <span className="inline-flex items-center w-fit rounded-full border border-white/30 bg-white/40 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700">
            Available for freelance • 2025
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black leading-tight tracking-tight text-slate-900">
            Building playful, modern web experiences
          </h1>
          <p className="mt-4 text-slate-700 text-lg max-w-xl">
            I craft delightful interfaces, fast backends, and interactive 3D moments. Let’s build something memorable together.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90 transition">
              See Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-900 px-5 py-2.5 text-sm font-semibold hover:bg-white transition">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
    </section>
  );
}
