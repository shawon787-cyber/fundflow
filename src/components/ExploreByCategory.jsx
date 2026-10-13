"use client";
import Link from "next/link";
import Container from "@/components/Container";
import {
  GraduationCap,
  HeartPulse,
  Leaf,
  Users,
  BriefcaseMedical,
  Monitor,
  ArrowRight,
  Shapes,
} from "lucide-react";

const categories = [
  {
    name: "Education",
    count: 42,
    icon: GraduationCap,
    bg: "bg-blue-50",
    color: "text-blue-500",
    slug: "education",
  },
  {
    name: "Medical",
    count: 38,
    icon: HeartPulse,
    bg: "bg-purple-50",
    color: "text-purple-500",
    slug: "medical",
  },
  {
    name: "Environment",
    count: 26,
    icon: Leaf,
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    slug: "environment",
  },
  {
    name: "Community",
    count: 31,
    icon: Users,
    bg: "bg-sky-50",
    color: "text-sky-500",
    slug: "community",
  },
  {
    name: "Emergency",
    count: 18,
    icon: BriefcaseMedical,
    bg: "bg-rose-50",
    color: "text-rose-500",
    slug: "emergency",
  },
  {
    name: "Technology",
    count: 12,
    icon: Monitor,
    bg: "bg-blue-50",
    color: "text-blue-500",
    slug: "technology",
  },
];

export default function ExploreByCategory() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
              <Shapes size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-blue-950">
                Explore by Category
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Find causes that matter to you. Browse campaigns by category
                and make a difference.
              </p>
            </div>
          </div>

          <Link
            href="/categories"
            className="shrink-0 text-xs font-semibold text-sky-600"
          >
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.slug}
                href={`/campaigns?category=${category.slug}`}
                className="group flex min-h-[140px] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-2 py-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-100 hover:shadow-lg hover:shadow-sky-100/50"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${category.bg} transition-transform group-hover:scale-105`}
                >
                  <Icon size={27} className={category.color} strokeWidth={1.8} />
                </span>

                <h3 className="mt-3 text-xs font-bold text-blue-950 sm:text-sm">
                  {category.name}
                </h3>
                <p className="mt-1.5 text-[10px] text-slate-500">
                  {category.count} campaigns
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
