import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Disc, Usb, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "VHS to Digital",
    description: "Convert your classic VHS tapes to crystal-clear digital format",
    icon: "📼",
    features: ["MP4 Output", "USB Delivery", "Original Preserved"]
  },
  {
    title: "VHS-C to Digital",
    description: "Compact VHS-C camcorder tapes converted with precision",
    icon: "📹",
    features: ["HD Quality", "USB Format", "Safe Handling"]
  },
  {
    title: "8mm Tape to Digital",
    description: "Hi8 and Video8 tapes digitized professionally",
    icon: "🎞️",
    features: ["Professional Grade", "USB Storage", "Color Correction"]
  },
  {
    title: "Mini DV to Digital",
    description: "Digital camcorder Mini DV cassettes to USB",
    icon: "🎬",
    features: ["Full Resolution", "Fast Delivery", "Quality Check"]
  },
  {
    title: "Micro MV to Digital",
    description: "Rare Micro MV format expertly converted",
    icon: "💿",
    features: ["Specialized Equipment", "Premium Quality", "Careful Process"]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Video Tape Conversion Services
          </h2>
          <p className="text-lg text-slate-600">
            We convert all major tape formats to high-quality digital files, delivered on USB drive
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 border border-transparent hover:border-indigo-100"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{service.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-indigo-500" />
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Convert?</h3>
            <p className="text-indigo-100 mb-6">Get your personalized quote in minutes</p>
            <a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-full px-8">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}