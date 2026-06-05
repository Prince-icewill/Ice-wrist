import React, { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#hero" className="nav__logo">
        ICEWRIST<sup>®</sup>
      </a>
      <ul className="nav__links">
        <li><a href="#collections">Collections</a></li>
        <li><a href="#craft">Craft</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#acquire" className="nav__cta">Acquire</a>
    </nav>
  );
}
