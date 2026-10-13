"use client";
import Link from "next/link";
import Container from "@/components/Container";
import { Search, Heart, Leaf, ArrowRight, CircleHelp } from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Discover a Cause",
    description: "Explore campaigns, find a cause you care about.",
    icon: Search,
    bg: "bg-sky-50",
    color: "text-sky-500",
  },
  {
    number: "2.",
    title: "Contribute",
    description: "Make a secure donation and support the mission.",
    icon: Heart,
    bg: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    number: "3.",
    title: "Make an Impact",
    description: "Help turn dreams into reality and create lasting change.",
    icon: Leaf,
    bg: "bg-emerald-50",
    color: "text-emerald-500",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-7 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-500">
              <CircleHelp size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-blue-950">How Fundora Works</h2>
              <p className="mt-1 text-xs text-slate-500">
                Getting started is simple. Just follow these 3 easy steps.
              </p>
            </div>
          </div>
          <Link href="/how-it-works" className="shrink-0 text-xs font-semibold text-sky-600">
            Learn more →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative flex items-center gap-4 px-2 py-2">
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${step.bg} ${step.color}`}>
                  <Icon size={25} fill={step.icon === Heart ? "currentColor" : "none"} />
                </span>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-blue-950">
                    {step.number} {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden shrink-0 text-sky-400 md:block" size={20} />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
