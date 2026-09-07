import type { Metadata } from 'next';
import './globals.css';
import './identity.css';
import { Header, Footer } from './site';
export const metadata: Metadata = {
 metadataBase: new URL('https://aveeranex.com'), title: 'AVEERANEX | Intelligent Digital Products, AI & Innovation',
 description: 'AVEERANEX builds intelligent digital products across artificial intelligence, interactive learning, technology intelligence and emerging digital experiences.',
 alternates: { canonical: '/' }, openGraph: { title: 'AVEERANEX | Intelligent Digital Products', description: 'Building intelligence into every digital experience.', type: 'website', siteName: 'AVEERANEX', url: 'https://aveeranex.com' }
};
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'AVEERANEX (OPC) PRIVATE LIMITED', url: 'https://aveeranex.com', email: 'director@aveeranex.com', address: { '@type': 'PostalAddress', addressCountry: 'IN' } }) }} /></body></html>; }

