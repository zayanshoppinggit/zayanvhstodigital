import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Play, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '../WhatsAppButton';

export default function HeroSection({ whatsappNumber }) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Trusted Video Conversion Service in India</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Convert Your Old
            <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Video Tapes to Digital
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional conversion of <strong className="text-white">VHS, VHS-C, 8mm, Mini DV & Micro MV</strong> tapes into high-quality digital USB format. Preserve your precious memories forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30">
                Get Price & Convert
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <WhatsAppButton phoneNumber={whatsappNumber} variant="inline" />
          </div>

          {/* Tape types showcase */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {['VHS', 'VHS-C', '8mm', 'Mini DV', 'Micro MV'].map((type) => (
              <span
                key={type}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/70 text-sm font-medium hover:bg-white/10 transition-colors cursor-default"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}