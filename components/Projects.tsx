'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  category: string;
  featured: boolean;
  github?: string;
  live?: string;
  image?: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: featuredRef, isInView: featuredInView } = useInView({ threshold: 0.2 });

  const projects: Project[] = [
    {
      id: 'career-galaxy',
      title: 'Career Galaxy',
      description: 'Production-grade full-stack platform for career guidance and professional referrals',
      fullDescription: 'Architected and deployed a scalable full-stack platform on AWS with Spring Boot backend and React frontend. Implemented secure authentication, Razorpay payment integration, and role-based access control. Features include a referral system, dashboard for opportunity tracking, and comprehensive user management. Deployed on custom domain with production-ready infrastructure.',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'Razorpay', 'AWS'],
      category: 'fullstack',
      featured: true,
      github: 'https://github.com/arshad4self',
      live: 'https://careergalaxy.com',
    },
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Microservices Backend',
      description: 'Scalable microservices architecture with 15+ REST APIs and integrated payment workflows',
      fullDescription: 'Built a Spring Boot-based microservices backend (User, Product, Payment services) with Eureka service discovery and API Gateway. Developed 15+ REST APIs using layered architecture with JWT-based authentication and role-based access control. Implemented dynamic product filtering with JPA queries, reducing response times by 20-30%. Integrated external payment APIs with centralized exception handling for secure end-to-end operations.',
      tags: ['Spring Boot', 'Microservices', 'Eureka', 'JWT', 'REST APIs'],
      category: 'backend',
      featured: true,
      github: 'https://github.com/arshad4self/ecommerce-backend',
    },
    {
      id: 'performance-tuning',
      title: 'API Performance Optimization & Caching',
      description: 'Improved API throughput by 30% through Hibernate query optimization and Redis caching',
      fullDescription: 'Optimized Spring Boot REST API endpoints through advanced Hibernate/JPA query refinement and Redis caching strategies. Accelerated API throughput by 30%, reduced database load by 25%, and achieved sub-second response times. Applied database indexing, query analysis, and cache invalidation strategies for production-grade performance.',
      tags: ['Hibernate/JPA', 'Redis', 'Spring Boot', 'PostgreSQL', 'Performance Tuning'],
      category: 'backend',
      featured: false,
      github: 'https://github.com/arshad4self',
    },
    {
      id: 'auth-security',
      title: 'OAuth2 & JWT Security Implementation',
      description: 'Secured 15+ Spring Boot endpoints with OAuth2 and JWT authentication',
      fullDescription: 'Developed and implemented comprehensive OAuth2 and JWT-based authentication system for multiple REST API endpoints. Designed secure token management, refresh token rotation, and authorization strategies. Eliminated unauthorized access vulnerabilities during API testing and improved security posture with role-based access control (RBAC).',
      tags: ['OAuth2', 'JWT', 'Spring Security', 'REST APIs', 'RBAC'],
      category: 'backend',
      featured: false,
      github: 'https://github.com/arshad4self',
    },
    {
      id: 'dsa-practice',
      title: 'Data Structures & Algorithms Mastery',
      description: '500+ LeetCode problems solved demonstrating strong problem-solving skills',
      fullDescription: 'Solved 500+ coding problems across LeetCode and GeeksforGeeks platforms, maintaining 50-day and 100-day coding streaks. Consistently ranked in top 10% for algorithmic problem-solving. Applied DSA concepts in real-world backend optimization and system design challenges.',
      tags: ['Data Structures', 'Algorithms', 'LeetCode', 'Problem Solving'],
      category: 'tools',
      featured: false,
      github: 'https://github.com/arshad4self',
    },
    {
      id: 'blind-coding-contest',
      title: 'Blind Coding Contest Winner',
      description: 'Ranked 1st among 40+ participants in competitive blind coding challenge',
      fullDescription: 'Won first place in a blind coding competition, demonstrating exceptional problem-solving abilities under pressure. Competed against 40+ participants and achieved the highest score through efficient algorithmic thinking and clean code implementation. This achievement showcases strong competitive programming skills and deep DSA knowledge.',
      tags: ['Competitive Programming', 'Blind Coding', 'Algorithms'],
      category: 'tools',
      featured: false,
      github: 'https://github.com/arshad4self',
    },
  ];

  const categories = ['all', 'fullstack', 'backend', 'frontend', 'tools'];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Featured project spotlight */}
        {featuredProjects[0] && (
          <div
            ref={featuredRef}
            className={`mb-16 glass rounded-2xl p-8 md:p-12 overflow-hidden group glow-cyan-lg transition-all duration-700 ${
              featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 text-xs font-semibold">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {featuredProjects[0].title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {featuredProjects[0].fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProjects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {featuredProjects[0].github && (
                    <a
                      href={featuredProjects[0].github}
                      className="px-6 py-2 rounded-lg bg-foreground/10 hover:bg-foreground/20 text-foreground font-semibold transition-all hover:scale-105"
                    >
                      GitHub
                    </a>
                  )}
                  {featuredProjects[0].live && (
                    <a
                      href={featuredProjects[0].live}
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg glass overflow-hidden flex items-center justify-center">
                <div className="text-6xl opacity-20">💼</div>
              </div>
            </div>
          </div>
        )}

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-background'
                  : 'glass text-foreground/70 hover:text-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:glow-cyan"
              onClick={() =>
                setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )
              }
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {project.title}
                  </h3>
                  <span className="text-xl">📌</span>
                </div>

                <p className="text-foreground/70">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-foreground/50">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {expandedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-4 animate-fade-in">
                    <p className="text-foreground/80">
                      {project.fullDescription}
                    </p>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="px-4 py-2 rounded text-xs bg-white/5 hover:bg-white/10 text-foreground transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="px-4 py-2 rounded text-xs bg-cyan-400/20 hover:bg-cyan-400/30 text-cyan-400 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
