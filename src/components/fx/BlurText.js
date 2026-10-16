import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Word = styled.span`
  display: inline-block;
  white-space: pre;
  opacity: 0;
  filter: blur(12px);
  transform: translateY(0.4em);
  transition: opacity 0.7s ease, filter 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${({ index, step }) => index * step}ms;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      filter: blur(0);
      transform: none;
    `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    filter: none;
    transform: none;
    transition: none;
  }
`;

// Word-by-word blur-in reveal, in the spirit of reactbits' BlurText.
const BlurText = ({ text, step = 90, delay = 0, as: Tag = 'span', className, children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  const words = text.split(' ');
  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} index={i} step={step} visible={visible} aria-hidden="true">
          {i < words.length - 1 ? `${w} ` : w}
        </Word>
      ))}
      {children}
    </Tag>
  );
};

BlurText.propTypes = {
  text: PropTypes.string.isRequired,
  step: PropTypes.number,
  delay: PropTypes.number,
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default BlurText;
