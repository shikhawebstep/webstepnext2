import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const PhpDev = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -skew-x-12 translate-x-1/2 pointer-events-none opacity-50"></div>
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[140px] -translate-x-1/2 pointer-events-none animate-pulse"></div>

      <div className="container mx-auto  relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">

            {/* Left Content Column */}
            <div className="lg:w-[55%]">
              <div className="max-w-xl">
                <span className="inline-block px-5 py-2 rounded-full bg-white border border-slate-200 text-pink-500 font-bold text-[10px] tracking-[0.25em] uppercase mb-10 shadow-sm">
                  Technology Leadership
                </span>
                <h2 className="text-5xl md:text-7xl font-black leading-[1.05] text-slate-900 mb-10 tracking-tighter">
                  Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">PHP Engineering</span> Solutions
                </h2>

                <div className="space-y-8 text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                  <p>
                    TechnoScore delivers digital architecture that powers global commerce. Did you know that almost all popular global brands leverage the scalability of PHP?
                  </p>
                  <p>
                    As a premier PHP development studio, we engineer bespoke CMS architectures, enterprise ecosystems, and resilient digital products.
                  </p>

                  <div className="pt-6 grid grid-cols-2 gap-8">
                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                      <span className="block text-3xl font-black text-slate-900 mb-1">10+</span>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Years Expertise</span>
                    </div>
                    <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                      <span className="block text-3xl font-black text-slate-900 mb-1">200+</span>
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">PHP Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:w-[45%] w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-500/10 blur-3xl rounded-[3rem] opacity-50"></div>
                <div className="relative">
                  <ExpertsForm />
                </div>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PhpDev;
