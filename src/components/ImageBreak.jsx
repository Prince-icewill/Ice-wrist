import React from 'react';
import './ImageBreak.css';

function IceCrystal() {
  return (
    <svg className="image-break__crystal" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="100" stroke="#a8ccd7" strokeWidth="1" />
      <line x1="0" y1="50" x2="100" y2="50" stroke="#a8ccd7" strokeWidth="1" />
      <line x1="14.6" y1="14.6" x2="85.4" y2="85.4" stroke="#a8ccd7" strokeWidth="1" />
      <line x1="85.4" y1="14.6" x2="14.6" y2="85.4" stroke="#a8ccd7" strokeWidth="1" />
      <circle cx="50" cy="50" r="20" stroke="#a8ccd7" strokeWidth="1" />
      <circle cx="50" cy="50" r="35" stroke="#a8ccd7" strokeWidth="0.5" strokeDasharray="3 5" />
    </svg>
  );
}

export default function ImageBreak() {
  return (
    <div className="image-break">
      <img
        src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=1800&q=80"
        alt="Watch movement detail"
        loading="lazy"
      />
      <div className="image-break__overlay" />
      <IceCrystal />
      <div className="image-break__tag">
        ICEWRIST®<br />
        FINE HOROLOGY<br />
        © BY ICEWILL
      </div>
    </div>
  );
}
