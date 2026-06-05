import React from 'react';
import './QuoteMarquee.css';

const ITEMS = [
  { text: "People don't", solid: false },
  { text: 'remember watches.', solid: true },
  { text: 'They remember', solid: false },
  { text: 'the wrist.', solid: true },
];

export default function QuoteMarquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="quote-marquee">
      <div className="quote-marquee__track">
        {doubled.map((item, i) => (
          <React.Fragment key={i}>
            <span className={`quote-marquee__item ${item.solid ? 'quote-marquee__item--solid' : ''}`}>
              {item.text}
            </span>
            {item.solid && <span className="quote-marquee__gem" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
