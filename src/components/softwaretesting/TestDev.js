import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const TestDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-slate-200/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-slate-500 font-bold mb-6 block">
                  Zero Defects
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-900">QA & Testing</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    Quality is at the core of everything we do. Our comprehensive testing services ensure that your application is robust, secure, and ready for the real world.
                  </p>
                  <p>
                    We offer a wide range of testing solutions, including functional testing, performance testing, security audits, and automated regression testing. Our team uses the latest tools and methodologies to identify and resolve issues before they reach your users.
                  </p>
                  <p>
                    From small web apps to large enterprise systems, we have the expertise to ensure your product meets the highest standards of quality and performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-2/5 w-full">

              <ExpertsForm />

            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestDev;
