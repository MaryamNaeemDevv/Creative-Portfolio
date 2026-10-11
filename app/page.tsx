'use client';

import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Asterisk, Play, X, MoveUpRight, Sparkles } from 'lucide-react';

type Project = { title: string; type: string; category: 'Campaigns' | 'Posters' | 'Branding' | 'Art direction'; image: string; description: string; className?: string };
const projects: Project[] = [
  { title: 'A little extra bite', type: 'Product campaign · Concept', category: 'Campaigns', image: '/work/burger-campaign.webp', description: 'A playful food campaign built around a bold orange palette and an unexpected product composition.', className: 'tall' },
  { title: 'Elevate. Optimize. Achieve.', type: 'Product advertising', category: 'Campaigns', image: '/work/product-campaign.webp', description: 'A high-energy supplement visual using layered information, product focus, and a strong promotional hierarchy.' },
  { title: 'Sneaker stories', type: 'Editorial product visual', category: 'Art direction', image: '/work/sneaker-campaign.webp', description: 'A darker, editorial take on product storytelling with layered imagery and a premium mood.', className: 'wide' },
  { title: 'Theatre of stories', type: 'Event poster', category: 'Posters', image: '/work/theatre-poster.webp', description: 'A theatrical poster with an illustrated, storybook-like atmosphere and rich color.' },
  { title: 'Graduation, in the spotlight', type: 'Event invitation', category: 'Posters', image: '/work/graduation.webp', description: 'A celebratory invitation that uses warm lighting, a clear focal point, and strong type hierarchy.' },
  { title: 'The Frieden', type: 'Identity exploration', category: 'Branding', image: '/work/fried-en.webp', description: 'A moody editorial identity concept balancing portraiture with restrained typography.' },
  { title: 'Synthex', type: 'Tech brand identity', category: 'Branding', image: '/work/synthex-logo.webp', description: 'A logo and social visual for a coding-learning platform, using a technical motif and electric blue palette.' },
  { title: 'Supplement culture', type: 'Editorial social creative', category: 'Art direction', image: '/work/supplement-editorial.webp', description: 'A textured, magazine-inspired social visual with oversized type and a strong editorial point of view.' },
  { title: 'Eid Mubarak', type: 'Seasonal social design', category: 'Posters', image: '/work/eid-flyer.webp', description: 'A bright seasonal greeting design with playful illustration and festive detail.' },
  { title: 'Fun Week', type: 'Event schedule graphic', category: 'Posters', image: '/work/fun-week.webp', description: 'A cheerful schedule graphic designed to make multiple activities easy to scan.' },
  { title: 'Beneath the surface', type: 'Atmospheric visual', category: 'Art direction', image: '/work/underwater-art.webp', description: 'A cinematic underwater scene with a small central subject and immersive color.' },
  { title: 'Auratium', type: 'Logo study', category: 'Branding', image: '/work/auratium-logo.webp', description: 'A minimal gold-on-black logo direction exploring a more luxurious visual language.' }
];
const filters = ['All work', 'Campaigns', 'Posters', 'Branding', 'Art direction'] as const;

export default function Home() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All work');
  const [active, setActive] = useState<Project | null>(null);
  const filtered = useMemo(() => filter === 'All work' ? projects : projects.filter(p => p.category === filter), [filter]);
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return <main>
    <nav className="nav wrap"><a href="#top" className="wordmark" aria-label="Maryam Naeem home">MN<span>®</span></a><div className="nav-links"><a href="#work">Selected work</a><a href="#motion">Motion</a><a href="#about">About</a></div><a className="nav-cta" href="mailto:maryam.naeem.iqbal@gmail.com">Let&apos;s talk <MoveUpRight size={15}/></a></nav>

    <section id="top" className="hero wrap">
      <div className="hero-kicker"><span className="live-dot"/> INDEPENDENT CREATIVE · PAKISTAN <span className="hero-year">2026—∞</span></div>
      <h1>MAKING<br/><span className="outline-text">GOOD STUFF</span><br/>LOOK <span className="lime-word">UNMISSABLE<span className="asterisk">✳</span></span></h1>
      <div className="hero-bottom"><p>Graphic design, visual storytelling &amp; content that makes people <em>stop scrolling.</em></p><button className="round-arrow" onClick={scrollToWork} aria-label="Scroll to selected work"><ArrowDownRight size={27}/></button><div className="hero-side-note">IDEAS INTO<br/>VISUAL IMPACT.</div></div>
      <div className="hero-stamp"><Asterisk size={23}/><span>CURIOUS BY<br/>DEFAULT</span></div>
    </section>

    <section className="ticker" aria-label="Creative services"><div className="ticker-track">{Array.from({length: 4}).map((_,i)=><span key={i}>DESIGN WITH INTENTION <b>✳</b> MAKE IT MOVE <b>✳</b> KEEP THEM LOOKING <b>✳</b> </span>)}</div></section>

    <section id="work" className="work-section wrap section-pad">
      <div className="section-head"><div><p className="eyebrow">01 / THE GOOD STUFF</p><h2>Selected <span>work.</span></h2></div><p className="section-intro">A mix of product campaigns, social graphics, identity experiments, and visual worlds. Different briefs, one goal: make the idea land.</p></div>
      <div className="filters" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?'filter active':'filter'} onClick={()=>setFilter(f)}>{f}<span>{f==='All work'?'12':projects.filter(p=>p.category===f).length.toString().padStart(2,'0')}</span></button>)}</div>
      <div className="project-grid">{filtered.map((p,i)=><button key={p.title} className={`project-card ${p.className||''} card-${i%4}`} onClick={()=>setActive(p)} aria-label={`View ${p.title}`}><div className="project-image"><img src={p.image} alt={p.title} loading={i<3?'eager':'lazy'}/><span className="view-project"><ArrowUpRight size={20}/></span><span className="project-index">{String(projects.indexOf(p)+1).padStart(2,'0')}</span></div><div className="project-meta"><div><h3>{p.title}</h3><p>{p.type}</p></div><span className="project-category">{p.category}</span></div></button>)}</div>
      <p className="work-footnote"><Sparkles size={15}/> Selected student and self-directed work. Concept pieces are identified as such where applicable.</p>
    </section>

    <section id="motion" className="motion-section">
      <div className="wrap section-pad"><div className="section-head motion-head"><div><p className="eyebrow">02 / A LITTLE MOTION</p><h2>Not just<br/><span>still frames.</span></h2></div><p className="section-intro">A peek into my editing practice. From gameplay footage to paced sequences, titles, and atmosphere.</p></div>
        <div className="video-shell"><video controls preload="metadata" playsInline poster="/work/sneaker-campaign.webp"><source src="/work/super-sonic-edit.mp4" type="video/mp4"/>Your browser does not support embedded video.</video><div className="video-caption"><span className="video-tag"><Play size={12} fill="currentColor"/> VIDEO EDIT</span><div><h3>Super Sonic: Chaos Unleashed</h3><p>Gameplay edit · University OOP project</p></div><span className="video-duration">02:34</span></div></div>
        <div className="motion-note"><span className="lime-line"/> This is a project edit, not a product ad. I&apos;m building out more short-form, product-led work.</div>
      </div>
    </section>

    <section id="about" className="about-section wrap section-pad"><div className="about-top"><p className="eyebrow">03 / WHO&apos;S MAKING IT</p><span className="about-scribble">hey there ↘</span></div><div className="about-layout"><h2>Hi, I&apos;m<br/><span>Maryam.</span></h2><div className="about-copy"><p className="about-lead">A creative thinker with an artist&apos;s eye and a developer&apos;s brain.</p><p>I&apos;m a Computer Science student at FAST-NUCES Islamabad who loves turning ideas into visuals people actually want to look at. My work moves between product graphics, posters, identity explorations, and video editing.</p><p>I bring together conventional art, Canva-based design, curiosity about AI tools, and a hands-on approach to learning by making.</p><div className="skill-pills"><span>Graphic design</span><span>Social content</span><span>Video editing</span><span>Visual storytelling</span><span>AI-curious</span></div></div></div></section>

    <section className="contact-section"><div className="wrap contact-inner"><p className="eyebrow">04 / GOT A GOOD ONE?</p><h2>LET&apos;S MAKE<br/><span>SOMETHING</span><br/>MATTER.</h2><a className="contact-button" href="mailto:maryam.naeem.iqbal@gmail.com">Email me <ArrowUpRight size={21}/></a><div className="contact-doodle">✳</div></div></section>
    <footer className="footer wrap"><a href="#top" className="wordmark">MN<span>®</span></a><p>Designed with curiosity &amp; a little nerve.</p><div><a href="https://github.com/MaryamNaeemDevv" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href="mailto:maryam.naeem.iqbal@gmail.com">Email <ArrowUpRight size={13}/></a></div><span className="copyright">© 2026 MARYAM NAEEM</span></footer>

    {active && <div className="modal-backdrop" role="presentation" onClick={()=>setActive(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={active.title} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setActive(null)} aria-label="Close project"><X/></button><img src={active.image} alt={active.title}/><div className="modal-copy"><p className="eyebrow">{active.category} / PROJECT {String(projects.indexOf(active)+1).padStart(2,'0')}</p><h2>{active.title}</h2><p>{active.description}</p><span>{active.type}</span></div></div></div>}
  </main>;
}
