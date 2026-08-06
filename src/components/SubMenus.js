import React from 'react';
import Link from 'next/link';
import { FaLaravel, FaMobile, FaPhp, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiVorondesign, SiPostman } from "react-icons/si";
import { BsStack } from "react-icons/bs";

const services = [
    {
        title: "PHP Development",
        href: "/php",
        description: "Robust back-end solutions using modern PHP practices.",
        icon: <FaPhp />,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Fullstack Development",
        href: "/fullstack",
        description: "End-to-end web applications with modern stacks.",
        icon: <BsStack />,
        color: "bg-indigo-50 text-indigo-600"
    },
    {
        title: "Laravel Development",
        href: "/laravel",
        description: "Elegant and scalable applications with Laravel.",
        icon: <FaLaravel />,
        color: "bg-red-50 text-red-600"
    },
    {
        title: "UI/UX Design",
        href: "/uiux",
        description: "User-centric designs that drive engagement.",
        icon: <SiVorondesign />,
        color: "bg-purple-50 text-purple-600"
    },
    {
        title: "WordPress Development",
        href: "/wordpress",
        description: "Custom themes and plugins for dynamic sites.",
        icon: <FaWordpress />,
        color: "bg-blue-50 text-blue-700"
    },
    {
        title: "Mobile App Development",
        href: "/mobileApp",
        description: "High-performance iOS and Android applications.",
        icon: <FaMobile />,
        color: "bg-emerald-50 text-emerald-600"
    },
    {
        title: "NodeJs Development",
        href: "/nodejs",
        description: "Fast, scalable server-side JavaScript apps.",
        icon: <FaNodeJs />,
        color: "bg-green-50 text-green-600"
    },
    {
        title: "Software Testing",
        href: "/softwaretesting",
        description: "Ensuring quality and reliability through testing.",
        icon: <SiPostman />,
        color: "bg-orange-50 text-orange-600"
    },
];

const SubMenus = ({ mobile = false, closeMenu }) => {
    return (
        <div className={`${mobile ? "flex flex-col space-y-4 py-4 px-2" : "grid grid-cols-2 gap-4 p-6 w-[560px] font-roboto"}`}>
            {services.map((service, idx) => (
                <Link 
                    key={idx} 
                    href={service.href}
                    onClick={closeMenu}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all duration-300 group/item"
                >
                    <div className={`shrink-0 w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-2xl group-hover/item:scale-110 transition-transform duration-300 shadow-sm border border-black/5`}>
                        {service.icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900 group-hover/item:text-pink-600 transition-colors duration-300">
                            {service.title}
                        </span>
                        {!mobile && (
                            <span className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-2">
                                {service.description}
                            </span>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubMenus;

