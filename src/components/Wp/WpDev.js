import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const WpDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-blue-500 font-bold mb-6 block">
                  The World&apos;s Favorite CMS
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">WordPress</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    WordPress powers over 40% of the web, and for good reason. It offers unmatched flexibility, ease of use, and a massive ecosystem of plugins and themes.
                  </p>
                  <p>
                    At Webstep Solutions, we don&apos;t just &quot;install&quot; WordPress. We build custom themes and plugins tailored to your specific needs, ensuring your site is fast, secure, and easy for your team to manage.
                  </p>
                  <p>
                    From high-converting landing pages to complex multisite installations and headless WordPress architectures, our experts deliver solutions that help you stand out in a crowded digital landscape.
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

export default WpDev;
