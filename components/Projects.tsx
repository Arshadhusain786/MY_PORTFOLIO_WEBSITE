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
      description: 'A production-level referral and networking platform for professional growth',
      fullDescription: 'Career Galaxy is a full-stack platform designed to connect professionals through referrals and networking. Features include a referral system, real-time notifications, payment integration with Razorpay, and a comprehensive dashboard for tracking opportunities.',
      tags: ['Node.js', 'PostgreSQL', 'React', 'Razorpay'],
      category: 'fullstack',
      featured: true,
      github: '#',
      live: '#',
    },
    {
      id: 'scalable-api',
      title: 'Scalable Microservices API',
      description: 'Enterprise-grade REST API with microservices architecture and event streaming',
      fullDescription: 'Built a scalable microservices architecture handling 10k+ requests per second. Implemented event-driven architecture with Kafka for real-time data processing and Redis for caching.',
      tags: ['Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes'],
      category: 'backend',
      featured: true,
      github: '#',
    },
    {
      id: 'real-time-dashboard',
      title: 'Real-Time Analytics Dashboard',
      description: 'Live data visualization platform with WebSocket integration',
      fullDescription: 'Created a real-time analytics dashboard that processes and visualizes data streams. Implemented WebSocket for live updates and optimized queries for sub-second response times.',
      tags: ['React', 'Node.js', 'WebSocket', 'D3.js', 'PostgreSQL'],
      category: 'fullstack',
      featured: false,
      github: '#',
      live: '#',
    },
    {
      id: 'payment-gateway',
      title: 'Payment Processing System',
      description: 'Secure payment gateway with multiple payment method support',
      fullDescription: 'Developed a robust payment processing system supporting multiple payment methods. Implemented PCI compliance, encryption, and comprehensive error handling for financial transactions.',
      tags: ['Java', 'Spring Security', 'PostgreSQL', 'REST API'],
      category: 'backend',
      featured: false,
      github: '#',
    },
    {
      id: 'auth-system',
      title: 'Advanced Authentication System',
      description: 'Multi-factor authentication with OAuth2 and JWT token management',
      fullDescription: 'Implemented a comprehensive authentication system with OAuth2, JWT, MFA, and role-based access control. Integrated with multiple identity providers for seamless user authentication.',
      tags: ['Node.js', 'JWT', 'OAuth2', 'PostgreSQL', 'Redis'],
      category: 'backend',
      featured: false,
      github: '#',
    },
    {
      id: 'performance-optimizer',
      title: 'Database Query Optimizer',
      description: 'Tool for analyzing and optimizing database queries',
      fullDescription: 'Built a query optimization tool that analyzes execution plans and suggests improvements. Reduced average query time by 60% for client applications through intelligent indexing.',
      tags: ['Python', 'PostgreSQL', 'Machine Learning', 'Data Analysis'],
      category: 'tools',
      featured: false,
      github: '#',
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
