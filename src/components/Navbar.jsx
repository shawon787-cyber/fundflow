"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
Menu,
X,
ArrowUpRight,
HeartHandshake,
ChevronDown,
} from "lucide-react";

const navLinks = [
{ name: "Home", href: "/" },
{ name: "Campaigns", href: "/campaigns" },
{ name: "How It Works", href: "/how-it-works" },
{ name: "About", href: "/about" },
];

export default function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const pathname = usePathname();

const isActive = (href) => {
if (href === "/") return pathname === "/";
return pathname === href || pathname.startsWith("${href}/");
};

const closeMenu = () => setMobileMenuOpen(false);

return (
<header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
<nav
aria-label="Main navigation"
className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
>
{/* Brand logo */}
<Link
href="/"
onClick={closeMenu}
className="group flex shrink-0 items-center gap-2.5"
aria-label="Fundora home"
>
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md shadow-sky-200/60 transition-transform duration-300 group-hover:scale-105">
<HeartHandshake size={23} strokeWidth={2.2} />
</span>

      <span className="text-[25px] font-extrabold tracking-tight text-slate-900">
        fund<span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">ora</span>
      </span>
    </Link>

    {/* Desktop navigation */}
    <div className="hidden items-center gap-1 lg:flex">
      {navLinks.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.name}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
              active
                ? "text-emerald-600"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            {link.name}

            {active && (
              <span className="absolute inset-x-4 -bottom-[17px] h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500" />
            )}
          </Link>
        );
      })}
    </div>

    {/* Desktop actions */}
    <div className="hidden items-center gap-3 lg:flex">
      <Link
        href="/login"
        className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
      >
        Log in
      </Link>

      <Link
        href="/campaigns/create"
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200/50"
      >
        Start a campaign
        <ArrowUpRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </div>

    {/* Mobile menu toggle */}
    <button
      type="button"
      onClick={() => setMobileMenuOpen((open) => !open)}
      aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-navigation"
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50 lg:hidden"
    >
      {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
    </button>
  </nav>

  {/* Mobile navigation */}
  <div
    id="mobile-navigation"
    className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
      mobileMenuOpen
        ? "grid-rows-[1fr] border-t border-slate-100 opacity-100"
        : "grid-rows-[0fr] opacity-0"
    }`}
    aria-hidden={!mobileMenuOpen}
    inert={!mobileMenuOpen}
  >
    <div className="overflow-hidden">
      <div className="space-y-1 px-5 py-4 sm:px-8">
        {navLinks.map((link) => {
          const active = isActive(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              aria-current={active ? "page" : undefined}
              className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                active
                  ? "bg-gradient-to-r from-sky-50 to-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              {link.name}
              {active && (
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              )}
            </Link>
          );
        })}

        <div className="grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
          <Link
            href="/login"
            onClick={closeMenu}
            className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Log in
          </Link>

          <Link
            href="/campaigns/create"
            onClick={closeMenu}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-3 py-3 text-sm font-semibold text-white shadow-md shadow-sky-100"
          >
            Start a campaign
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </div>
</header>

);
}