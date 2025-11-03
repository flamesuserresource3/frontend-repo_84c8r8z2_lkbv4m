import React from 'react';
import { CreditCard, BarChart3, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Issuing & Cards',
    description:
      'Create virtual and physical cards with granular controls, spend limits, and real-time insights.',
    icon: CreditCard,
  },
  {
    title: 'Analytics & Reporting',
    description:
      'Understand revenue, costs, and customer behavior with clear dashboards and exportable reports.',
    icon: BarChart3,
  },
  {
    title: 'Lightning‑fast APIs',
    description:
      'Developer‑first REST APIs, webhooks, and SDKs so you can go from idea to launch in days.',
    icon: Zap,
  },
  {
    title: 'Compliance & Security',
    description:
      'Built‑in KYC, AML, and fraud controls. End‑to‑end encryption and tokenization by default.',
    icon: ShieldCheck,
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to ship fast</h2>
          <p className="mt-3 text-slate-600">
            A clean toolkit for modern fintech and commerce teams. Simple to start, powerful when you need it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
