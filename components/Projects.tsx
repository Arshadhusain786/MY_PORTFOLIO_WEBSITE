'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const GITHUB_USERNAME = 'Arshadhusain786';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  featured: boolean;
  repo: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: featuredRef, isInView: featuredInView } = useInView({ threshold: 0.2 });

  const projects: Project[] = [
    // Featured Full Stack Projects
    {
      id: 'career-galaxy',
      title: 'Career Galaxy',
      description: 'A production-grade full-stack platform for career guidance and referral workflows. Scalable backend using Spring Boot, REST APIs, and PostgreSQL with responsive React frontend and Razorpay payment integration.',
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'Razorpay', 'REST APIs'],
      category: 'fullstack',
      featured: true,
      repo: 'Career-Galaxy-Full-Stack',
    },
    {
      id: 'ecommerce-backend',
      title: 'E-Commerce Microservices Backend',
      description: 'Microservices-based backend system with user, product, and payment services. Built 15+ REST APIs with JWT authentication, Eureka service discovery, and API Gateway. Performance optimized with 20-30% improvement.',
      tags: ['Spring Boot', 'Microservices', 'Eureka', 'JWT', 'REST APIs'],
      category: 'fullstack',
      featured: true,
      repo: 'E-COMMERCE-APP',
    },
    // Additional Full Stack
    {
      id: 'student-management',
      title: 'Student Management System',
      description: 'Full-stack system for managing students, courses, and records. Built with Spring Boot backend and Thymeleaf templating for dynamic server-side rendering.',
      tags: ['Spring Boot', 'Thymeleaf', 'MySQL', 'JPA'],
      category: 'fullstack',
      featured: false,
      repo: 'Student-Management-System-Full-Stack',
    },
    // Backend & ML Projects
    {
      id: 'spam-detection',
      title: 'Spam Mail Detection System',
      description: 'Hybrid machine learning model for email spam classification. Uses Python, ML algorithms, and NLP techniques to classify emails with high accuracy.',
      tags: ['Python', 'Machine Learning', 'NLP', 'Scikit-learn'],
      category: 'backend',
      featured: false,
      repo: 'spam-mail-detection-system-hybrid-model',
    },
    {
      id: 'library-management',
      title: 'Library Management System',
      description: 'Backend system for managing books, issue/return tracking, and user records. Demonstrates database design and transactional operations.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
      category: 'backend',
      featured: false,
      repo: 'Library-Management-System',
    },
    // Core Learning Projects
    {
      id: 'book-my-show',
      title: 'Book-My-Show Application',
      description: 'Core application project demonstrating booking system architecture and user management. Covers database design and business logic implementation.',
      tags: ['Java', 'Spring Boot', 'Database Design'],
      category: 'core',
      featured: false,
      repo: 'Book-My-Show-Application',
    },
    {
      id: 'multithreading',
      title: 'MultiThreading',
      description: 'Core Java learning project demonstrating concurrent programming concepts, thread management, and synchronization patterns.',
      tags: ['Java', 'Threading', 'Concurrency', 'Synchronization'],
      category: 'core',
      featured: false,
      repo: 'MultiThreading',
    },
    {
      id: 'jpa-basics',
      title: 'Basics of JPA',
      description: 'Fundamentals of Java Persistence API with Hibernate ORM mapping, database operations, and entity relationships.',
      tags: ['Java', 'JPA', 'Hibernate', 'ORM'],
      category: 'core',
      featured: false,
      repo: 'Basics-of-JPA',
    },
    {
      id: 'spring-security',
      title: 'Spring Security',
      description: 'Core security learning project demonstrating authentication, authorization, and securing REST API endpoints with Spring Security.',
      tags: ['Spring Security', 'Authentication', 'Authorization', 'JWT'],
      category: 'core',
      featured: false,
      repo: 'Spring-security',
    },
  ];

  const categories = ['all', 'fullstack', 'backend', 'core'];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featuredProjects = projects.filter((p) => p.featured);

  const getGitHubUrl = (repo: string) => {
    return `https://github.com/${GITHUB_USERNAME}/${repo}`;
  };

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8" id="projects">
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
              Projects Portfolio
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
        </div>

        {/* Featured projects spotlight */}
        {featuredProjects.length > 0 && (
          <div
            ref={featuredRef}
            className={`mb-16 space-y-6 transition-all duration-700 ${
              featuredInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-2xl p-8 md:p-10 overflow-hidden group glow-cyan-lg hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 border border-cyan-400/40 text-cyan-400 text-xs font-semibold mb-4">
                      Featured
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={getGitHubUrl(project.repo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105 active:scale-95"
                >
                  View on GitHub
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Filter buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all text-sm cursor-pointer ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-background'
                  : 'glass text-foreground/70 hover:text-foreground hover:bg-white/10'
              }`}
            >
              {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col h-full"
            >
              <div className="space-y-4 flex-1">
                <h3 className="text-lg font-bold text-cyan-400 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-white/5 border border-white/10 text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href={getGitHubUrl(project.repo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm bg-white/5 hover:bg-white/10 text-foreground transition-all hover:text-cyan-400"
                >
                  GitHub
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-foreground/60">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
