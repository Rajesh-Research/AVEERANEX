'use client';
import Link from 'next/link';
import { Brand } from './brand';
import { ProductShowcase, Ecosystem, Process, Capabilities, Philosophy, Future } from './sections';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, BrainCircuit, Layers3, AudioLines, ChartNoAxesCombined, ChevronDown } from 'lucide-react';

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    if (!open && !dropdownOpen) return;
    const f = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', f);
    return () => document.removeEventListener('keydown', f);
  }, [open, dropdownOpen]);

  const isProductsActive = path.startsWith('/products');

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="wordmark" aria-label="AVEERANEX home">
        <Brand priority />
      </Link>
      
      <nav className={open ? 'nav open' : 'nav'} id="primary-navigation" aria-label="Main navigation">
        <Link 
          href="/" 
          onClick={() => setOpen(false)} 
          aria-current={path === '/' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link 
          href="/about" 
          onClick={() => setOpen(false)} 
          aria-current={path === '/about' ? 'page' : undefined}
        >
          About
        </Link>
        
        {/* Products Dropdown Menu */}
        <div 
          className={`nav-dropdown ${dropdownOpen ? 'dropdown-open' : ''}`}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="nav-dropdown-toggle">
            <Link 
              href="/products" 
              onClick={() => { setOpen(false); setDropdownOpen(false); }}
              aria-current={isProductsActive ? 'page' : undefined}
            >
              Products
            </Link>
            <button 
              type="button"
              className="dropdown-arrow-btn"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
              aria-expanded={dropdownOpen}
              aria-label="Toggle Products menu"
            >
              <ChevronDown size={14} className={`dropdown-icon ${dropdownOpen ? 'rotate' : ''}`} />
            </button>
          </div>
          
          <div className="dropdown-menu">
            <Link 
              href="/products/learn" 
              className="dropdown-item"
              onClick={() => { setOpen(false); setDropdownOpen(false); }}
            >
              <div className="dropdown-item-icon learn-icon">
                <Layers3 size={16} />
              </div>
              <div>
                <strong>AVEERANEX Learn</strong>
                <small>Interactive AI Learning</small>
              </div>
            </Link>

            <Link 
              href="/products/techfm" 
              className="dropdown-item"
              onClick={() => { setOpen(false); setDropdownOpen(false); }}
            >
              <div className="dropdown-item-icon tech-icon">
                <AudioLines size={16} />
              </div>
              <div>
                <strong>TechFM</strong>
                <small>Technology Intelligence</small>
              </div>
            </Link>

            <div className="dropdown-divider" />
            <Link 
              href="/products" 
              className="dropdown-item dropdown-all"
              onClick={() => { setOpen(false); setDropdownOpen(false); }}
            >
              <span>View All Products</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <Link 
          href="/contact" 
          onClick={() => setOpen(false)} 
          aria-current={path === '/contact' ? 'page' : undefined}
        >
          Contact us
        </Link>
      </nav>

      <Link href="/products" className="button nav-cta">
        Explore products <ArrowUpRight size={16} />
      </Link>
      
      <button 
        className="menu-toggle" 
        aria-label={open ? 'Close navigation' : 'Open navigation'} 
        aria-expanded={open} 
        aria-controls="primary-navigation" 
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link className="wordmark" href="/" aria-label="AVEERANEX home">
            <Brand tagline />
          </Link>
          <p>Building intelligence into<br />every digital experience.</p>
        </div>
        <div>
          <span className="eyebrow">Company</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <span className="eyebrow">Products</span>
          <Link href="/products/learn">AVEERANEX Learn <ArrowUpRight size={14} /></Link>
          <Link href="/products/techfm">TechFM <ArrowUpRight size={14} /></Link>
          <small>In development. Built for what’s next.</small>
        </div>
        <div>
          <span className="eyebrow">Let’s connect</span>
          <a href="mailto:Info@aveeranex.com">Info@aveeranex.com <ArrowUpRight size={14} /></a>
          <p>Technology product company<br />India · Thinking globally.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© 2026 AVEERANEX (OPC) PRIVATE LIMITED. All rights reserved.</small>
        <div>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
          <span className="online"><i /> Ideas in motion</span>
        </div>
      </div>
    </footer>
  );
}

export function Network({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 0, height = 0, frame = 0, active = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let mouse = 0;
    const resize = () => {
      const box = canvas.getBoundingClientRect();
      width = box.width;
      height = box.height;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    const visibility = new IntersectionObserver(([e]) => { active = e.isIntersecting; });
    visibility.observe(canvas);
    const move = (e: PointerEvent) => { if (!reduced) mouse = (e.clientX / window.innerWidth - .5) * .15; };
    window.addEventListener('pointermove', move, { passive: true });
    const points = Array.from({ length: 170 }, (_, i) => {
      const y = 1 - (i / 169) * 2, radius = Math.sqrt(1 - y * y), theta = i * 2.399963;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
    });
    const edges: [number, number][] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        if ((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2 < .16) edges.push([i, j]);
      }
    }
    const draw = (time: number) => {
      if (active) {
        ctx.clearRect(0, 0, width, height);
        const r = Math.min(width * .35, height * .38);
        const angle = (reduced ? .5 : time * .000055) + mouse;
        const p = points.map(v => {
          const x = v.x * Math.cos(angle) - v.z * Math.sin(angle), z = v.x * Math.sin(angle) + v.z * Math.cos(angle);
          return { x: width * .5 + x * r * (1 + z * .09), y: height * .49 + v.y * r, z };
        });
        for (const [i, j] of edges) {
          const alpha = .08 + (p[i].z + 1) * .09;
          ctx.strokeStyle = dark ? `rgba(160,193,229,${alpha})` : `rgba(65,83,111,${alpha})`;
          ctx.lineWidth = .8;
          ctx.beginPath();
          ctx.moveTo(p[i].x, p[i].y);
          ctx.lineTo(p[j].x, p[j].y);
          ctx.stroke();
        }
        p.forEach((v, i) => {
          ctx.beginPath();
          ctx.arc(v.x, v.y, i % 13 === 0 ? 2.5 : 1.2, 0, Math.PI * 2);
          ctx.fillStyle = i % 13 === 0 ? (i % 26 === 0 ? '#0090a8' : '#00a382') : dark ? '#809ab9' : `rgba(45,60,81,${.35 + (v.z + 1) * .25})`;
          ctx.fill();
        });
      }
      frame = requestAnimationFrame(draw);
    };
    resize();
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      window.removeEventListener('pointermove', move);
    };
  }, [dark]);

  return (
    <div className="network">
      <div className="orbital orbit-one" />
      <div className="orbital orbit-two" />
      <canvas ref={ref} aria-hidden="true" />
      <div className="network-core">
        <span className="core-mark">Λ</span>
        <span>AVEERANEX</span>
      </div>
      <div className="node-label node-ai"><BrainCircuit size={17} /><span>Artificial intelligence</span><i /></div>
      <div className="node-label node-learn"><Layers3 size={17} /><span>Interactive learning</span><i /></div>
      <div className="node-label node-tech"><AudioLines size={17} /><span>Technology intelligence</span><i /></div>
      <div className="node-label node-data"><ChartNoAxesCombined size={17} /><span>Analytics & automation</span><i /></div>
      <span className="coordinate coord-top">CONNECTED BY INTELLIGENCE</span>
      <span className="coordinate coord-bottom"><i /> ONE VISION. INFINITE POSSIBILITIES.</span>
    </div>
  );
}

export function HomeCTA() {
  return (
    <section className="section final-cta">
      <span className="eyebrow"><i className="blue-dot" /> Explore the future with AVEERANEX</span>
      <h2>Building intelligent products<br />for what comes next<span className="blue">.</span></h2>
      <div className="actions">
        <Link href="/products" className="button light-button">View Products <ArrowUpRight size={17} /></Link>
        <Link href="/contact" className="text-link">Get In Touch <ArrowUpRight size={17} /></Link>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <main id="main">
      <section className="hero card-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <i className="blue-dot" /> Intelligent digital products
          </div>
          <h1>
            Building <span className="intelligence">intelligence</span> into every digital experience<span className="blue">.</span>
          </h1>
          <p className="hero-desc">
            We turn research and technology into thoughtful digital products for learning, knowledge and everyday life.
          </p>
          <p className="hero-desc-sub">
            Discover a growing ecosystem shaped by artificial intelligence, software engineering and human-centred design.
          </p>
          <div className="actions">
            <Link href="/products" className="button">
              Explore Our Products <ArrowUpRight size={17} />
            </Link>
            <Link href="/about" className="text-link">
              About AVEERANEX <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <Network />
      </section>

      <div className="capability-strip">
        <span>RESEARCH</span><b>→</b>
        <span>TECHNOLOGY</span><b>→</b>
        <span>INNOVATION</span><b>→</b>
        <span>IMPACT</span>
      </div>

      <section className="section belief" id="belief">
        <div className="eyebrow"><i className="blue-dot" /> What we believe</div>
        <div>
          <h2>Technology should do more<br />than process information.</h2>
          <p className="belief-words">Understand. <span>Learn.</span> Decide. <span>Act.</span></p>
          <p className="body-copy">
            We combine artificial intelligence, analytics, human-centered design and product engineering to make the complex feel intuitive. Because the best technology moves people forward.
          </p>
          <Link className="text-link" href="/about">
            The thinking behind AVEERANEX <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <ProductShowcase />
      <Ecosystem />
      <HomeCTA />
    </main>
  );
}



