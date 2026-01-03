import React from 'react';
import { ClipboardList, Package, Cog, Usb, Truck } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: "Submit Request",
    description: "Fill out our simple online form with your tape details and contact information"
  },
  {
    icon: Package,
    title: "Send Your Tapes",
    description: "We arrange pickup from your location or you can courier the tapes to us safely"
  },
  {
    icon: Cog,
    title: "Professional Conversion",
    description: "Our experts carefully convert your tapes using professional-grade equipment"
  },
  {
    icon: Usb,
    title: "Digital Files Ready",
    description: "Your videos are converted to high-quality MP4 files and saved on USB drive"
  },
  {
    icon: Truck,
    title: "Safe Delivery",
    description: "Receive your USB drive along with original tapes safely delivered to your door"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Simple Process</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Converting your old video tapes to digital is easy with our streamlined 5-step process
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative text-center group">
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {index + 1}
                </div>

                {/* Icon container */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors duration-300 border border-indigo-100">
                  <step.icon className="w-10 h-10 text-indigo-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}