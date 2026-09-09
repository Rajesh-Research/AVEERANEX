import React from 'react';
import type { Metadata } from 'next';
import Link from '@/components/link';
import { ProductDetails } from '../../sections';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AVEERANEX Learn | Interactive AI Learning Platform',
  description: 'An interactive learning platform that turns complex technology concepts into practical, hands-on experiences.',
  alternates: { canonical: '/products/learn' },
  openGraph: { title: 'AVEERANEX Learn', url: 'https://www.aveeranex.com/products/learn' }
};

export default function LearnProductPage() {
  return (
    <main id="main">
      <section className="inner-hero products-hero">
        <div>
          <span className="eyebrow"><i className="blue-dot" /> Dedicated Product View</span>
          <h1>AVEERANEX Learn<span className="blue">.</span></h1>
          <p className="body-copy">
            An interactive learning platform designed to make artificial intelligence, data analytics, and software engineering intuitive, practical, and engaging.
          </p>
          <div className="actions">
            <Link href="/products" className="text-link">
              <ArrowLeft size={16} /> All Products
            </Link>
          </div>
        </div>
      </section>

      <ProductDetails productId="learn" />

      <section className="section final-cta">
        <span className="eyebrow"><i className="blue-dot" /> Early Access & Enquiries</span>
        <h2>Interested in AVEERANEX Learn?<br />Get in touch with our team<span className="blue">.</span></h2>
        <div className="actions">
          <Link href="/contact?topic=Product%20Enquiry&product=learn" className="button light-button">
            Request Information <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
