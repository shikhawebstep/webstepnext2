import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Lists = () => {
  const listItems = [
    { id: 1, text: 'Custom Development Services' },
    { id: 2, text: '120+ successful projects' },
    { id: 3, text: 'Cost-effective pricing' },
    { id: 4, text: '12+ years of development experience' },
    { id: 5, text: '98% client satisfaction' },
    { id: 6, text: 'Fast & agile development process' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {listItems.map((item) => (
        <div key={item.id} className="flex items-center gap-3 group">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
            <FiCheckCircle className="text-sm" />
          </div>
          <span className="text-slate-600 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Lists;
