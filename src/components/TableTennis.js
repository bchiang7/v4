import React from 'react';
import styled, { keyframes } from 'styled-components';
import { usePrefersReducedMotion } from '@hooks';

const ballX = keyframes`
  0%, 100% { left: 18%; }
  25% { left: 48%; }
  50% { left: 78%; }
  75% { left: 48%; }
`;

const ballY = keyframes`
  0%, 100% { top: 50%; transform: translateY(-50%); }
  25% { top: 12%; transform: translateY(-50%); }
  50% { top: 50%; transform: translateY(-50%); }
  75% { top: 12%; transform: translateY(-50%); }
`;

const paddleL = keyframes`
  0% { transform: translate(-50%, -50%) rotate(-12deg); }
  12% { transform: translate(-50%, -50%) rotate(8deg) translateX(4px); }
  25%, 100% { transform: translate(-50%, -50%) rotate(-12deg); }
`;

const paddleR = keyframes`
  0%, 48% { transform: translate(-50%, -50%) rotate(12deg); }
  50% { transform: translate(-50%, -50%) rotate(-8deg) translateX(-4px); }
  52%, 100% { transform: translate(-50%, -50%) rotate(12deg); }
`;

const Wrap = styled.div`
  --tt-table: #0d5c3d;
  --tt-table-shadow: #0a4a30;
  --tt-surface: #f5f5f5;
  --tt-surface-dark: #e8e8e8;

  width: 180px;
  height: 56px;
  margin: 14px auto 0;
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;

  .table {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, var(--tt-table) 0%, var(--tt-table-shadow) 100%);
    border-radius: var(--border-radius);
    box-shadow: inset 0 2px 8px rgba(255, 255, 255, 0.08);
  }

  .net {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    margin-left: -1.5px;
    background: linear-gradient(180deg, #fff 0%, #e0e0e0 50%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }

  .ball {
    position: absolute;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    background: radial-gradient(circle at 30% 30%, #fff, var(--tt-surface));
    border-radius: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    animation: ${ballX} 2s ease-in-out infinite, ${ballY} 2s ease-in-out infinite;
  }

  .paddle {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 22px;
    background: linear-gradient(180deg, #fff 0%, var(--tt-surface-dark) 100%);
    border-radius: var(--border-radius);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  .paddle-left {
    left: 12%;
    margin-left: -5px;
    animation: ${paddleL} 2s ease-in-out infinite;
  }

  .paddle-right {
    left: 88%;
    margin-left: -5px;
    animation: ${paddleR} 2s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .ball,
    .paddle-left,
    .paddle-right {
      animation: none;
    }
    .ball {
      left: 50%;
      top: 50%;
      margin-left: -4px;
      transform: translateY(-50%);
    }
    .paddle-left {
      transform: translate(-50%, -50%) rotate(-12deg);
    }
    .paddle-right {
      transform: translate(-50%, -50%) rotate(12deg);
    }
  }
`;

const TableTennis = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  if (prefersReducedMotion) {return null;}
  return (
    <Wrap aria-hidden>
      <div className="table" />
      <div className="net" />
      <div className="ball" />
      <div className="paddle paddle-left" />
      <div className="paddle paddle-right" />
    </Wrap>
  );
};

export default TableTennis;
