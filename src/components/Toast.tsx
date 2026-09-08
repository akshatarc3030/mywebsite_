import React from 'react';
import { CheckCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      id="portfolio-toast"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-pink-300 shadow-[0_8px_30px_rgb(219,39,119,0.15)] text-xs sm:text-sm text-[#1e1b1e] animate-in slide-in-from-bottom-5 duration-200"
    >
      <CheckCircle className="w-4 h-4 text-[#db2777] shrink-0" />
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-[#8c7283] hover:text-[#1e1b1e] p-0.5 rounded cursor-pointer"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
