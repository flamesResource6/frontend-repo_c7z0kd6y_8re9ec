import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) setStatus('Thanks! I will get back to you soon.');
      else setStatus(data?.detail || 'Something went wrong.');
    } catch (err) {
      setStatus('Network error.');
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Let’s talk</h2>
        <p className="mt-2 text-slate-600">Tell me about your project and timelines.</p>
        <form onSubmit={submit} className="mt-8 grid gap-4">
          <input name="name" placeholder="Your name" required className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
          <input name="email" type="email" placeholder="Email" required className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
          <textarea name="message" rows="5" placeholder="Project details" required className="rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
          <div className="flex items-center gap-4">
            <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:opacity-90" type="submit">Send</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
