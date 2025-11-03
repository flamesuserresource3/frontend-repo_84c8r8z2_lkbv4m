import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-32 lg:pt-40">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          <Shield className="h-3.5 w-3.5 text-emerald-600" />
          Bank‑grade security
        </span>
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          The modern way to build your
          <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
            fintech & e‑commerce payments
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          Launch cards, accept payments, and manage balances with a simple API and beautiful dashboards. Fast, secure, and built for growth.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            Explore features
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-12 grid w-full max-w-4xl grid-cols-2 items-center gap-6 rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur sm:grid-cols-4">
          <div className="flex items-center gap-2 text-sm text-slate-700"><CreditCard className="h-4 w-4 text-indigo-600" /> Visa Ready</div>
          <div className="text-sm text-slate-700">PSD2 compliant</div>
          <div className="text-sm text-slate-700">PCI DSS Level 1</div>
          <div className="text-sm text-slate-700">99.99% uptime</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
