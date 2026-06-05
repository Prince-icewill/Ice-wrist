import React from 'react';
import './Ticker.css';

const ITEMS = [
  'Fine Horology',
  'Curated by Icewill',
  'Swiss Movements',
  'Ice-Cold Aesthetics',
  'Limited Editions',
  'Precision Above All',
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item} <span className="ticker__sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
