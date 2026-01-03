import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppButton from '../WhatsAppButton';

export default function PricingSection({ prices, whatsappNumber }) {
  const pricingData = [
    { type: "VHS", price: prices?.price_vhs || 400, popular: true },
    { type: "VHS-C", price: prices?.price_vhsc || 400, popular: false },
    { type: "8mm", price: prices?.price_8mm || 500, popular: false },
    { type: "Mini DV", price: prices?.price_minidv || 500, popular: true },
    { type: "Micro MV", price: prices?.price_micromv || 800, popular: false }
  ];

  return (
    <section className="py-24 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Affordable Conversion Rates
          </h2>
          <p className="text-lg text-slate-600">
            Clear pricing with no hidden fees. Pay per tape, get digital files on USB.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {pricingData.map((item) => (
            <div
              key={item.type}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${
                item.popular ? 'ring-2 ring-indigo-500 shadow-lg' : 'border border-slate-200'
              }`}
            >
              {item.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.type}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">₹{item.price}</span>
                  <span className="text-slate-500 text-sm">/tape</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    USB Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    MP4 Format
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    Safe Handling
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note and CTA */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 text-center mb-12">
          <p className="text-amber-800 font-medium">
            ⚠️ Final price may vary based on tape condition and duration. Contact us for accurate quotes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-8">
              Calculate Your Price
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <WhatsAppButton phoneNumber={whatsappNumber} variant="inline" />
        </div>
      </div>
    </section>
  );
}