import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './Collections.css';

const COLLECTIONS = [
  {
    num: '01',
    title: 'The Glacier Series',
    desc: 'Icy blue dials, brushed steel cases, sapphire-treated crystals. The flagship collection — worn by those who need no introduction.',
  },
  {
    num: '02',
    title: 'Midnight Frost',
    desc: 'All-black references with subtle ice-blue indices. For when the setting demands silence and the wrist does the talking.',
  },
  {
    num: '03',
    title: 'Icewill Signature Edition',
    desc: 'Personally curated by Icewill. Limited to 50 pieces annually. Each numbered, certified, and delivered in a hand-crafted cold-storage case.',
  },
  {
    num: '04',
    title: 'The Thin Ice Dress Watch',
    desc: 'Sub-3mm ultra-slim profile. Swiss quartz movement. The one you wear when everything else would be too much.',
  },
  {
    num: '05',
    title: 'Perpetual Freeze — Complications',
    desc: 'Moon phase, GMT, and power reserve complications, all under the ICEWRIST® restraint doctrine. Complex inside. Calm outside.',
  },
];

function CollectionItem({ num, title, desc, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`col-item reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <span className="col-item__num">{num}</span>
      <div className="col-item__body">
        <h4 className="col-item__title">{title}</h4>
        <p className="col-item__desc">{desc}</p>
      </div>
      <span className="col-item__arrow">→</span>
    </div>
  );
}

export default function Collections() {
  const [headerRef, headerVisible] = useReveal();
  const [subRef, subVisible] = useReveal();

  return (
    <section className="collections" id="collections">
      <div className="container">
        <div className="collections__header">
          <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
            <span className="section-label--dark">( Collections )</span>
            <h2 className="collections__heading">
              Time<br />that fits.
            </h2>
          </div>
          <p
            ref={subRef}
            className={`collections__subhead reveal reveal--delay-1 ${subVisible ? 'visible' : ''}`}
          >
            Every piece is a declaration. Whether it's boardroom, dinner, or midnight —
            ICEWRIST® has the reference for the moment.
          </p>
        </div>

        <div className="collections__list">
          {COLLECTIONS.map((c, i) => (
            <CollectionItem key={c.num} {...c} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  );
}
