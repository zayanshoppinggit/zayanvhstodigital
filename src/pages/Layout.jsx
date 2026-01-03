
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settings, setSettings] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const settingsMap = {};
      allSettings.forEach(s => {
        settingsMap[s.setting_key] = s.setting_value;
      });
      setSettings(settingsMap);
    };
    fetchSettings();

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skip header for contact (it has its own)
  if (currentPageName === 'Contact') {
    return (
      <>
        {children}
        <Footer settings={settings} />
      </>
    );
  }

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', page: 'Contact' },
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        {/* Top bar - hidden on mobile */}
        <div className={`hidden sm:block border-b transition-all duration-300 ${scrolled ? 'border-slate-200' : 'border-white/10'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-2 text-sm">
              <div className={`flex items-center gap-4 ${scrolled ? 'text-slate-600' : 'text-white/80'}`}>
                <a href={`tel:${settings.phone_number || '9567388510'}`} className="flex items-center gap-1 hover:text-indigo-500 transition-colors">
                  <Phone className="w-3 h-3" />
                  {settings.phone_number || '9567388510'}
                </a>
                <span className="w-px h-4 bg-current opacity-30" />
                <a href={`mailto:${settings.email || 'zayanservicesindia@gmail.com'}`} className="flex items-center gap-1 hover:text-indigo-500 transition-colors">
                  <Mail className="w-3 h-3" />
                  {settings.email || 'zayanservicesindia@gmail.com'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69586a1f2a454f89c7269ebe/634b09d82_1.png" 
                alt="Zayan Computers Logo" 
                className="h-12 w-12 object-contain"
              />
              <div className={`font-bold text-xl transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                Zayan<span className="text-indigo-500">Computers</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                link.page ? (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className={`text-sm font-medium transition-colors ${
                      scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">
                  Get Quote
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map(link => (
                link.page ? (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className="block py-3 text-slate-700 hover:text-indigo-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-3 text-slate-700 hover:text-indigo-600 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 mt-4">
                  Get Quote
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer settings={settings} />
    </>
  );
}

function Footer({ settings }) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69586a1f2a454f89c7269ebe/634b09d82_1.png" 
                alt="Zayan Computers Logo" 
                className="h-16 w-16 object-contain"
              />
              <div className="font-bold text-2xl">
                Zayan<span className="text-indigo-400">Computers</span>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Professional Old Video Tape to Digital Conversion Service in India. Convert VHS, VHS-C, 8mm, Mini DV & Micro MV tapes to digital USB format.
            </p>
            <p className="text-sm text-slate-500">
              Serving customers across India with quality and care
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li><Link to={createPageUrl('Home')} className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="https://zayancomputers.in/contact/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Get Quote</a></li>
              <li><Link to={createPageUrl('Contact')} className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>{settings.address || "Kannur, Kerala, India"}</li>
              <li>
                <a href={`tel:${settings.phone_number || '9567388510'}`} className="hover:text-white transition-colors">
                  {settings.phone_number || '9567388510'}
                </a>
              </li>
              <li>
                <a href={`mailto:${settings.email || 'zayanservicesindia@gmail.com'}`} className="hover:text-white transition-colors break-all">
                  {settings.email || 'zayanservicesindia@gmail.com'}
                </a>
              </li>
              <li>
                <a href={`https://${settings.main_site || 'zayancomputers.in'}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {settings.main_site || 'zayancomputers.in'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Zayan Computers. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm text-center">
            Old Video Tape to Digital Conversion Service in India
          </p>
        </div>
      </div>
    </footer>
  );
}
