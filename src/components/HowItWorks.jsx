
"use client";

import Link from "next/link";
import {
  Search,
  FileText,
  HeartHandshake,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover a Campaign",
    description:
      "Explore inspiring campaigns, discover meaningful causes, and find projects that match your interests.",
    icon: Search,
    color: "bg-sky-100 text-sky-600",
    glow: "from-sky-100/80 to-white",
  },
  {
    number: "02",
    title: "Create Your Campaign",
    description:
      "Share your story, set a fundraising goal, add campaign details, and invite people to support your vision.",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-600",
    glow: "from-emerald-100/80 to-white",
  },
  {
    number: "03",
    title: "Support a Cause",
    description:
      "Choose a campaign you believe in and contribute to helping people turn meaningful ideas into reality.",
    icon: HeartHandshake,
    color: "bg-violet-100 text-violet-600",
    glow: "from-violet-100/80 to-white",
  },
  {
    number: "04",
    title: "Track the Impact",
    description:
      "Follow campaign progress, monitor fundraising milestones, and see how community support makes a difference.",
    icon: TrendingUp,
    color: "bg-cyan-100 text-cyan-600",
    glow: "from-cyan-100/80 to-white",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Simple. Transparent. Meaningful.
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
              Fundora
            </span>{" "}
            Works
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From discovering a cause to making a real difference, Fundora
            makes the crowdfunding journey simple for everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 sm:p-7"
              >
                {/* Icon area */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.glow} transition-transform duration-300 group-hover:scale-105`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.color}`}
                  >
                    <Icon size={25} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Step number */}
                <div className="absolute right-6 top-7 text-3xl font-bold tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-sky-100">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors group-hover:text-sky-600">
                  <CheckCircle2 size={16} />
                  <span>Easy to get started</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-7 sm:p-10 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Ready to make an impact?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Start a campaign or explore projects that deserve your support.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/campaigns"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
            >
              Explore Campaigns
            </Link>

            <Link
              href="/campaigns/create"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 px-5 py-3 font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:scale-[1.02] hover:shadow-xl"
            >
              Start a Campaign
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
