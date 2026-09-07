import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/link';
import { ProductDetails } from '../../sections';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TechFM | Technology Intelligence & AI Briefings',
  description: 'AI-powered intelligence from global podcasts, technology news and innovation ecosystems.',
  alternates: { canonical: '/products/techfm' },
  openGraph: { title: 'TechFM by AVEERANEX', url: 'https://aveeranex.com/products/techfm' }
};

export default function TechFMProductPage() {
  return (
    <main id="main">
      <section className="inner-hero products-hero">
        <div>
          <span className="eyebrow"><i className="blue-dot" /> Dedicated Product View</span>
          <h1>TechFM<span className="blue">.</span></h1>
          <p className="body-copy">
            AI-powered technology intelligence platform synthesizing insights from global podcasts, research papers, and innovation signals into actionable knowledge briefs.
          </p>
          <div className="actions">
            <Link href="/products" className="text-link">
              <ArrowLeft size={16} /> All Products
            </Link>
          </div>
        </div>
      </section>

      <ProductDetails productId="techfm" />

      <section className="section final-cta">
        <span className="eyebrow"><i className="blue-dot" /> Early Access & Enquiries</span>
        <h2>Interested in TechFM?<br />Get in touch with our team<span className="blue">.</span></h2>
        <div className="actions">
          <Link href="/contact?topic=Product%20Enquiry&product=techfm" className="button light-button">
            Request Information <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
