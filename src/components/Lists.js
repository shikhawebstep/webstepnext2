import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Lists = () => {
  const listItems = [
    { id: 1, text: 'Custom Development Services' },
    { id: 2, text: '1400+ successful projects' },
    { id: 3, text: 'Up to 70% cost savings' },
    { id: 4, text: '20+ years of development services' },
    { id: 5, text: '100% client satisfaction' },
    { id: 6, text: '2x reduced development time' },
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
