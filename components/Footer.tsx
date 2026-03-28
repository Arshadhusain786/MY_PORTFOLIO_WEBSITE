'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', icon: '🐙', href: 'https://github.com/Arshadhusain786' },
    { label: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/arshad-husain-1a1860267/' },
    { label: 'Email', icon: '📧', href: 'mailto:arshad4self@gmail.com' },
  ];

  return (
    <footer className="relative border-t border-white/10 glass">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
              AH
            </a>
            <p className="text-foreground/60 text-sm mt-3">
              Full Stack Developer | Backend Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-lg hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:arshad4self@gmail.com" className="hover:text-cyan-400 transition-colors">
                  arshad4self@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918112775690" className="hover:text-cyan-400 transition-colors">
                  +91 8112775690
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-sm">
              &copy; {currentYear} Arshad Husain. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm">
              Crafted with passion and code
            </p>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-lg glass flex items-center justify-center text-xl hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-110 active:scale-95"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
