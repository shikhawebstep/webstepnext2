import React from 'react';
import ExpertsForm from '../ExpertsForm';
import AnimatedSection from '../AnimatedSection';

const NodeDev = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative z-10 px-6 overflow-hidden font-roboto">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-green-100/40 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <AnimatedSection delay={0.1} direction="up">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left Content */}
            <div className="lg:w-3/5">
              <div className="mb-10">
                <span className="font-mono text-[10px] tracking-[0.25em] capitalize text-green-600 font-bold mb-6 block">
                  Scalable Architecture
                </span>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-8 tracking-tight capitalize">
                  Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Node.js</span> Solutions
                </h2>
                <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                  <p>
                    Node.js has revolutionized backend development with its non-blocking, event-driven architecture. It&apos;s the go-to choice for companies looking to build real-time, data-intensive applications.
                  </p>
                  <p>
                    At Webstep Solutions, we leverage Node.js to build everything from simple REST APIs to complex microservices and real-time streaming platforms. Our developers are experts in the entire Node.js ecosystem, including Express, NestJS, and more.
                  </p>
                  <p>
                    We focus on writing clean, efficient, and well-tested code that ensures your application can handle thousands of concurrent users with ease.
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

export default NodeDev;
