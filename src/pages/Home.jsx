import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import PricingSection from '@/components/home/PricingSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import ContactSection from '@/components/home/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [settings, setSettings] = useState({});
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const allSettings = await base44.entities.SiteSettings.list();
      const settingsMap = {};
      const pricesMap = {};
      
      allSettings.forEach(s => {
        if (s.setting_type === 'pricing') {
          pricesMap[s.setting_key] = parseInt(s.setting_value);
        } else {
          settingsMap[s.setting_key] = s.setting_value;
        }
      });
      
      setSettings(settingsMap);
      setPrices(pricesMap);
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const whatsappNumber = settings.whatsapp_number || "919567388510";

  return (
    <div className="min-h-screen bg-white">
      <HeroSection whatsappNumber={whatsappNumber} />
      <ServicesSection />
      <PricingSection prices={prices} whatsappNumber={whatsappNumber} />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <ContactSection settings={settings} />
      <WhatsAppButton phoneNumber={whatsappNumber} variant="floating" />
    </div>
  );
}
