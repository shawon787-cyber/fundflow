// "use client";

// import Link from "next/link";
// import Container from "@/components/Container";
// import { ArrowRight, Play, Sparkles, Heart, Users, TrendingUp } from "lucide-react";

// const stats = [
// { label: "Projects funded", value: "$2.4M+" },
// { label: "Successful campaigns", value: "1,250+" },
// { label: "Community members", value: "18K+" },
// ];

// export default function Hero() {
// return (
// <section className="relative isolate overflow-hidden bg-white">
// {/* Background gradients */}
// <div className="pointer-events-none absolute inset-0 -z-10">
// <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
// <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-100/60 blur-3xl" />
// <div className="absolute bottom-0 left-1/2 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
// </div>

//   <Container className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
//     {/* Left content */}
//     <div className="max-w-2xl">
//       <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 shadow-sm">
//         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
//           <Sparkles size={14} />
//         </span>
//         <span className="text-sm font-semibold text-slate-700">
//           Small ideas. Extraordinary impact.
//         </span>
//       </div>

//       <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
//         Your idea deserves{" "}
//         <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
//           a chance
//         </span>{" "}
//         to grow.
//       </h1>

//       <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
//         Turn your vision into reality with Fundora. Discover meaningful
//         projects, support ambitious creators, and bring ideas that matter
//         to life—together.
//       </p>

//       <div className="mt-9 flex flex-col gap-4 sm:flex-row">
//         <Link
//           href="/campaigns"
//           className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-7 py-4 font-semibold text-white shadow-lg shadow-sky-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//         >
//           Explore campaigns
//           <ArrowRight
//             size={18}
//             className="transition-transform group-hover:translate-x-1"
//           />
//         </Link>

//         <Link
//           href="/campaigns/create"
//           className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-4 font-semibold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50"
//         >
//           <Play size={17} className="text-emerald-600" />
//           Start a campaign
//         </Link>
//       </div>

//       {/* Trust indicators */}
//       <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
//         <div className="flex -space-x-3">
//           {["bg-sky-200", "bg-emerald-200", "bg-violet-200", "bg-orange-200"].map(
//             (color, index) => (
//               <div
//                 key={index}
//                 className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white ${color}`}
//               >
//                 <Users size={17} className="text-slate-700" />
//               </div>
//             )
//           )}
//         </div>
//         <div>
//           <p className="font-bold text-slate-900">A community that cares</p>
//           <p className="text-sm text-slate-500">
//             Every contribution moves an idea forward.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Right campaign showcase */}
//     <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
//       <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-emerald-100/70 blur-2xl" />
//       <div className="absolute -bottom-5 -left-5 h-28 w-28 rounded-full bg-sky-100 blur-2xl" />

//       <div className="relative rounded-[2rem] border border-white bg-white/85 p-3 shadow-2xl shadow-slate-200/70 backdrop-blur-xl sm:p-4">
//         {/* Visual artwork */}
//         <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100 sm:h-72">
//           <div className="absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/70" />
//           <div className="absolute -right-2 -top-4 h-32 w-32 rounded-full border border-white/70" />
//           <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-emerald-200/50 blur-xl" />

//           <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-white/80 bg-white/40 shadow-inner backdrop-blur-sm sm:h-52 sm:w-52">
//             <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 shadow-xl shadow-emerald-200/60 sm:h-40 sm:w-40">
//               <Heart
//                 size={70}
//                 strokeWidth={1.5}
//                 className="fill-white/20 text-white sm:h-20 sm:w-20"
//               />
//             </div>
//           </div>

//           <div className="absolute left-4 top-5 flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-sm sm:left-6">
//             <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
//               <Heart size={17} />
//             </span>
//             <div>
//               <p className="text-xs font-bold text-slate-800">Make an impact</p>
//               <p className="text-[10px] text-slate-500">One step at a time</p>
//             </div>
//           </div>

//           <div className="absolute bottom-5 right-4 flex items-center gap-2 rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-sm sm:bottom-6 sm:right-6">
//             <TrendingUp size={20} className="text-emerald-600" />
//             <div>
//               <p className="text-sm font-bold text-slate-800">Ideas grow here</p>
//               <p className="text-[10px] text-slate-500">Powered by community</p>
//             </div>
//           </div>
//         </div>

//         {/* Featured campaign card */}
//         <div className="p-4 sm:p-5">
//           <div className="flex items-start justify-between gap-3">
//             <div>
//               <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
//                 Featured campaign
//               </span>
//               <h2 className="mt-3 text-xl font-bold text-slate-900">
//                 Ideas with a purpose
//               </h2>
//               <p className="mt-1 text-sm text-slate-500">
//                 Good things happen when we come together.
//               </p>
//             </div>
//             <div className="rounded-xl bg-sky-50 p-3 text-sky-600">
//               <Heart size={22} />
//             </div>
//           </div>

//           <div className="mt-5">
//             <div className="mb-2 flex items-center justify-between text-sm">
//               <span className="font-bold text-slate-900">Community powered</span>
//               <span className="font-medium text-emerald-600">Every bit counts</span>
//             </div>
//             <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
//               <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400" />
//             </div>
//             <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
//               <span>Built on shared dreams</span>
//               <span className="font-medium text-slate-700">Join the movement →</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Container>

//   {/* Bottom stats */}
//   {/* <div className="border-t border-slate-100 bg-white/70">
//     <Container className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-3">
//       {stats.map((stat, index) => (
//         <div
//           key={stat.label}
//           className={`text-center ${
//             index !== 0 ? "sm:border-l sm:border-slate-100" : ""
//           }`}
//         >
//           <p className="text-2xl font-extrabold tracking-tight text-slate-900">
//             {stat.value}
//           </p>
//           <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
//         </div>
//       ))}
//     </Container>
//   </div> */}
// </section>

// );
// }

"use client";
import Link from "next/link";
import Container from "@/components/Container";
import {
  ArrowRight,
  ShieldCheck,
  Eye,
  Globe,
  Users,
  Clock,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-sky-50/70 py-12">
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-emerald-100/60 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Together We Create Change
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-blue-950 sm:text-5xl">
            Small Contributions.
            <span className="mt-1 block bg-gradient-to-r from-blue-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Big Changes.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            Fundora is a crowdfunding platform that connects kind-hearted
            people with meaningful causes. Together, we can build a brighter,
            kinder and more sustainable world.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/campaigns"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-100 transition hover:-translate-y-0.5"
            >
              Explore Campaigns <ArrowRight size={16} />
            </Link>
            <Link
              href="/campaigns/create"
              className="rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-sky-50"
            >
              Start a Campaign
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-sky-600" />
              Secure Donations
            </span>
            <span className="flex items-center gap-2">
              <Eye size={15} className="text-sky-600" />
              Transparent
            </span>
            <span className="flex items-center gap-2">
              <Globe size={15} className="text-sky-600" />
              Global Impact
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-br from-sky-100/70 to-emerald-100/70 blur-2xl" />

          <article className="relative overflow-hidden rounded-[24px] border border-white bg-white shadow-2xl shadow-sky-100/70">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
                alt="Children learning in a classroom"
                className="h-48 w-full object-cover sm:h-56"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-sky-700 shadow">
                Featured Campaign
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <h2 className="text-lg font-bold text-blue-950">
                Education for a Brighter Future
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                Help underprivileged children get quality education and a
                chance for a better tomorrow.
              </p>

              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-600">
                  $6,482 <span className="font-normal text-slate-500">raised of $10,000</span>
                </span>
                <span className="font-semibold text-slate-500">65%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-sky-50">
                <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-emerald-500" />
                  128 Supporters
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-sky-500" />
                  12 Days Left
                </span>
              </div>

              <Link
                href="/campaigns"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 px-5 py-2.5 text-xs font-bold text-white"
              >
                View Campaign <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
