'use client';

import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Cursor glow effect */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-8 h-8 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-400/30" />
        <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-md" />
      </div>

      {/* Spotlight effect following cursor */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle 200px at center, rgba(6, 182, 212, 0.1) 0%, transparent 100%)',
          width: '400px',
          height: '400px',
        }}
      />
    </>
  );
}
