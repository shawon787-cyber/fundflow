
import Link from "next/link";
import Container from "@/components/Container";
import { ChevronDown, CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "How do I make a donation?",
    answer: "Choose a campaign, select your donation amount and follow the available secure checkout instructions.",
  },
  {
    question: "Is my donation secure?",
    answer: "Donations should be processed through the secure payment provider configured for this platform.",
  },
  {
    question: "How do I create a campaign?",
    answer: "Create an account, open the campaign creation page, provide your cause details and submit the campaign.",
  },
  {
    question: "How can I track my contribution?",
    answer: "Sign in to your account and check the donation history or campaign details available to your account.",
  },
  {
    question: "What is the fundraising goal?",
    answer: "It is the total amount a campaign organizer hopes to raise for the stated cause or project.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refund eligibility depends on the payment provider and the platform's published donation and refund policies.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-white py-12">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-500">
              <CircleHelp size={20} />
            </span>
            <div>
              <h2 className="text-xl font-bold text-blue-950">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Find answers to common questions about donations and campaigns.
              </p>
            </div>
          </div>
          <Link href="/faq" className="shrink-0 text-xs font-semibold text-sky-600">
            View all FAQ →
          </Link>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-slate-100 bg-white px-4 py-3 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-semibold text-blue-950">
                {faq.question}
                <ChevronDown
                  size={15}
                  className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pt-3 text-xs leading-5 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
