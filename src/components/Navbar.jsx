"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

import {
Menu,
X,
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
className="h-[76px]"
>
<Container className="flex h-full items-center justify-between">
{/* Brand logo */}
<Link
href="/"
onClick={closeMenu}
className="group flex shrink-0 items-center gap-2.5"
aria-label="FundFlow home"
>
<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md shadow-sky-200/60 transition-transform duration-300 group-hover:scale-105">
<HeartHandshake size={23} strokeWidth={2.2} />
</span>

      <span className="text-[25px] font-extrabold tracking-tight text-slate-900">
        Fund<span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">Flow</span>
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
        href="https://github.com/shawon787-cyber/fundflow"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-200/50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width={17}
          height={17}
          fill="currentColor"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
        </svg>
        Join as Developer
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
  </Container>
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
      <Container className="space-y-1 py-4">
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
            href="https://github.com/shawon787-cyber/fundflow"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-3 py-3 text-sm font-semibold text-white shadow-md shadow-sky-100"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width={16}
              height={16}
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            Join as Developer
          </Link>
        </div>
      </Container>
    </div>
  </div>
</header>

);
}