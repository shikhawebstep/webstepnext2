"use client"
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  // prevent scrolling when modal is open
  useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = 'unset';
      }
      return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-md border border-slate-200 shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-bold font-heading text-slate-900">All Features</h2>
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-pink-600 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <div className="p-6 max-h-[60vh] overflow-y-auto bg-white">
          <ul className="space-y-4">
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> Custom Website Design</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> Mobile Responsive Layout</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> SEO Optimization Setup</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> Contact Form Integration</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> Speed Optimization</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> Social Media Links</li>
             <li className="flex items-start gap-3 text-slate-600"><FaCircleCheck className="text-pink-600 mt-1 flex-shrink-0"/> 1 Year Free Hosting</li>
          </ul>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <button
            type="button"
            className="w-full py-3 rounded-xl font-bold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all border border-slate-200"
            onClick={() => setIsOpen(false)}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        className="text-pink-600 hover:text-pink-500 text-sm font-medium underline text-center w-full mb-2 cursor-pointer transition-colors"
      >
        See all features
      </button>

      {mounted ? createPortal(modalContent, document.body) : null}
    </>
  );
};

export default Modal;
