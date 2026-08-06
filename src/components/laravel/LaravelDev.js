import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const LaravelDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-red-100/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

            {/* Right Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-red-500 font-bold mb-6 block">
                  The PHP Framework for Web Artisans
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Laravel</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    Laravel is known for its expressive syntax and rich ecosystem, making it the preferred framework for modern PHP development. It simplifies common tasks like authentication, routing, and caching.
                  </p>
                  <p>
                    At Webstep Solutions, we use Laravel to build enterprise-grade applications that are robust, secure, and easy to maintain. Our developers are masters of Eloquent ORM, Blade templating, and Laravel&apos;s advanced security features.
                  </p>
                  <p>
                    Whether you need a custom CRM, a high-traffic eCommerce platform, or a complex API, our Laravel experts deliver solutions that drive business growth and technical excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Left Form */}
            <div className="lg:w-2/5 w-full">

              <ExpertsForm />

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LaravelDev;
