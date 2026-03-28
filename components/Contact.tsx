'use client';

import React, { useState } from 'react';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Message sent successfully! I&apos;ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'arshad4self@gmail.com',
      href: 'mailto:arshad4self@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/arshad-husain',
      href: 'https://linkedin.com/in/arshad-husain',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/arshad4self',
      href: 'https://github.com/arshad4self',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8112775690',
      href: 'tel:+918112775690',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mb-16 text-center transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Reach out and let&apos;s create something amazing together.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="group glass rounded-lg p-6 hover:bg-white/10 transition-all hover:scale-105 block"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{info.icon}</span>
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                    <p className="font-semibold text-cyan-400 group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="font-semibold mb-6">Follow My Work</h4>
              <div className="flex gap-4">
                {[
                  { label: 'GitHub', icon: '🐙', href: 'https://github.com/arshad4self' },
                  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com/in/arshad-husain' },
                  { label: 'Email', icon: '📧', href: 'mailto:arshad4self@gmail.com' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg glass flex items-center justify-center text-xl hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all hover:scale-110"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass rounded-2xl p-8 glow-cyan">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/30 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className="p-4 rounded-lg bg-green-400/10 border border-green-400/30 text-green-400 text-sm">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass rounded-2xl p-8 md:p-12 text-center glow-cyan">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Amazing</h3>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you have a specific project, need a backend engineer, or just want to discuss tech and opportunities, I&apos;m always happy to connect. Let&apos;s create impactful solutions together!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:arshad4self@gmail.com"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-background font-semibold transition-all hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105 active:scale-95"
            >
              Send Email
            </a>
            <a
              href="tel:+918112775690"
              className="inline-block px-8 py-3 rounded-lg glass font-semibold transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
