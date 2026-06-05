import React from 'react';
import useReveal from '../hooks/useReveal.jsx';
import './About.css';

export default function About() {
  const [ref1, v1] = useReveal();
  const [ref2, v2] = useReveal();
  const [ref3, v3] = useReveal();

  return (
    <section className="about" id="about">
      <div className="container">
        <span ref={ref1} className={`section-label ${v1 ? 'visible' : ''}`}>
          About the House
        </span>
        <div className="about__grid">
          <div ref={ref2} className={`about__left reveal ${v2 ? 'visible' : ''}`}>
            <p>
              ICEWRIST® doesn't follow trends. We set the temperature. Each piece in our
              collection is chosen with the same obsessive standard —{' '}
              <strong>cold clarity, flawless movement, and a presence that commands silence.</strong>
            </p>
            <p>
              We don't mass-produce. We don't compromise. Every reference in our catalog has
              been personally vetted by Icewill, ensuring that what lands on your wrist is
              nothing short of a statement.
            </p>
            <p>
              Horology is personal. At ICEWRIST®, it's also a philosophy — time is the only
              luxury that cannot be manufactured. Wear it accordingly.
            </p>
            <span className="about__sig">— Icewill, Founder</span>
          </div>

          <div ref={ref3} className={`about__right reveal reveal--delay-2 ${v3 ? 'visible' : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1495857000853-fe46c8aefc30?w=800&q=80"
              alt="ICEWRIST timepiece"
              loading="lazy"
            />
            <div className="about__tag">
              EST. BY ICEWILL<br />
              HOROLOGY HOUSE<br />
              © ICEWRIST®
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
