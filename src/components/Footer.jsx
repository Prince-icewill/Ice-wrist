import React from 'react';
import './Footer.css';

const NAV_COLLECTIONS = [
  'Glacier Series',
  'Midnight Frost',
  'Icewill Signature',
  'Thin Ice Dress',
  'Perpetual Freeze',
];

const NAV_CONNECT = [
  'Instagram',
  'Twitter / X',
  'YouTube',
  'Contact Icewill',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h4 className="footer__brand-name">
            ICEWRIST<sup>®</sup>
          </h4>
          <p className="footer__brand-desc">
            Fine horology, curated by Icewill. Because time is the only flex
            that never depreciates.
          </p>
          <a href="#acquire" className="btn btn--ice footer__brand-btn">
            Start Your Inquiry
          </a>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Collections</h4>
          {NAV_COLLECTIONS.map((item) => (
            <a href="#" key={item} className="footer__link">{item}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Connect</h4>
          {NAV_CONNECT.map((item) => (
            <a href="#" key={item} className="footer__link">{item}</a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__bottom-logo">
          ICEWRIST<sup>®</sup>
        </span>
        <p className="footer__bottom-copy">
          © 2025 ICEWRIST® — Curated by Icewill — All rights reserved
        </p>
        <div className="footer__bottom-links">
          <a href="#" className="footer__bottom-link">Privacy</a>
          <a href="#" className="footer__bottom-link">Terms</a>
        </div>
      </div>
    </footer>
  );
}
