"use client";
import React from 'react';
import {
    FiGlobe, FiFacebook, FiYoutube, FiTwitter, FiLayout, FiSmartphone,
    FiLayers, FiDatabase, FiCpu, FiTrendingUp, FiSettings, FiActivity,
    FiMail, FiPhone, FiArrowRight
} from 'react-icons/fi';

const Design = () => {
    const services = [
        { title: "UI/UX & Graphics Design", desc: "Crafting digital masterpieces." },
        { title: "Mobile App Development", desc: "Native & cross-platform excellence." },
        { title: "Game Development", desc: "Immersive virtual experiences." },
        { title: "Web Development", desc: "Scalable full-stack architectures." },
        { title: "DevOps Solutions", desc: "High-performance cloud systems." },
        { title: "Digital Transformation", desc: "Future-proofing your enterprise." },
    ];

    const nodes = [
        { label: "PLAN", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "0s" },
        { label: "ART", color: "from-pink-500 to-[#FF1F8E]", textColor: "text-white", delay: "1s" },
        { label: "UX", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "2s" },
        { label: "DEV", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "3s" },
        { label: "CLOUD", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "1.5s" },
        { label: "SCALE", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "0.5s" },
        { label: "SECURE", color: "from-slate-100 to-slate-200", textColor: "text-slate-600", delay: "2.5s" },
        { label: "GROW", color: "from-[#FF1F8E] to-[#D400CC]", textColor: "text-white", delay: "3.5s" },
    ];

    return (
        <section className="relative w-full bg-white font-roboto overflow-hidden border-y border-slate-50 py-24 ">

            {/* ── Ultra-Clean Background ── */}
            <div className="absolute inset-0 bg-[#FAFAFA]/30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">

                    {/* ── Left Side: Refined Infographic ── */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center relative py-10">
                        <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px]">

                            {/* Decorative Orbit Rings */}
                            <div className="absolute inset-[-40px] rounded-full border border-slate-100" />
                            <div className="absolute inset-[-10px] rounded-full border border-slate-50" />

                            {/* Minimalist Central Hub */}
                            <div className="absolute inset-0 m-auto w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center justify-center text-center z-20">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300 mb-2">Agency</span>
                                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-[0.8] uppercase tracking-tighter">
                                    Visual<br />
                                    <span className="text-[#FF1F8E]">Studio</span>
                                </h3>
                            </div>

                            {/* Orbiting Minimalist Nodes */}
                            {nodes.map((node, i) => {
                                const angle = (i * 360) / nodes.length;
                                const radius = 190;
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center group animate-float"
                                        style={{
                                            top: `calc(50% + ${radius * Math.sin((angle * Math.PI) / 180)}px)`,
                                            left: `calc(50% + ${radius * Math.cos((angle * Math.PI) / 180)}px)`,
                                            transform: 'translate(-50%, -50%)',
                                            animationDelay: node.delay
                                        }}
                                    >
                                        <div className="absolute w-px h-24 bg-slate-100 -z-10 origin-bottom"
                                            style={{ bottom: '50%', transform: `rotate(${angle + 90}deg)` }} />

                                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center p-1 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                                            <div className={`bg-gradient-to-br ${node.color} w-full h-full rounded-xl flex items-center justify-center text-[7px] md:text-[9px] font-black ${node.textColor} uppercase`}>
                                                {node.label}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* ── Right Side: Clean Narrative ── */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col">
                            {/* Header Block */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-12">
                                <div>
                                    <h2 className="text-5xl  font-black text-slate-950 tracking-tighter uppercase leading-[0.85] mb-6">
                                        Creative
                                        <span className="text-[#FF1F8E]"> Designs.</span>
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-px bg-[#FF1F8E]"></div>
                                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.5em]">The Art of Impact</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    {[FiFacebook, FiYoutube, FiTwitter].map((Icon, idx) => (
                                        <div key={idx} className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#FF1F8E] hover:border-[#FF1F8E] hover:shadow-xl transition-all cursor-pointer">
                                            <Icon size={18} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Refined Services Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-16">
                                {services.map((s, i) => (
                                    <div key={i} className="group border-l-2 border-slate-50 pl-6 hover:border-[#FF1F8E] transition-all duration-500">
                                        <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#FF1F8E] transition-colors">{s.title}</h4>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Clean Contact Bar (No Pink Glow) */}
                            <div className="relative group/bar">
                                <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 bg-white border border-slate-100 p-8 md:p-10 rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.03)] overflow-hidden">
                                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                        <div className="flex items-center gap-4 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FF1F8E] group-hover:bg-[#FF1F8E] group-hover:text-white transition-all"><FiGlobe size={16} /></div>
                                            <span className="text-[11px] font-black text-slate-900 tracking-tighter uppercase">webstepsolutions.com</span>
                                        </div>
                                        <div className="flex items-center gap-4 group cursor-pointer">
                                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#FF1F8E] group-hover:bg-[#FF1F8E] group-hover:text-white transition-all"><FiMail size={16} /></div>
                                            <span className="text-[11px] font-black text-slate-900 tracking-tighter uppercase">info@webstep.com</span>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase hover:bg-[#FF1F8E] hover:shadow-2xl transition-all">
                                        Consult <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    50% { transform: translate(-50%, -50%) translateY(-8px); }
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Design;
