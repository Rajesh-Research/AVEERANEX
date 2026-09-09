import React from 'react';
import type { Metadata } from 'next';
import { ProductDetails, Future, FinalCTA } from '../sections';

export const metadata: Metadata = {
  title: 'AVEERANEX Products | AI Learning & Technology Intelligence',
  description: 'Explore AVEERANEX Learn and TechFM: intelligent digital products built for interactive learning and technology intelligence.',
  alternates: { canonical: '/products' },
  openGraph: { title: 'AVEERANEX Products', url: 'https://www.aveeranex.com/products' }
};

export default function Products() {
  return (
    <main id="main">
      <section className="inner-hero products-hero">
        <div>
          <span className="eyebrow"><i className="blue-dot" /> Dedicated Product Ecosystem</span>
          <h1>Intelligent Products<span className="blue">.</span><br />One Technology Vision.</h1>
          <p className="body-copy">
            AVEERANEX builds intelligent digital products and platforms that solve real-world needs across artificial intelligence, interactive learning, and technology intelligence.
          </p>
        </div>
      </section>

      <ProductDetails productId="all" />

      <Future />
      <FinalCTA />
    </main>
  );
}

