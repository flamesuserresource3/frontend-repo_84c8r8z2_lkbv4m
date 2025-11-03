import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">FluxPay</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Security</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
          </nav>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500 sm:text-right">
          © {new Date().getFullYear()} FluxPay, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
