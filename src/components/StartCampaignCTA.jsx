
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowRight, Sprout, Heart } from "lucide-react";

export default function StartCampaignCTA() {
  return (
    <section className="py-12">
      <Container>
      <div className="flex flex-col gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-100 via-sky-50 to-emerald-100 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
        <div className="flex items-start gap-4">
          <Sprout size={32} className="mt-1 shrink-0 text-emerald-500" />
          <div>
            <h2 className="text-xl font-extrabold text-blue-950">
              Start Your Own Campaign
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm">
              Have a dream, a project or a cause you care about? Turn your
              idea into impact and bring your community together.
            </p>
          </div>
        </div>

        <Link
          href="/campaigns/create"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-sky-200/60 transition hover:-translate-y-0.5"
        >
          Launch Your Campaign <ArrowRight size={15} />
        </Link>

        <Heart className="hidden shrink-0 text-emerald-400/70 lg:block" size={35} />
      </div>
      </Container>
    </section>
  );
}
