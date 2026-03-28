'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

export default function About() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a backend-focused Full Stack Developer specializing in building scalable applications using Java, Spring Boot, and modern web technologies. My passion lies in engineering robust systems that solve real-world problems efficiently and at scale.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently interning at Texium Solutions where I&apos;ve developed secure microservices, optimized API performance by 30%, and implemented OAuth2/JWT authentication across 15+ endpoints. I specialize in designing scalable REST APIs, microservices architectures, and implementing advanced caching strategies with Redis.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond backend engineering, I&apos;m deeply passionate about Data Structures and Algorithms, having solved 500+ DSA problems and ranked first in competitive blind coding contests. I love mentoring students, contributing to the developer community, and building production-grade systems that make an impact.
            </p>

            <div className="flex gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-cyan-400">500+</p>
                <p className="text-foreground/60 text-sm">DSA Problems Solved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">30%</p>
                <p className="text-foreground/60 text-sm">API Performance Gain</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">10+</p>
                <p className="text-foreground/60 text-sm">Students Mentored</p>
              </div>
            </div>
          </div>

          {/* Featured tech stack visual */}
          <div className="relative">
            <div className="glass rounded-2xl p-8 glow-cyan">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Core Technologies</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Backend Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {['Spring Boot', 'Spring MVC', 'Hibernate/JPA'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {['Java', 'C++', 'SQL'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Databases & Caching</p>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'MySQL', 'Redis'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-green-400/10 border border-green-400/30 text-green-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
