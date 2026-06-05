import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__frost" />

      <div className="hero__content">
        <p className="hero__eyebrow">Fine Horology — Curated by Icewill</p>
        <h1 className="hero__title">
          COLD<br />
          PRECISION,<br />
          <em>Pure Time.</em>
        </h1>
        <p className="hero__subtitle">Timepieces that don't beg for attention.</p>
        <p className="hero__desc">
          ICEWRIST® is a curated watch house built for those who understand that a great
          timepiece says everything — without a word. Born from Icewill's obsession with
          precision, restraint, and ice-cold aesthetics.
        </p>
      </div>

      <div className="hero__badge">
        <span className="hero__badge-text">
          EST.<br />BY<br />ICE<br />WILL<br />·<br />HMR
        </span>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Explore</span>
      </div>
    </section>
  );
}
