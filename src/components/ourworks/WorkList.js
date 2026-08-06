import React from 'react';

const WorkList = () => {
  const categories = [
    "All", "Startup", "UI & UX", "Education", "Front End Dev",
    "Development", "PHP", "Laravel", "Node.js"
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat, index) => (
        <button
          key={index}
          className={`px-6 py-2.5 rounded-full text-[11px] font-black capitalize tracking-widest transition-all duration-300 border
            ${index === 0
              ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/20'
              : 'bg-white text-slate-500 border-slate-100 hover:border-pink-500 hover:text-pink-600 hover:shadow-md'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default WorkList;
