import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-8 py-8">
        <h1 className="text-lg font-semibold tracking-wide text-ink">Amazon<span className="text-indigo">@</span>products.com</h1>
        <p className="text-sm text-ink-muted">© 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
