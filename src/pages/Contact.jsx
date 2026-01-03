import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { ArrowLeft, MapPin, Phone, Mail, Globe, MessageCircle, Clock, Shield, Award } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Contact() {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const allSettings = await base44.entities.SiteSettings.list();
      const settingsMap = {};
      allSettings.forEach(s => {
        settingsMap[s.setting_key] = s.setting_value;
      });
      setSettings(settingsMap);
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const whatsappNumber = settings.whatsapp_number || "919567388510";

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: settings.address || "Zayan Computers, Kannur, Kerala, India",
      color: "indigo"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: settings.phone_number || "9567388510",
      href: `tel:${settings.phone_number || "9567388510"}`,
      color: "green"
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: settings.email || "zayanservicesindia@gmail.com",
      href: `mailto:${settings.email || "zayanservicesindia@gmail.com"}`,
      color: "purple"
    },
    {
      icon: Globe,
      label: "Main Site",
      value: settings.main_site || "zayancomputers.in",
      href: `https://${settings.main_site || "zayancomputers.in"}`,
      color: "amber"
    }
  ];

  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    amber: "bg-amber-100 text-amber-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <WhatsAppButton phoneNumber={whatsappNumber} variant="inline" className="text-sm px-4 py-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Contact Zayan Computers
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're here to help you preserve your precious memories. Reach out to us through any of the channels below.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2">
              {/* Contact Details */}
              <div className="p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Zayan Computers</h2>
                <p className="text-slate-600 mb-8">
                  Professional video tape to digital conversion service. Serving customers across India with quality and care.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${colorClasses[item.color]} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">{item.label}</h4>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            target={item.label === "Main Site" ? "_blank" : undefined}
                            rel={item.label === "Main Site" ? "noopener noreferrer" : undefined}
                            className="text-slate-600 hover:text-indigo-600 transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service Area Badge */}
                <div className="mt-8 inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">Service Area: All India</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quick Contact via WhatsApp</h3>
                <p className="text-indigo-100 mb-8 max-w-sm">
                  Get instant replies and quick quotes. We're just a message away!
                </p>
                <WhatsAppButton 
                  phoneNumber={whatsappNumber} 
                  variant="inline" 
                  className="bg-white text-indigo-600 hover:bg-indigo-50" 
                />
              </div>
            </div>
          </div>

          {/* Trust Features */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Quick Response</h3>
              <p className="text-sm text-slate-500">We respond within 24 hours</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-100">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Safe & Secure</h3>
              <p className="text-sm text-slate-500">Your tapes handled with care</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-100">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Trusted Service</h3>
              <p className="text-sm text-slate-500">Years of experience</p>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppButton phoneNumber={whatsappNumber} variant="floating" />
    </div>
  );
}