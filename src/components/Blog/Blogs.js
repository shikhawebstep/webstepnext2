"use client";
import React from 'react';
import Lists from '../Lists';
import QuoteForm from '../QuoteForm';
import AnimatedSection from '../AnimatedSection';

const Blogs = () => {
  return (
    <section className="pt-[130px]  md:pt-[100px] xl:pt-[150px] pb-12 sm:pb-24 bg-white relative z-10 px-4 sm:px-6 overflow-hidden font-roboto">

      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-50 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-50 rounded-full blur-[80px] sm:blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto relative mt-4 sm:mt-10 z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 items-center">

            {/* ── Left Content ── */}
            <div className="w-full lg:w-3/5 xl:w-3/5">
              <div className="relative mb-10 sm:mb-16">

                <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-pink-400/20 blur-[120px] rounded-full" />
                <div className="absolute top-10 right-0 w-[250px] h-[250px] bg-purple-400/20 blur-[120px] rounded-full" />

                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl
                  bg-white/50 backdrop-blur-xl border border-white/60
                  text-[#FF1F8E] font-semibold text-[9px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.35em] uppercase
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)] mb-4 sm:mb-6
                  hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1F8E] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF1F8E]" />
                  </span>
                  Webstep Blog & Insights
                </div>

                {/* Heading */}
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] sm:leading-[0.9] mb-4 sm:mb-6">
                  <span className="block text-slate-900">
                    Web Dev Tips &
                  </span>
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #E879F9 0%, #A855F7 40%, #38BDF8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Industry Insights
                    <span className="absolute left-0 -bottom-2 w-full h-[6px] rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 blur-sm opacity-70 animate-pulse" />
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10 max-w-2xl">
                  Practical guides, tutorials, and insights from the Webstep team — covering React, Next.js,
                  WordPress, Shopify, AI integrations, and everything in between.
                  <span className="text-slate-900 font-semibold"> Built by developers, for developers and business owners.</span>
                </p>

                {/* CTA + Stats */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                  <a href="#postblogs" className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-white text-xs sm:text-sm font-semibold text-center
                    bg-gradient-to-r from-pink-500 to-purple-500
                    shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300">
                    Explore Articles →
                  </a>

                  <div className="flex items-center justify-around sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500">
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-slate-900">5+</p>
                      <p>Years Experience</p>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-slate-900">120+</p>
                      <p>Projects</p>
                    </div>
                    <div>
                      <p className="text-lg sm:text-xl font-bold text-slate-900">80+</p>
                      <p>Clients</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="relative w-20 h-1.5 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                  <div className="absolute inset-0 blur-md opacity-70 bg-gradient-to-r from-pink-400 to-cyan-400" />
                </div>

              </div>

              <Lists />
            </div>

            {/* ── Right Form ── */}
            <div className="w-full lg:w-2/5 xl:w-2/5">
              <div className="relative p-[2px] rounded-3xl sm:rounded-[3rem] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-[0_20px_60px_rgba(236,72,153,0.25)] mt-6 sm:mt-20">
                <div className="rounded-3xl sm:rounded-[3rem] backdrop-blur-xl bg-white/90 p-4 sm:p-10">
                  <div className="relative z-10">
                    <QuoteForm />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Blogs;