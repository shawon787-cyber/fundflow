import Link from "next/link";
import { Suspense } from "react";
import { connection } from "next/server";
import Container from "@/components/Container";
import {
  HeartHandshake,
  ArrowUpRight,
  Mail,
  MapPin,
  Heart,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { name: "Explore Campaigns", href: "/campaigns" },
    { name: "Start a Campaign", href: "/campaigns/create" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Categories", href: "/categories" },
  ],
  Company: [
    { name: "About Fundora", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ],
  
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/shawon787-cyber/fundflow",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 3.4 1.5.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.4 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52zM7.93 18.34H4.96V9h2.97v9.34zM6.45 7.72a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44zm11.89 10.62h-2.96v-4.54c0-1.08-.02-2.47-1.51-2.47-1.51 0-1.74 1.18-1.74 2.39v4.62H9.17V9h2.84v1.28h.04c.4-.74 1.36-1.51 2.8-1.51 3 0 3.55 1.98 3.55 4.56v5.01z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.007 10.125 11.854v-8.385H7.078v-3.469h3.047V9.429c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.93-1.956 1.885v2.257h3.328l-.532 3.469h-2.796v8.385C19.612 23.08 24 18.092 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

async function CurrentYear() {
  await connection();
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/70 bg-white">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <Container className="relative pt-14 sm:pt-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand and description */}
          <div className="lg:col-span-3">
            <Link
              href="/"
              aria-label="Fundora home"
              className="group inline-flex items-center gap-2.5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-lg shadow-sky-200/50 transition-transform duration-300 group-hover:scale-105">
                <HeartHandshake size={25} strokeWidth={2.2} />
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Fund
                <span className="bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                  ora
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              Every great idea starts somewhere. Fundora brings creators and
              supporters together to turn meaningful ideas into reality.
            </p>

            
          </div>

          {/* Navigation link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-3">
              <h3 className="mb-5 text-sm font-bold text-slate-900">
                {title}
              </h3>

              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-emerald-600"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Community and social links */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold text-slate-900">
              Join our community
            </h3>

            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Follow our journey and discover new ways to make an impact.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600"
                >
                  {icon}
                </a>
              ))}
            </div>
            {/* Contact information */}
            <div className="mt-6 space-y-3">
              <a
                href="mailto:support@fundora.example"
                className="group flex w-fit items-center gap-3 text-sm text-slate-600 transition-colors hover:text-emerald-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  <Mail size={17} />
                </span>
                support@fundora.example
              </a>

              
            </div>
          </div>
        </div>

        

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-slate-200/80 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-center text-sm text-slate-500 sm:text-left">
            ©{" "}
            <Suspense fallback={null}>
              <CurrentYear />
            </Suspense>{" "}
            Fundora. All rights reserved.
          </p>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <MapPin size={17} />
                </span>
                Building a community without borders
              </div>
        </div>
      </Container>
    </footer>
  );
}
