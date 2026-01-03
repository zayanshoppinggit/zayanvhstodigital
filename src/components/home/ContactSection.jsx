import React from 'react';
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../WhatsAppButton';

export default function ContactSection({ settings }) {
  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg text-slate-600">
              Have questions? We're here to help you preserve your memories
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Info side */}
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Zayan Computers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                      <p className="text-slate-600">{settings?.address || "Kannur, Kerala, India"}</p>
                      <p className="text-sm text-indigo-600 font-medium mt-1">Service Area: All India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                      <a href={`tel:${settings?.phone_number || "9567388510"}`} className="text-slate-600 hover:text-indigo-600 transition-colors">
                        {settings?.phone_number || "9567388510"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                      <a href={`mailto:${settings?.email || "zayanservicesindia@gmail.com"}`} className="text-slate-600 hover:text-indigo-600 transition-colors break-all">
                        {settings?.email || "zayanservicesindia@gmail.com"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Website</h4>
                      <a href={`https://${settings?.main_site || "zayancomputers.in"}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-indigo-600 transition-colors">
                        {settings?.main_site || "zayancomputers.in"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA side */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <MessageCircle className="w-16 h-16 text-white/80 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Prefer WhatsApp?</h3>
                <p className="text-indigo-100 mb-8">Get instant replies on WhatsApp. We're just a message away!</p>
                <WhatsAppButton phoneNumber={settings?.whatsapp_number || "919567388510"} variant="inline" className="bg-white text-indigo-600 hover:bg-indigo-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}