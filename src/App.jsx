import React from 'react';
import Cursor from './components/Cursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import About from './components/About.jsx';
import Marquee from './components/Marquee.jsx';
import ImageBreak from './components/ImageBreak.jsx';
import Pillars from './components/Pillars.jsx';
import Signature from './components/Signature.jsx';
import Collections from './components/Collections.jsx';
import Stats from './components/Stats.jsx';
import CTA from './components/CTA.jsx';
import QuoteMarquee from './components/QuoteMarquee.jsx';
import IcewillSection from './components/IcewillSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Marquee />
        <ImageBreak />
        <Pillars />
        <Signature />
        <Collections />
        <Stats />
        <CTA />
        <QuoteMarquee />
        <IcewillSection />
      </main>
      <Footer />
    </>
  );
}
