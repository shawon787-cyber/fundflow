
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Community Organizer",
    initials: "SJ",
    avatarColor: "bg-sky-100 text-sky-700",
    rating: 5,
    campaign: "Community Education",
    quote:
      "Fundora made it much easier to share our community education project with people who genuinely wanted to help. The experience was simple and organized.",
    amount: "$12,500",
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    initials: "MC",
    avatarColor: "bg-emerald-100 text-emerald-700",
    rating: 5,
    campaign: "Small Business Launch",
    quote:
      "The platform gave us a clear way to present our idea, explain our goals, and keep supporters informed about our fundraising progress.",
    amount: "$8,750",
  },
  {
    name: "Emily Rodriguez",
    role: "Education Advocate",
    initials: "ER",
    avatarColor: "bg-violet-100 text-violet-700",
    rating: 5,
    campaign: "Learning for Everyone",
    quote:
      "I love how easy it is to discover meaningful causes. Fundora brings campaigns and potential supporters together in a clean, approachable experience.",
    amount: "$6,200",
  },
  {
    name: "David Wilson",
    role: "Campaign Creator",
    initials: "DW",
    avatarColor: "bg-orange-100 text-orange-700",
    rating: 5,
    campaign: "Local Green Initiative",
    quote:
      "Being able to communicate our mission and track fundraising progress in one place made managing our campaign feel much more straightforward.",
    amount: "$9,400",
  },
  {
    name: "Aisha Rahman",
    role: "Community Supporter",
    initials: "AR",
    avatarColor: "bg-pink-100 text-pink-700",
    rating: 5,
    campaign: "Clean Water Project",
    quote:
      "The campaign details helped me understand what a project was trying to achieve before deciding whether to support it. The overall experience felt intuitive.",
    amount: "$4,800",
  },
];

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <Quote size={15} />
            Community Stories
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Stories That Inspire{" "}
            <span className="bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
              Change
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Discover the experiences of people bringing meaningful ideas to
            life and supporting causes that matter.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, A11y]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            slidesPerView={1}
            spaceBetween={24}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              el: ".fundora-testimonial-pagination",
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="!pb-6"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.name} className="!h-auto">
                <article className="group flex h-full min-h-[350px] flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 sm:p-7">
                  {/* Quote and rating */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 text-sky-700">
                      <Quote size={23} />
                    </div>

                    <div
                      className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <Star
                            key={index}
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="mt-7 flex-1 text-[15px] leading-7 text-slate-600">
                    “{testimonial.quote}”
                  </p>

                  {/* Campaign information */}
                  <div className="mt-6 rounded-2xl border border-slate-100 bg-gradient-to-r from-sky-50/80 to-emerald-50/70 p-4">
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Campaign
                    </p>
                    <p className="mt-1 font-semibold text-slate-800">
                      {testimonial.campaign}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      Fundraising goal progress:{" "}
                      <span className="font-bold text-emerald-700">
                        {testimonial.amount}
                      </span>
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${testimonial.avatarColor}`}
                    >
                      {testimonial.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-bold text-slate-900">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
        
{/* Slider controls and pagination */}
<div className="mt-8 flex w-full flex-row flex-wrap items-center justify-around gap-4 sm:gap-6">
  {/* Navigation buttons */}
  <div className="flex shrink-0 items-center gap-3">
    <button
      type="button"
      onClick={() => swiperInstance?.slidePrev()}
      aria-label="Previous testimonials"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
    >
      <ArrowLeft size={18} />
    </button>

    <button
      type="button"
      onClick={() => swiperInstance?.slideNext()}
      aria-label="Next testimonials"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
    >
      <ArrowRight size={18} />
    </button>
  </div>

  {/* Pagination dots */}
  <div
    className="fundora-testimonial-pagination flex min-h-5 shrink-0 items-center justify-center gap-2"
    aria-label={`Testimonial slide ${activeIndex + 1}`}
  />

  {/* Slide counter */}
  <span className="shrink-0 whitespace-nowrap text-sm font-medium tabular-nums text-slate-500">
    {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
  </span>
</div>

        
      </div>

      {/* Custom pagination styling */}
      <style jsx global>{`
        .fundora-testimonial-pagination .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          margin: 0 !important;
          opacity: 1;
          background: #cbd5e1;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .fundora-testimonial-pagination .swiper-pagination-bullet-active {
          width: 26px;
          border-radius: 999px;
          background: linear-gradient(to right, #0284c7, #10b981);
        }
      `}</style>
    </section>
  );
}
