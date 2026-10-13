"use client";
import Link from "next/link";
import Container from "@/components/Container";
import { Flame, ArrowUpRight, Clock, Users } from "lucide-react";

const trending = [
  {
    title: "Build a School in Rural Area",
    category: "Education",
    image: "photo-1497486751825-1233686d5d80",
    raised: 15220,
    goal: 25000,
    supporters: 342,
    days: 20,
  },
  {
    title: "Help a Child Fight Cancer",
    category: "Medical",
    image: "photo-1519494026892-80bbd2d6fd0d",
    raised: 28640,
    goal: 40000,
    supporters: 601,
    days: 32,
  },
  {
    title: "Clean Ocean, Healthy Future",
    category: "Environment",
    image: "photo-1437622368342-7a3d73a34c8f",
    raised: 9120,
    goal: 15000,
    supporters: 210,
    days: 10,
  },
  {
    title: "Support Girls in Tech",
    category: "Technology",
    image: "photo-1524504388940-b1c1722653e1",
    raised: 6780,
    goal: 12000,
    supporters: 145,
    days: 14,
  },
];

export default function TrendingCampaigns() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Flame size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-blue-950">Trending Campaigns</h2>
              <p className="mt-1 text-xs text-slate-500">
                Most popular and recently trending campaigns from our community.
              </p>
            </div>
          </div>
          <Link href="/campaigns?sort=trending" className="shrink-0 text-xs font-semibold text-sky-600">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trending.map((campaign) => {
            const progress = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
            return (
              <article key={campaign.title} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">
                <Link href="/campaigns">
                  <img
                    src={`https://images.unsplash.com/${campaign.image}?auto=format&fit=crop&w=700&q=80`}
                    alt={campaign.title}
                    className="h-32 w-full object-cover"
                  />
                </Link>
                <div className="p-3.5">
                  <span className="rounded-full bg-sky-50 px-2 py-1 text-[10px] font-semibold text-sky-700">
                    {campaign.category}
                  </span>
                  <h3 className="mt-2 min-h-10 text-sm font-bold leading-5 text-blue-950">
                    {campaign.title}
                  </h3>
                  <div className="mt-3 flex justify-between gap-2 text-[10px]">
                    <span className="font-bold text-emerald-600">
                      ${campaign.raised.toLocaleString()}
                      <span className="font-normal text-slate-400">
                        {" "}raised of ${campaign.goal.toLocaleString()}
                      </span>
                    </span>
                    <span className="text-slate-500">{progress}%</span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                    <div className="h-1.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1"><Users size={12} /> {campaign.supporters} Supporters</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {campaign.days} Days left</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
