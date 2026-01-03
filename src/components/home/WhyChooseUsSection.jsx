import React from 'react';
import { Award, ShieldCheck, Sparkles, BadgeIndianRupee, Users, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Experienced Specialists",
    description: "Years of expertise in video tape conversion with thousands of satisfied customers"
  },
  {
    icon: ShieldCheck,
    title: "Safe & Confidential",
    description: "Your precious memories are handled with utmost care and complete confidentiality"
  },
  {
    icon: Sparkles,
    title: "High-Quality Output",
    description: "Professional-grade conversion equipment ensures crystal-clear digital videos"
  },
  {
    icon: BadgeIndianRupee,
    title: "Affordable Pricing",
    description: "Competitive rates with transparent pricing and no hidden charges"
  },
  {
    icon: Users,
    title: "Trusted Local Provider",
    description: "Reliable local computer service provider serving customers across India"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast processing times with regular updates on your conversion status"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Zayan Computers
          </h2>
          <p className="text-lg text-slate-300">
            We're dedicated to preserving your memories with the highest quality and care
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}