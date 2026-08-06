"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaShieldAlt,
  FaRibbon,
  FaLock,
  FaCalendarAlt,
  FaSyncAlt,
  FaUser,
  FaChartLine,
  FaUsers,
  FaBuilding,
  FaCommentDots,
  FaLightbulb,
} from "react-icons/fa";
import { LuClock } from "react-icons/lu";

const PACKAGES_DATA = [
  {
    id: "starter",
    title: "STARTER DEVELOPER",
    tagline: "Best for Startups & Small Businesses",
    price: "$1,500",
    pricedes: "/mo",
    hoursText: "160 Hours / Month",
    hoursSubtext: "(Full Time)",
    hoursType: "blue",
    isPopular: false,
    icon: FaUser,
    events: [
      "1 Junior-Mid Developer (2–4 yrs exp.)",
      "Works as an extension of your team",
      "Daily Updates & Standups",
      "Weekly Progress Reports",
      "72-hour Onboarding",
      "Cancel Anytime",
    ],
    btnText: "Book a Call",
    btnType: "dark",
    btnIcon: FaPhoneAlt,
  },
  {
    id: "senior",
    title: "DEDICATED SENIOR DEVELOPER",
    tagline: "Best for Growing Companies",
    price: "$2,500",
    pricedes: "/mo",
    hoursText: "160 Hours / Month",
    hoursSubtext: "(Full Time)",
    hoursType: "pink",
    isPopular: true,
    popularBadge: "MOST POPULAR",
    icon: FaChartLine,
    events: [
      "1 Senior Full-Stack Developer (5+ yrs exp.)",
      "Full-stack: React + Node or Laravel",
      "Sprint Planning & Management",
      "Direct Communication",
      "Weekly Review Call",
      "72-hour Onboarding",
      "Cancel Anytime",
    ],
    btnText: "Book a Call",
    btnType: "pink",
    btnIcon: FaPhoneAlt,
  },
  {
    id: "team",
    title: "DEVELOPMENT TEAM",
    tagline: "Best for Agencies & Large Teams",
    price: "$4,500",
    pricedes: "/mo",
    hoursText: "320 Hours / Month",
    hoursSubtext: "(2 Developers + QA)",
    hoursType: "blue",
    isPopular: false,
    icon: FaUsers,
    events: [
      "2 Developers + QA",
      "Dedicated Account Manager",
      "Full Team Integration",
      "Sprint Management Included",
      "48-hour Onboarding",
      "Priority Support",
      "Cancel Anytime",
    ],
    btnText: "Book a Call",
    btnType: "dark",
    btnIcon: FaPhoneAlt,
  },
  {
    id: "enterprise",
    title: "ENTERPRISE / CUSTOM TEAM",
    tagline: "Best for Large Projects & Long-Term Partnerships",
    price: "Custom Pricing",
    pricedes: "",
    hoursText: "Custom Hours / Month",
    hoursSubtext: "(3+ Developers)",
    hoursType: "green",
    isPopular: false,
    icon: FaBuilding,
    events: [
      "3+ Developers",
      "QA, Project Manager, DevOps",
      "Custom Team Structure",
      "Dedicated Success Manager",
      "Advanced Security & Reporting",
      "Scalable & Flexible",
      "Cancel Anytime",
    ],
    btnText: "Contact Sales",
    btnType: "dark",
    btnIcon: FaUsers,
  },
];

const FEATURE_BADGES = [
  { icon: FaShieldAlt, label: "Top Rated Plus on Upwork" },
  { icon: FaRibbon, label: "12+ Years of Experience" },
  { icon: FaLock, label: "NDA Friendly" },
  { icon: FaCalendarAlt, label: "Monthly Billing" },
  { icon: FaSyncAlt, label: "Cancel Anytime" },
];

const storeSelectedPlan = (pkg) => {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(
    "selectedPackageInquiry",
    JSON.stringify({
      id: pkg.id,
      title: pkg.title,
      price: pkg.price,
      pricedes: pkg.pricedes,
      features: pkg.events,
    })
  );
};

const Packages = () => {
  return (
    <section className="pt-[140px] md:pt-[190px] pb-12 sm:pb-24 px-3 sm:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Top Upwork Badge */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-[10px] sm:text-xs md:text-sm font-bold tracking-wide shadow-sm"
          >
            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-[9px] sm:text-[10px]">
              🌸
            </span>
            <span>TOP RATED PLUS ON UPWORK</span>
            <span className="text-pink-400 font-normal ml-0.5">&gt;</span>
          </motion.div>
        </div>

        {/* Header Heading & Subtitle */}
        <div className="text-center mx-auto mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Flexible Hiring Models to{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Scale Your Team
            </span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-base md:text-lg font-medium px-2">
            Hire dedicated developers or teams on a monthly basis. No long-term contracts.
          </p>
        </div>

        {/* Feature Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 md:mb-16">
          {FEATURE_BADGES.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.08 }}
                className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-slate-200/80 shadow-sm text-slate-700 text-[10px] sm:text-xs md:text-sm font-semibold hover:border-pink-300 transition-colors"
              >
                <IconComponent className="text-pink-500 text-xs sm:text-sm shrink-0" />
                <span>{badge.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch mb-10 sm:mb-14">
          {PACKAGES_DATA.map((pkg, index) => {
            const Icon = pkg.icon;
            const BtnIcon = pkg.btnIcon;

            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl p-5 sm:p-7 flex flex-col justify-between bg-white transition-all duration-300 hover:-translate-y-1 ${
                  pkg.isPopular
                    ? "border-2 border-[#ff0066] shadow-[0_12px_35px_rgba(255,0,102,0.18)] z-10"
                    : "border border-slate-200/90 shadow-md hover:shadow-xl"
                }`}
              >
                {/* Most Popular Badge */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff0066] text-white text-[10px] sm:text-[11px] font-extrabold tracking-wider uppercase px-3.5 sm:px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    {pkg.popularBadge}
                  </div>
                )}

                <div className="flex flex-col items-stretch flex-1">
                  {/* Top Icon Circle */}
                  <div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex-1 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="text-lg sm:text-xl" />
                  </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-center flex-1 mb-4 sm:mb-5">
                    <h3 className="text-sm sm:text-base md:text-[17px] font-extrabold text-slate-900 tracking-wide uppercase">
                      {pkg.title}
                    </h3>
                    <p className="text-pink-600 text-xs md:text-sm font-semibold mt-1 max-w-[210px] mx-auto leading-snug">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="text-center flex-1 mb-4 sm:mb-5">
                    {pkg.pricedes ? (
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-slate-400 font-medium text-xs sm:text-sm">
                          {pkg.pricedes}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight block py-1">
                        {pkg.price}
                      </span>
                    )}
                  </div>

                  {/* Hours Pill Box */}
                  <div
                    className={`flex-1 rounded-2xl p-2.5 sm:p-3 text-center mb-5 sm:mb-6 border ${
                      pkg.hoursType === "pink"
                        ? "bg-[#fff0f5] border-pink-100 text-pink-950"
                        : pkg.hoursType === "green"
                        ? "bg-[#ecfdf5] border-emerald-100 text-emerald-950"
                        : "bg-[#edf2fe] border-blue-100 text-blue-950"
                    }`}
                  >
                    <div
                      className={`flex items-center justify-center gap-1.5 font-bold text-xs sm:text-sm ${
                        pkg.hoursType === "pink"
                          ? "text-pink-900"
                          : pkg.hoursType === "green"
                          ? "text-emerald-900"
                          : "text-blue-900"
                      }`}
                    >
                      <LuClock
                        className={
                          pkg.hoursType === "pink"
                            ? "text-pink-500"
                            : pkg.hoursType === "green"
                            ? "text-emerald-600"
                            : "text-blue-600"
                        }
                      />
                      <span>{pkg.hoursText}</span>
                    </div>
                    <div
                      className={`text-[10px] sm:text-[11px] md:text-xs font-medium mt-0.5 ${
                        pkg.hoursType === "pink"
                          ? "text-pink-600/80"
                          : pkg.hoursType === "green"
                          ? "text-emerald-600/80"
                          : "text-slate-500"
                      }`}
                    >
                      {pkg.hoursSubtext}
                    </div>
                  </div>

                  {/* Features list */}
                  <ul className="flex-1 space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                    {pkg.events.map((event, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 sm:gap-2.5 text-xs md:text-sm text-slate-700 font-medium"
                      >
                        <FaCheckCircle className="text-pink-500 mt-0.5 shrink-0 text-xs sm:text-sm" />
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <Link
                    href={`/customize-package?plan=${encodeURIComponent(pkg.title)}`}
                    onClick={() => storeSelectedPlan(pkg)}
                    className={`w-full py-3 sm:py-3.5 px-5 sm:px-6 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                      pkg.btnType === "pink"
                        ? "bg-gradient-to-r from-[#ff0066] to-[#ff0080] hover:from-[#e6005c] hover:to-[#e60073] text-white shadow-[0_8px_20px_rgba(255,0,102,0.35)] hover:shadow-lg"
                        : "bg-[#0a1128] hover:bg-[#152244] text-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <BtnIcon className="text-xs" />
                    <span>{pkg.btnText}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#fcf7ff] via-[#fff5f9] to-[#fcf7ff] border border-pink-100 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
        >
          {/* Left item */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100/80 text-pink-600 flex items-center justify-center shrink-0 text-base sm:text-xl">
              <FaLightbulb />
            </div>
            <div>
              <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm md:text-base">
                Need a different tech stack or role?
              </h4>
              <p className="text-slate-600 text-[11px] sm:text-xs md:text-sm mt-0.5">
                We provide developers in WordPress, Shopify, Laravel, PHP, React, Node.js and more.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-pink-200/70 shrink-0" />

          {/* Right item */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 text-left flex-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-pink-100/80 text-pink-600 flex items-center justify-center shrink-0 text-base sm:text-xl">
              <FaCommentDots />
            </div>
            <div>
              <h4 className="text-slate-900 font-extrabold text-xs sm:text-sm md:text-base">
                Let&apos;s build the right team for your project.
              </h4>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
