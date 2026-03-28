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
              I&apos;m a passionate Full Stack Developer with a deep focus on backend engineering and system design. My journey in tech has been driven by a desire to build scalable, efficient solutions that solve real-world problems.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              With expertise in modern frameworks and architectures, I specialize in creating robust backend systems, implementing complex business logic, and optimizing performance at scale. I believe in writing clean, maintainable code and following best practices.
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Beyond coding, I&apos;m fascinated by system design, distributed systems, and the intersection of engineering and product thinking. I love mentoring junior developers and sharing knowledge with the community.
            </p>

            <div className="flex gap-6 pt-4">
              <div>
                <p className="text-3xl font-bold text-cyan-400">15+</p>
                <p className="text-foreground/60 text-sm">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">3+</p>
                <p className="text-foreground/60 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-foreground/60 text-sm">Client Satisfaction</p>
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
                      {['Spring Boot', 'Node.js', 'Express'].map((tech) => (
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
                      {['Java', 'JavaScript', 'TypeScript'].map((tech) => (
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
                    <p className="text-sm font-medium mb-2">Tools & Platforms</p>
                    <div className="flex flex-wrap gap-2">
                      {['PostgreSQL', 'Docker', 'AWS'].map((tech) => (
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
