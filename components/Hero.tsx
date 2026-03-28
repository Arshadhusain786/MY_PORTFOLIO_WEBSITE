'use client';

import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const roles = ['Full Stack Developer', 'Backend Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 30);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Welcome text with fade-in effect */}
        <div className="mb-6 animate-fade-in animation-delay-100">
          <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-widest uppercase">
            Welcome to my portfolio
          </p>
        </div>

        {/* Name heading with gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-200">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Arshad Husain
          </span>
        </h1>

        {/* Typing role with cursor */}
        <div className="h-20 md:h-24 flex items-center justify-center mb-8 animate-fade-in animation-delay-300">
          <div className="text-2xl md:text-4xl font-semibold text-foreground/90">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
          Engineering scalable systems & impactful digital experiences. Specializing in backend architecture, real-world problem solving, and production-grade code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-500 flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-cyan-400/40 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass font-semibold text-foreground transition-all hover:bg-white/10 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Let&apos;s Build Together
          </a>

          <a
            href="mailto:arshad4self@gmail.com?subject=Let%27s%20Collaborate&body=Hi%20Arshad,%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="px-8 py-3 rounded-lg border border-cyan-400/40 text-cyan-400 font-semibold transition-all hover:bg-cyan-400/10 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Start Conversation
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-fade-in animation-delay-600">
          <div className="text-cyan-400/50 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
