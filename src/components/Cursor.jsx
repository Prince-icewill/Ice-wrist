import React, { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      followerPos.current.x += (mouseRef.current.x - followerPos.current.x) * 0.09;
      followerPos.current.y += (mouseRef.current.y - followerPos.current.y) * 0.09;
      if (followerRef.current) {
        followerRef.current.style.left = followerPos.current.x + 'px';
        followerRef.current.style.top = followerPos.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2.5)';
        cursorRef.current.style.opacity = '0.5';
      }
    };
    const onLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        cursorRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  );
}
