import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './Stats.css';

const STATS = [
  { number: '50', suffix: '+', label: 'References in rotation' },
  { number: '∞',  suffix: '',  label: "Icewill's obsession level" },
  { number: '100', suffix: '%', label: 'Personally vetted pieces' },
  { number: '24',  suffix: '/7', label: 'Always on the wrist' },
];

export default function Stats() {
  const [headRef, headVisible] = useReveal();
  const [tagRef,  tagVisible]  = useReveal();
  const [imgRef,  imgVisible]  = useReveal();

  return (
    <section className="stats">
      <div className="stats__left">
        <h2
          ref={headRef}
          className={`stats__heading reveal ${headVisible ? 'visible' : ''}`}
        >
          A Network<br />That<br /><em>Never<br />Melts.</em>
        </h2>

        <p
          ref={tagRef}
          className={`stats__tagline reveal ${tagVisible ? 'visible' : ''}`}
        >
          ICEWRIST® Fine Horology<br />
          Owned, curated, delivered — by people<br />
          who live and breathe the wrist.
        </p>

        <div className="stats__grid">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>

      <div
        ref={imgRef}
        className={`stats__right reveal ${imgVisible ? 'visible' : ''}`}
      >
        <img
          src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=1000&q=80"
          alt="Watch collection"
          loading="lazy"
        />
        <div className="stats__right-overlay" />
      </div>
    </section>
  );
}

function StatItem({ number, suffix, label, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`stat-item reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="stat-item__number">
        {number}<span>{suffix}</span>
      </div>
      <div className="stat-item__label">{label}</div>
    </div>
  );
}
