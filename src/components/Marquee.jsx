import React from 'react';
import './Marquee.css';

export default function Marquee() {
  const items = ['Ice', 'Cold Time', 'Ice', 'Cold Time', 'Ice', 'Cold Time'];

  return (
    <div className="marquee-section">
      <div className="marquee__track">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className={`marquee__item ${i % 2 !== 0 ? 'marquee__item--outline' : ''}`}>
              {item}
            </span>
            <span className="marquee__gem" aria-hidden="true" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
