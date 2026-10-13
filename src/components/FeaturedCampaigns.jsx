"use client";   
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowRight, Clock, Users, Gift } from "lucide-react";

const campaigns = [
  {
    title: "Education for a Brighter Future",
    category: "Education",
    image: "photo-1503676260728-1c00da094a0b",
    raised: 6482,
    goal: 10000,
    supporters: 128,
    days: 12,
    color: "sky",
  },
  {
    title: "Save Lives, Support Treatment",
    category: "Medical",
    image: "photo-1576091160399-112ba8d25d1d",
    raised: 12350,
    goal: 20000,
    supporters: 245,
    days: 10,
    color: "blue",
  },
  {
    title: "Green Tomorrow, Healthier Planet",
    category: "Environment",
    image: "photo-1416879595882-3373a0480b5b",
    raised: 4230,
    goal: 8000,
    supporters: 96,
    days: 10,
    color: "green",
  },
  {
    title: "Food for Families in Need",
    category: "Community",
    image: "photo-1469571486292-0ba58a3f068b",
    raised: 8760,
    goal: 15000,
    supporters: 176,
    days: 20,
    color: "sky",
  },
];

const money = (value) =>
  "$" + value.toLocaleString("en-US");

function CampaignCard({ campaign }) {
  const progress = Math.min(
    100,
    Math.round((campaign.raised / campaign.goal) * 100)
  );

  return (
    <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">
      <Link href="/campaigns" className="block">
        <img
          src={`https://images.unsplash.com/${campaign.image}?auto=format&fit=crop&w=700&q=80`}
          alt={campaign.title}
          className="h-32 w-full object-cover"
        />
      </Link>

      <div className="p-3.5">
        <span className="inline-flex rounded-full bg-sky-50 px-2 py-1 text-[10px] font-semibold text-sky-700">
          {campaign.category}
        </span>

        <Link href="/campaigns">
          <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-bold leading-5 text-blue-950 hover:text-sky-600">
            {campaign.title}
          </h3>
        </Link>

        <div className="mt-3 flex items-center justify-between gap-2 text-[10px]">
          <p className="font-bold text-emerald-600">
            {money(campaign.raised)}
            <span className="font-normal text-slate-400">
              {" "}raised of {money(campaign.goal)}
            </span>
          </p>
          <span className="font-semibold text-slate-500">
            {progress}%
          </span>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <Users size={12} /> {campaign.supporters} Supporters
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {campaign.days} Days left
          </span>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedCampaigns() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Gift size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-blue-950">
                Featured Campaigns
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Discover inspiring projects and be a part of real change.
              </p>
            </div>
          </div>

          <Link
            href="/campaigns"
            className="shrink-0 text-xs font-semibold text-sky-600 hover:text-emerald-600"
          >
            View all campaigns →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campaigns.slice(0, 4).map((campaign) => (
            <CampaignCard key={campaign.title} campaign={campaign} />
          ))}
        </div>
      </Container>
    </section>
  );
}
