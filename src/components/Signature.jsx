import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './Signature.css';

export default function Signature() {
  const [ref, visible] = useReveal();

  return (
    <section className="signature">
      <div className="signature__bg" />
      <div className="signature__overlay" />
      <div className="signature__content">
        <h2 ref={ref} className={`signature__heading reveal ${visible ? 'visible' : ''}`}>
          Every<br />
          collection<br />
          <em>stays in<br />season.</em>
        </h2>
      </div>
    </section>
  );
}
