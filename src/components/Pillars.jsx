import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './Pillars.css';

const PILLARS = [
  {
    num: '01',
    title: 'Movement\nPurity',
    desc: 'Every mechanism we carry is inspected to our own internal tolerances — tighter than the standard. If it\'s on the wrist of someone who knows, it has to be right.',
    img: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=700&q=80',
    alt: 'Watch movement',
  },
  {
    num: '02',
    title: 'Ice-Cold\nDesign',
    desc: 'Restraint is the hardest discipline. Our aesthetic filter is ruthless — if it draws attention to itself, it doesn\'t make the cut. Clean dials. Cold tones. Nothing loud.',
    img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?w=700&q=80',
    alt: 'Watch dial',
  },
  {
    num: '03',
    title: 'Wrist\nPresence',
    desc: 'A great watch doesn\'t need to be explained. It\'s recognized by those who know, and ignored by those who don\'t. That\'s exactly how Icewill designed this house.',
    img: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=700&q=80',
    alt: 'Watch on wrist',
  },
];

function PillarCard({ num, title, desc, img, alt, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`pillar-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <span className="pillar-card__num-bg">{num.replace('0', '')}</span>
      <span className="pillar-card__index">( {num} )</span>
      <h3 className="pillar-card__title">
        {title.split('\n').map((line, i) => (
          <React.Fragment key={i}>{line}{i < title.split('\n').length - 1 && <br />}</React.Fragment>
        ))}
      </h3>
      <p className="pillar-card__desc">{desc}</p>
      <div className="pillar-card__img-wrap">
        <img className="pillar-card__img" src={img} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}

export default function Pillars() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section className="pillars" id="craft">
      <div className="container">
        <div
          ref={headerRef}
          className={`pillars__header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="pillars__heading">
            Three Pillars<br />of the Wrist.
          </h2>
          <p className="pillars__subhead">
            <em>The standards Icewill built ICEWRIST® on. No exceptions, no shortcuts.</em>
          </p>
        </div>

        <div className="pillars__grid">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.num} {...p} delay={`${i * 0.12}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
