import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './IcewillSection.css';

export default function IcewillSection() {
  const [ref1, v1] = useReveal();
  const [ref2, v2] = useReveal();

  return (
    <section className="icewill" id="about-icewill">
      <div
        ref={ref1}
        className={`icewill__left reveal ${v1 ? 'visible' : ''}`}
      >
        <h2 className="icewill__heading">
          Curated<br />by<br /><em>Icewill.</em>
        </h2>
        <p className="icewill__desc">
          This isn't a store. It's a point of view. Icewill built ICEWRIST® because no
          one was doing it with the standards it deserved — ice-cold taste, zero
          compromise, and the patience to wait for the right piece.
        </p>
      </div>

      <div
        ref={ref2}
        className={`icewill__right reveal reveal--delay-1 ${v2 ? 'visible' : ''}`}
      >
        <p className="icewill__note">
          ( N°1 ) — Discover the vision behind the house and the man who keeps the
          temperature low.
        </p>
        <a href="#" className="btn btn--dark">The Story</a>
      </div>
    </section>
  );
}
