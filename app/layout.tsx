import type { Metadata } from 'next';
import './globals.css';
import './identity.css';
import { Header, Footer } from './site';
export const metadata: Metadata = {
 metadataBase: new URL('https://www.aveeranex.com'), title: 'AVEERANEX | Intelligent Digital Products, AI & Innovation',
 description: 'AVEERANEX builds intelligent digital products across artificial intelligence, interactive learning, technology intelligence and emerging digital experiences.',
 alternates: { canonical: '/' }, openGraph: { title: 'AVEERANEX | Intelligent Digital Products', description: 'Building intelligence into every digital experience.', type: 'website', siteName: 'AVEERANEX', url: 'https://www.aveeranex.com' }
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'AVEERANEX (OPC) PRIVATE LIMITED', legalName: 'AVEERANEX (OPC) PRIVATE LIMITED', url: 'https://www.aveeranex.com', logo: 'https://www.aveeranex.com/icon.svg', description: 'AVEERANEX is a technology company developing intelligent digital products and platforms across education, AI, and knowledge intelligence.', email: 'info@aveeranex.com', contactPoint: { '@type': 'ContactPoint', email: 'info@aveeranex.com', contactType: 'customer service' }, address: { '@type': 'PostalAddress', addressCountry: 'IN' } }) }} /></body></html>; }

