"use client";
import Link from "next/link";
import Container from "@/components/Container";
import { HeartHandshake, HandCoins, Sprout, Users, CheckCircle } from "lucide-react";

const stats = [
  { value: "$245,680+", label: "Total Raised", icon: HandCoins, color: "text-sky-500", bg: "bg-sky-50" },
  { value: "1,248+", label: "Successful Campaigns", icon: Sprout, color: "text-emerald-500", bg: "bg-emerald-50" },
  { value: "18,742+", label: "Total Supporters", icon: Users, color: "text-amber-500", bg: "bg-amber-50" },
  { value: "320+", label: "Projects Completed", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-50" },
];

export default function ImpactSection() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-50 via-white to-emerald-50 py-12">
      <Container className="grid gap-7 lg:grid-cols-[0.95fr_1.6fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100/70 px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
            <HeartHandshake size={14} /> Our Impact
          </span>
          <h2 className="mt-3 max-w-sm text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">
            Together, We’ve Made a Real Difference
          </h2>
          <p className="mt-3 max-w-md text-xs leading-6 text-slate-600 sm:text-sm">
            Thanks to our amazing community, we’ve helped thousands of people
            and supported causes around the world.
          </p>
          <Link href="/about" className="mt-4 inline-block text-xs font-semibold text-sky-600">
            View our impact →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex min-h-[125px] flex-col items-center justify-center rounded-xl border border-white bg-white/90 p-3 text-center shadow-sm">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${stat.bg} ${stat.color}`}>
                  <Icon size={18} />
                </span>
                <strong className="mt-3 text-lg font-extrabold text-blue-950 sm:text-xl">
                  {stat.value}
                </strong>
                <span className="mt-1 text-[10px] leading-4 text-slate-500">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
