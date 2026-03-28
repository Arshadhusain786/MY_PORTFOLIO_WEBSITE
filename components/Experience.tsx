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
      year: 'Dec 2025',
      title: 'Java Backend Developer Intern',
      company: 'Texium Solutions',
      description: 'Developing Spring Boot REST APIs with advanced security and optimization',
      achievements: [
        'Developed Spring Boot REST APIs securing 15+ endpoints with OAuth2 and JWT',
        'Accelerated API throughput by 30% with Redis caching and Hibernate optimization',
        'Achieved 25% lower database load through intelligent query refinement',
      ],
      type: 'work',
    },
    {
      year: 'May 2025',
      title: 'Java Backend / Full Stack Trainee',
      company: 'AccioJob',
      description: 'Industry-aligned training in Java, Data Structures, and Spring Boot',
      achievements: [
        'Completed comprehensive Core Java and Spring Boot training',
        'Built backend-focused applications with clean layered architecture',
        'Reduced application defect rates by 15% through best practices',
      ],
      type: 'work',
    },
    {
      year: 'Present',
      title: 'LeetCode & DSA Mastery',
      company: 'Achievement',
      description: 'Solving complex algorithmic problems and building strong competitive programming foundation',
      achievements: [
        '500+ Data Structures & Algorithms problems solved',
        'Maintained 50-day and 100-day coding streaks',
        'Consistent top 10% ranking on competitive platforms',
      ],
      type: 'achievement',
    },
    {
      year: 'Recent',
      title: 'Blind Coding Contest Winner',
      company: 'Achievement',
      description: 'Ranked 1st among 40+ participants in competitive coding challenge',
      achievements: [
        'First place ranking among 40+ participants',
        'Demonstrated exceptional problem-solving under pressure',
        'Showcased deep algorithmic thinking and optimization skills',
      ],
      type: 'achievement',
    },
    {
      year: '2024',
      title: 'Open Source & Community Contribution',
      company: 'Software Development Club',
      description: 'Teaching and mentoring students in Java and backend development',
      achievements: [
        'Mentored 10+ students in Java and backend fundamentals',
        'Volunteered with Koshish Organization teaching 100+ underprivileged students',
        'Increased academic pass rates by 45% through dedicated teaching',
      ],
      type: 'achievement',
    },
  ];

  const stats = [
    { label: 'DSA Problems Solved', value: '500+' },
    { label: 'Students Mentored', value: '10+' },
    { label: 'Underprivileged Students Taught', value: '100+' },
    { label: 'API Optimization Improvement', value: '30%' },
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
