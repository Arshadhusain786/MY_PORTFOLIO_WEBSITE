'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#experience', label: 'Experience', id: 'experience' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2 md:py-4' : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-smooth hover:scale-105"
        >
          AH
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-smooth relative group ${
                activeSection === link.id ? 'text-cyan-400' : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold text-sm transition-smooth hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
        >
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 hover:opacity-70 transition-smooth"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-2 mx-4 p-4 rounded-lg space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`block text-sm font-medium transition-smooth ${
                activeSection === link.id ? 'text-cyan-400' : 'text-foreground/70 hover:text-foreground'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold text-sm text-center transition-smooth hover:shadow-lg hover:shadow-cyan-400/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
