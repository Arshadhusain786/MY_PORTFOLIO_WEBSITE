'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface Skill {
  category: string;
  color: string;
  items: { name: string; proficiency: number }[];
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView({ threshold: 0.1 });

  const skills: Skill[] = [
    {
      category: 'Languages',
      color: 'from-cyan-400 to-blue-500',
      items: [
        { name: 'Java', proficiency: 95 },
        { name: 'C++', proficiency: 85 },
        { name: 'SQL', proficiency: 90 },
      ],
    },
    {
      category: 'Backend Frameworks',
      color: 'from-blue-400 to-purple-500',
      items: [
        { name: 'Spring Boot', proficiency: 95 },
        { name: 'Spring MVC', proficiency: 90 },
        { name: 'Hibernate / JPA', proficiency: 92 },
      ],
    },
    {
      category: 'APIs & Architecture',
      color: 'from-green-400 to-cyan-500',
      items: [
        { name: 'REST APIs', proficiency: 95 },
        { name: 'Microservices', proficiency: 90 },
        { name: 'Layered Architecture', proficiency: 92 },
      ],
    },
    {
      category: 'Security & Authentication',
      color: 'from-orange-400 to-red-500',
      items: [
        { name: 'Spring Security', proficiency: 90 },
        { name: 'OAuth2 & JWT', proficiency: 90 },
        { name: 'Role-Based Access Control', proficiency: 90 },
      ],
    },
    {
      category: 'Databases & Caching',
      color: 'from-pink-400 to-rose-500',
      items: [
        { name: 'MySQL / PostgreSQL', proficiency: 92 },
        { name: 'Redis Caching', proficiency: 88 },
        { name: 'Database Optimization', proficiency: 90 },
      ],
    },
    {
      category: 'DevOps & Tools',
      color: 'from-indigo-400 to-blue-500',
      items: [
        { name: 'Docker & CI/CD', proficiency: 85 },
        { name: 'Git & Maven', proficiency: 90 },
        { name: 'Jenkins & Swagger', proficiency: 85 },
      ],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 section-gradient">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Skills grid */}
        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            gridInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="group relative glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105"
              onMouseEnter={() => setHoveredSkill(skillGroup.category)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Gradient border effect on hover */}
              <div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Category title */}
                <h3
                  className={`text-lg font-semibold mb-6 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}
                >
                  {skillGroup.category}
                </h3>

                {/* Skills list */}
                <div className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        <span className="text-xs text-foreground/50">
                          {skill.proficiency}%
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full transition-all duration-500`}
                          style={{
                            width:
                              hoveredSkill === skillGroup.category
                                ? `${skill.proficiency}%`
                                : '0%',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills note */}
        <div className="mt-16 glass rounded-xl p-8 text-center">
          <p className="text-foreground/70">
            Specialized in building scalable backend systems with a focus on performance optimization, security, and clean architecture. Proven track record of improving API response times by up to 30% through query optimization and caching strategies.
          </p>
        </div>
      </div>
    </section>
  );
}
