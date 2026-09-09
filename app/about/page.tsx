import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/link';
import { Network } from '../site';
import { Process, Capabilities, Philosophy } from '../sections';
import {
  ArrowUpRight,
  Check,
  Search,
  Sparkles,
  Cpu,
  HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About AVEERANEX | Where Research Meets Technology and Innovation',
  description: 'AVEERANEX (OPC) PRIVATE LIMITED is a technology company developing intelligent digital products and platforms across education, AI, knowledge intelligence and emerging technology domains.',
  alternates: { canonical: '/about' },
  openGraph: { title: 'About AVEERANEX', url: 'https://www.aveeranex.com/about' }
};

const philosophyPillars = [
  {
    title: 'Research',
    subtitle: 'Understanding the problem deeply before building the solution.',
    icon: Search
  },
  {
    title: 'Technology',
    subtitle: 'Using robust technologies to convert ideas into scalable systems.',
    icon: Cpu
  },
  {
    title: 'Innovation',
    subtitle: 'Creating new experiences rather than replicating existing ones.',
    icon: Sparkles
  }
];

const missionPoints = [
  'Transform research and emerging technologies into practical products.',
  'Build intelligent and intuitive digital experiences.',
  'Make advanced technology more accessible.',
  'Create scalable technology platforms capable of serving global users.',
  'Continuously explore the next generation of AI and digital innovation.'
];

export default function About() {
  return (
    <main id="main">
      {/* 1. HERO HEADER */}
      <section className="inner-hero about-hero">
        <div>
          <span className="eyebrow"><i className="blue-dot" /> About AVEERANEX</span>
          <h1>Where Research Meets Technology & Innovation<span className="blue">.</span></h1>
          <p className="body-copy">
            AVEERANEX (OPC) PRIVATE LIMITED is a technology-focused company developing intelligent digital products and platforms across education, artificial intelligence, knowledge intelligence and emerging technology domains.
          </p>
        </div>
        <Network />
      </section>

      {/* 2. FOUNDING BELIEF */}
      <section className="section purpose founding-belief">
        <span className="eyebrow">The Founding Belief</span>
        <div>
          <h2>Meaningful innovation happens when research, technology and real-world problems come together<span className="blue">.</span></h2>
          <p className="body-copy">
            Rather than approaching technology only as software development, AVEERANEX focuses on understanding problems deeply and creating digital experiences that are practical, intelligent, scalable and human-centred.
          </p>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="section mission-vision-enhanced">
        <div className="vision-card">
          <span className="eyebrow"><i className="brand-dot" style={{ background: '#009bb4', boxShadow: '0 0 8px rgba(0,155,180,0.8)' }} /> Our Vision</span>
          <h2>To build a globally recognised technology product ecosystem driven by research, intelligence and continuous innovation<span className="blue">.</span></h2>
          <p>
            We aspire to create digital platforms that improve how people learn, discover knowledge, make decisions and access personalised services.
          </p>
        </div>

        <div className="mission-card">
          <span className="eyebrow"><i className="brand-dot" style={{ background: '#65bc15', boxShadow: '0 0 8px rgba(101,188,21,0.8)' }} /> Our Mission</span>
          <h2>Our mission is to:</h2>
          <ul className="mission-list">
            {missionPoints.map((pt) => (
              <li key={pt}>
                <div className="check-icon">
                  <Check size={13} />
                </div>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. HOW WE BUILD (PROCESS) */}
      <Process about={true} />

      {/* 5. CAPABILITIES */}
      <Capabilities />

      {/* 6. OUR PHILOSOPHY */}
      <Philosophy />

      {/* 4. OUR PHILOSOPHY */}
      <section className="section philosophy-pillars-section">
        <span className="eyebrow">Our Philosophy</span>
        <div className="section-head">
          <h2>Three Pillars of Innovation<span className="blue">.</span></h2>
          <p className="body-copy">
            Understanding, engineering, and creating experiences built around human potential.
          </p>
        </div>

        <div className="pillars-grid">
          {philosophyPillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div key={p.title} className="pillar-card">
                <div className="pillar-header">
                  <div className="pillar-icon">
                    <IconComp size={18} />
                  </div>
                  <h3>{p.title}</h3>
                </div>
                <p>{p.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="philosophy-brand-banner">
          <span>Together, these principles define AVEERANEX:</span>
          <div className="brand-statement-text">
            RESEARCH <i className="brand-dot dot-blue" /> TECHNOLOGY <i className="brand-dot dot-blue" /> INNOVATION
          </div>
        </div>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="section approach-section">
        <span className="eyebrow">Our Approach</span>
        <h2>At the Intersection of Impact<span className="blue">.</span></h2>
        <p className="body-copy">
          We believe the most successful technology products sit at the intersection of human need, research, intelligence, design, and technology.
        </p>

        <div className="core-question-box">
          <div className="question-header">
            <HelpCircle size={18} className="question-icon" />
            <span>Every AVEERANEX initiative begins with a simple question:</span>
          </div>
          <h3>“Can technology make this experience meaningfully better?”</h3>
          <p>If the answer is yes, we explore how to build it.</p>
        </div>
      </section>

      {/* 6. CORPORATE ENTITY INFO */}
      <section className="section company-info">
        <span className="eyebrow">The Company</span>
        <h2>AVEERANEX (OPC) PRIVATE LIMITED</h2>
        <div>
          <span>Technology product company</span>
          <span>Based in India. Building for the world.</span>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="section final-cta">
        <span className="eyebrow"><i className="blue-dot" /> Collaborate & Innovate</span>
        <h2>Interested in our thinking?<br />Let’s build together<span className="blue">.</span></h2>
        <div className="actions">
          <Link href="/contact" className="button light-button">Contact Our Team <ArrowUpRight size={16} /></Link>
          <Link href="/products" className="text-link">Explore Products <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
