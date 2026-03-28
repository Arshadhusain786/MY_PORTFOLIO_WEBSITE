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
      category: 'Backend Frameworks',
      color: 'from-cyan-400 to-blue-500',
      items: [
        { name: 'Spring Boot', proficiency: 95 },
        { name: 'Node.js / Express', proficiency: 90 },
        { name: 'FastAPI', proficiency: 85 },
      ],
    },
    {
      category: 'Languages',
      color: 'from-blue-400 to-purple-500',
      items: [
        { name: 'Java', proficiency: 95 },
        { name: 'JavaScript / TypeScript', proficiency: 90 },
        { name: 'Python', proficiency: 85 },
      ],
    },
    {
      category: 'Databases & Tools',
      color: 'from-green-400 to-cyan-500',
      items: [
        { name: 'PostgreSQL / MySQL', proficiency: 92 },
        { name: 'MongoDB', proficiency: 85 },
        { name: 'Redis / Caching', proficiency: 88 },
      ],
    },
    {
      category: 'DevOps & Cloud',
      color: 'from-orange-400 to-red-500',
      items: [
        { name: 'Docker / Kubernetes', proficiency: 85 },
        { name: 'AWS', proficiency: 82 },
        { name: 'CI/CD Pipelines', proficiency: 88 },
      ],
    },
    {
      category: 'Frontend Mastery',
      color: 'from-pink-400 to-rose-500',
      items: [
        { name: 'React / Next.js', proficiency: 88 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'Vue.js', proficiency: 80 },
      ],
    },
    {
      category: 'System Design',
      color: 'from-indigo-400 to-blue-500',
      items: [
        { name: 'Microservices', proficiency: 88 },
        { name: 'Scalability & Performance', proficiency: 87 },
        { name: 'Design Patterns', proficiency: 90 },
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
            Constantly learning and adapting to new technologies. Ask me about my latest projects and the tech stack I&apos;m exploring!
          </p>
        </div>
      </div>
    </section>
  );
}
