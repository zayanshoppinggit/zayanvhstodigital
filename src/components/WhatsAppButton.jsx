import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ phoneNumber, variant = "floating", className = "" }) {
  const message = encodeURIComponent("Hello Zayan Computers, I want to convert my old video tapes to digital. Please guide me.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  );
}