'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  achievements: string[];
  type: 'work' | 'achievement';
}

export default function Experience() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.1 });

  const timeline: TimelineItem[] = [
    {
      year: '2024',
      title: 'Senior Backend Engineer',
      company: 'Tech Innovations Inc',
      description: 'Leading backend architecture and system design initiatives',
      achievements: [
        'Architected microservices handling 10k+ RPS',
        'Reduced database query time by 65%',
        'Mentored 5 junior developers',
      ],
      type: 'work',
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co',
      description: 'Building scalable web applications with modern tech stack',
      achievements: [
        'Delivered 8 production projects',
        'Implemented real-time features using WebSockets',
        'Achieved 98% test coverage',
      ],
      type: 'work',
    },
    {
      year: '2023',
      title: 'LeetCode Gold Badge',
      company: 'Achievement',
      description: 'Mastery in Data Structures and Algorithms',
      achievements: [
        '500+ problems solved',
        'Consistent ranking in top 10%',
      ],
      type: 'achievement',
    },
    {
      year: '2022',
      title: 'Hackathon Winner',
      company: 'Global Tech Summit',
      description: 'Developed an innovative AI-powered solution',
      achievements: [
        'First place in Backend Innovation category',
        'Prize: $10,000 and mentorship',
      ],
      type: 'achievement',
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      description: 'Started my professional journey in full-stack development',
      achievements: [
        'Built RESTful APIs',
        'Contributed to 3 major projects',
        'Learned Cloud & DevOps',
      ],
      type: 'work',
    },
  ];

  const stats = [
    { label: 'Projects Completed', value: '25+' },
    { label: 'Lines of Code', value: '100K+' },
    { label: 'Team Members Mentored', value: '12' },
    { label: 'Technologies Mastered', value: '20+' },
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
              Experience & Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-lg p-6 text-center hover:bg-white/10 transition-all"
            >
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-foreground/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className={`relative transition-all duration-700 ${
            timelineInView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 md:translate-x-1/2 transform" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 w-8 h-8 md:left-1/2 md:transform md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ring-4 ring-background ${
                      item.type === 'achievement'
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="glass rounded-lg p-6 hover:bg-white/10 transition-all hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`text-2xl font-bold ${
                          item.type === 'achievement'
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                            : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                        } bg-clip-text text-transparent`}
                      >
                        {item.year}
                      </span>
                      {item.type === 'achievement' && <span className="text-xl">🏆</span>}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-cyan-400 text-sm font-semibold mb-3">
                      {item.company}
                    </p>
                    <p className="text-foreground/70 mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-foreground/60">
                          <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
