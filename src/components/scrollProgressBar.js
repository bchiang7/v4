import React, { useEffect, useState, useRef } from 'react';

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        setScroll(height > 0 ? (scrolled / height) * 100 : 0);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${scroll}%`,
        backgroundColor: 'var(--primary-color)',
        transition: 'width 0.2s ease-out',
        zIndex: 9999,
      }}
    />
  );
};

export default ScrollProgressBar;
