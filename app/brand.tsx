import Image from 'next/image';

export function Brand({ tagline = false, priority = false, className = '' }: { tagline?: boolean; priority?: boolean; className?: string }) {
  return <span className={`brand-container ${tagline ? 'has-tagline' : 'wordmark-only'} ${className}`}>
    <Image src="/aveeranex-brand-card.png" alt={tagline ? 'AVEERANEX — Research • Technology • Innovation' : 'AVEERANEX'} className={`brand-img ${tagline ? 'full-logo' : 'cropped-wordmark'}`} width={1536} height={1024} priority={priority} unoptimized />
  </span>;
}
