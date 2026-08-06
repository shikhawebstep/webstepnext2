import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiPenTool,
  FiSearch,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";
import { assetImage } from "@/lib/assets";
const MarketingTeam = dynamic(() => import('../MarketingTeam'));

const teamImage = assetImage("dummyuser.jpg");

const departments = [
  {
    title: "Product Strategy",
    text: "Discovery, technical planning, roadmap clarity, and delivery priorities before a build starts.",
    icon: FiLayers,
    color: "#6366f1",
    accent: "#e0e7ff",
  },
  {
    title: "Web Engineering",
    text: "React, Next.js, PHP, Laravel, WordPress, Shopify, and custom web application development.",
    icon: FiCode,
    color: "#8b5cf6",
    accent: "#ede9fe",
  },
  {
    title: "Mobile Apps",
    text: "Mobile-first product builds, app interfaces, API integration, and release-ready implementation.",
    icon: FiSmartphone,
    color: "#ec4899",
    accent: "#fce7f3",
  },
  {
    title: "UI/UX Design",
    text: "Clear interfaces, conversion-focused pages, design systems, and polished user journeys.",
    icon: FiPenTool,
    color: "#f59e0b",
    accent: "#fef3c7",
  },
  {
    title: "Digital Growth",
    text: "SEO, content direction, campaign pages, analytics, and growth-focused marketing support.",
    icon: FiTrendingUp,
    color: "#10b981",
    accent: "#d1fae5",
  },
  {
    title: "Quality Assurance",
    text: "Functional checks, responsive testing, launch reviews, and practical regression coverage.",
    icon: FiShield,
    color: "#38bdf8",
    accent: "#e0f2fe",
  },
];

const leaders = [
  {
    name: "Project Strategy Team",
    role: "Planning and delivery ownership",
    focus: "Scopes the work, coordinates milestones, and keeps communication clear.",
  },
  {
    name: "Design Team",
    role: "UI, UX, and brand experience",
    focus: "Turns business goals into clean, usable screens and conversion paths.",
  },
  {
    name: "Development Team",
    role: "Frontend, backend, and CMS builds",
    focus: "Builds reliable websites, apps, integrations, and custom software.",
  },
  {
    name: "Growth Team",
    role: "SEO and campaign execution",
    focus: "Supports launches with visibility, content, and measurable growth work.",
  },
];

const stats = [
  ["12+", "Years of delivery experience"],
  ["150+", "Projects supported"],
  ["24h", "Typical response rhythm"],
  ["6", "Core delivery functions"],
];

export default function OurTeamPage() {
  return (
    <main className="bg-white min-h-screen  font-roboto">
      
      {/* ── HERO SECTION ── */}
      <section className="relative px-4 sm:px-8 lg:px-12 pt-[120px]  md:pt-[150px] lg:pt-[190px] xl-pt-[220px] pb-16 sm:pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #f0fdf9 0%, #ecfdf5 30%, #fdf4ff 60%, #eff6ff 100%)" }}>
        
        {/* Soft Background Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] relative z-10">
          <div>
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-sm text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#FF1F8E] uppercase mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F8E] shrink-0" />
              <span>OUR TEAM</span>
            </div>

            {/* Gradient Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] sm:leading-[0.95] mb-4 sm:mb-6">
              A Focused Team for Strategy,{" "}
              <span style={{ background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Design &amp; Growth.
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-lg text-slate-600 leading-relaxed sm:leading-8 mb-6 sm:mb-8">
              Webstep brings product thinkers, designers, developers, QA, and growth specialists together so every
              project moves from idea to launch with clear ownership.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contactus"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:scale-105 transition-all duration-300"
              >
                Talk to our team <FiArrowRight />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-800 transition-all duration-300 hover:border-pink-300 hover:text-[#FF1F8E] hover:scale-105"
              >
                View work
              </Link>
            </div>
          </div>

          {/* Team Image & Stats Card */}
          <div className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
              <Image src={teamImage} alt="Webstep team" className="h-[220px] sm:h-[360px] w-full object-cover" priority />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 sm:pt-5">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 text-center shadow-sm hover:shadow-md transition">
                  <div className="text-xl sm:text-3xl font-black bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">{value}</div>
                  <div className="mt-1 text-[11px] sm:text-xs font-semibold leading-tight text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETING TEAM SLIDER ── */}
      <MarketingTeam />

      {/* ── WHAT WE COVER ── */}
      <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md shadow-sm text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#FF1F8E] uppercase mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1F8E] shrink-0" />
              <span>WHAT WE COVER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Specialists Where Your{" "}
              <span style={{ background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Project Needs Them.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {departments.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(236,72,153,0.12)] hover:border-pink-200 flex flex-col justify-between">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 hover:scale-110"
                      style={{ background: item.accent, color: item.color }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DELIVERY MODEL ── */}
      <section className="bg-slate-950 px-4 sm:px-8 lg:px-12 py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-6xl relative z-10">
          <div className="grid gap-10 sm:gap-14 md:grid-cols-[0.8fr_1.2fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-pink-300 uppercase mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-400 shrink-0" />
                <span>DELIVERY MODEL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white mb-4">
                One Team, Clear Roles,{" "}
                <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  Practical Execution.
                </span>
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 max-w-md">
                Every engagement is handled with the right mix of planning, design, development, QA, and growth support.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {leaders.map((person) => (
                <article key={person.name} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 hover:border-pink-500/40 hover:bg-white/[0.07] transition duration-300">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 text-pink-300 border border-pink-400/30">
                    <FiCheckCircle size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-white">{person.name}</h3>
                  <p className="mt-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pink-300">{person.role}</p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">{person.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── START A PROJECT CTA ── */}
      <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-[0_20px_80px_rgba(168,85,247,0.12)] relative overflow-hidden bg-gradient-to-r from-pink-50/50 via-purple-50/50 to-blue-50/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-pink-200/80 bg-white shadow-sm text-[10px] font-bold tracking-[0.25em] text-[#FF1F8E] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF1F8E]" />
              <span>START A PROJECT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              Need the Right People{" "}
              <span style={{ background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                On Your Build?
              </span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
              Share your requirement and we will map the right team structure for your timeline and budget.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#FF1F8E] to-[#FF0055] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-[0_15px_35px_rgba(255,31,142,0.3)] hover:shadow-[0_20px_40px_rgba(255,31,142,0.4)] hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Contact us <FiSearch />
          </Link>
        </div>
      </section>

    </main>
  );
}
