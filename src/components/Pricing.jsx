import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'Best for trying things out',
    features: [
      'Up to 1,000 transactions/mo',
      'Basic analytics',
      'Sandbox & test cards',
      'Email support',
    ],
    cta: 'Get started'
  },
  {
    name: 'Growth',
    price: '$99',
    cadence: 'per month',
    highlight: 'For growing startups',
    features: [
      'Up to 50,000 transactions/mo',
      'Advanced analytics',
      'Priority support',
      'Custom webhooks',
    ],
    cta: 'Start free trial',
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: 'pricing',
    highlight: 'Tailored to your volume',
    features: [
      'Unlimited transactions',
      'Dedicated CSM',
      'Enterprise SLAs',
      'Custom contracts',
    ],
    cta: 'Contact sales'
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready. No hidden fees.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                'relative rounded-2xl border p-6 shadow-sm transition',
                tier.featured
                  ? 'border-slate-900 bg-white shadow-xl shadow-slate-900/5'
                  : 'border-slate-200 bg-white hover:-translate-y-1 hover:shadow-md',
              ].join(' ')}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full border border-slate-900 bg-white px-3 py-1 text-xs font-medium">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold tracking-tight text-slate-900">{tier.price}</span>
                <span className="text-sm text-slate-600">{tier.cadence}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{tier.highlight}</p>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={[
                  'mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition',
                  tier.featured
                    ? 'bg-slate-900 text-white hover:bg-slate-800'
                    : 'border border-slate-300 bg-white text-slate-900 hover:border-slate-400',
                ].join(' ')}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Interchange and network fees may apply based on usage. Contact sales for detailed pricing.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
