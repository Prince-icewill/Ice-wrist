import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './CTA.css';

export default function CTA() {
  const [ref1, v1] = useReveal();
  const [ref2, v2] = useReveal();
  const [ref3, v3] = useReveal();

  return (
    <section className="cta" id="acquire">
      <div className="cta__bg-text" aria-hidden="true">ICEWRIST</div>

      <h2 ref={ref1} className={`cta__heading reveal ${v1 ? 'visible' : ''}`}>
        Ready?<br />Choose your<br /><em>cold.</em>
      </h2>

      <p ref={ref2} className={`cta__desc reveal reveal--delay-1 ${v2 ? 'visible' : ''}`}>
        Talk to us about which reference belongs on your wrist.
        Icewill's team responds personally.
      </p>

      <a
        href="#"
        ref={ref3}
        className={`btn btn--ice reveal reveal--delay-2 ${v3 ? 'visible' : ''}`}
      >
        Inquire Now
      </a>
    </section>
  );
}
