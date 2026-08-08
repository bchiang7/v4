import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IconZoomIn from './icons/IconZoomIn';
import IconZoomOut from './icons/IconZoomOut';
import IconCursor from './icons/IconCursor';
import { useLanguage } from '../hooks/LanguageContext';
import { useKeyboardShortcuts } from '../hooks/KeyboardShortcutsContext';
import IconRevert from './icons/IconRevert';
import IconGrayscale from './icons/IconGrayscale';
import IconInvert from './icons/IconInvert';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
  border-radius: var(--border-radius);
  max-width: 420px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  @media (max-width: 480px) {
    width: calc(100% - 24px);
    max-width: none;
    padding: 1.25rem 16px;
    margin: 0 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  justify-items: stretch;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

const OptionCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
`;

const OptionButton = styled.button`
  background: var(--highlight-tint);
  border: none;
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 160px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background: var(--primary-color-tint);
  }

  @media (max-width: 480px) {
    max-width: none;
    height: 80px;
  }
`;

const OptionLabel = styled.div`
  margin-top: 0.25rem;
  font-size: var(--fz-sm);
  color: var(--text-color);
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.25rem;
  cursor: pointer;
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-color);
  background: none;
  color: var(--primary-color);
  transition: all 0.2s ease;
`;

const ButtonRow = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const ZoomFallback = styled.p`
  grid-column: 1 / -1;
  font-size: var(--fz-xs);
  color: var(--light-text-color);
  font-family: var(--font-mono);
  text-align: center;
  padding: 0.5rem 0;
  margin: 0;
`;

const STYLE_ID = 'big-cursor-style';
const ZOOM_STORAGE_KEY = 'portfolio-a11y-zoom';
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 2;
const ZOOM_STEP = 0.1;

const getStoredZoom = () => {
  if (typeof window === 'undefined') {return 1;}
  try {
    const saved = localStorage.getItem(ZOOM_STORAGE_KEY);
    if (saved === null) {return 1;}
    const n = parseFloat(saved, 10);
    if (Number.isNaN(n) || n < ZOOM_MIN || n > ZOOM_MAX) {return 1;}
    return Math.round(n * 10) / 10;
  } catch {
    return 1;
  }
};

const AccessibilityModal = ({ isOpen, onClose }) => {
  const [bigCursor, setBigCursor] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(getStoredZoom);
  const [zoomSupported, setZoomSupported] = useState(true);
  const { t } = useLanguage();
  const { openShortcuts } = useKeyboardShortcuts();

  const [isGrayscale, setIsGrayscale] = useState(false);
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    const supported =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('zoom', '1');
    setZoomSupported(supported);
    if (!supported) {
      document.documentElement.style.removeProperty('zoom');
      document.body.style.removeProperty('zoom');
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.filter = isGrayscale ? 'grayscale(100%)' : 'none';
  }, [isGrayscale]);

  useEffect(() => {
    const currentFilter = document.documentElement.style.filter || '';
    const hasGrayscale = currentFilter.includes('grayscale');
    const newFilter = isInverted
      ? `${hasGrayscale ? 'grayscale(100%) ' : ''}invert(100%) hue-rotate(180deg)`
      : hasGrayscale
        ? 'grayscale(100%)'
        : 'none';

    document.documentElement.style.filter = newFilter;
  }, [isInverted, isGrayscale]);

  // === Large Cursor ===
  useEffect(() => {
    const applyBigCursor = () => {
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 32 32' aria-hidden='true' role='img'>
                        <path
                            d='M6 5 L6 25 L11 20 L15 30 L18 29 L14 19 L21 19 L6 5 Z'
                            fill='#ffffff'
                            stroke='#0b1220'
                            stroke-width='0.9'
                            stroke-linejoin='round'
                            stroke-linecap='round'
                        />
                    </svg>`;

      const uri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
      const css = `
                .big-cursor, .big-cursor * {
                cursor: url("${uri}") 24 24, auto !important;
                }

                .big-cursor button,
                .big-cursor a,
                .big-cursor [role="button"],
                .big-cursor input,
                .big-cursor textarea {
                cursor: pointer !important;
                }
            `;

      let styleEl = document.getElementById(STYLE_ID);
      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = STYLE_ID;
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = css;

      document.documentElement.classList.add('big-cursor');
    };

    const removeBigCursor = () => {
      const styleEl = document.getElementById(STYLE_ID);
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
      document.documentElement.classList.remove('big-cursor');
    };

    if (bigCursor) {
      applyBigCursor();
    } else {
      removeBigCursor();
    }

    return () => {
      removeBigCursor();
    };
  }, [bigCursor]);

  // === Zoom ===
  useEffect(() => {
    if (!zoomSupported) {return;}
    const value = Math.round(zoomLevel * 10) / 10;
    document.documentElement.style.zoom = String(value);
    try {
      localStorage.setItem(ZOOM_STORAGE_KEY, String(value));
    } catch {
      // ignore storage errors (private mode, quota, etc.)
    }
  }, [zoomLevel, zoomSupported]);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + ZOOM_STEP, ZOOM_MAX));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - ZOOM_STEP, ZOOM_MIN));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    try {
      localStorage.setItem(ZOOM_STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
    <Backdrop
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === 'Escape') {onClose();}
      }}
      role="presentation">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <ModalBox
        onClick={e => e.stopPropagation()}
        onKeyDown={e => {
          if (e.key === 'Escape') {onClose();}
          e.stopPropagation();
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-modal-title">
        <h2 id="accessibility-modal-title">{t('accessibility_text_title')}</h2>

        <Grid>
          {zoomSupported ? (
            <>
              <OptionCell>
                <OptionButton
                  type="button"
                  onClick={handleZoomIn}
                  title={t('accessibility_text_zoomIn')}>
                  <IconZoomIn />
                </OptionButton>
                <OptionLabel>{t('accessibility_text_zoomIn')}</OptionLabel>
              </OptionCell>

              <OptionCell>
                <OptionButton
                  type="button"
                  onClick={handleZoomOut}
                  title={t('accessibility_text_zoomOut')}>
                  <IconZoomOut />
                </OptionButton>
                <OptionLabel>{t('accessibility_text_zoomOut')}</OptionLabel>
              </OptionCell>
            </>
          ) : (
            <ZoomFallback>{t('accessibility_zoom_unsupported')}</ZoomFallback>
          )}

          <OptionCell>
            <OptionButton
              type="button"
              onClick={() => setIsGrayscale(prev => !prev)}
              title={t('accessibility_text_grayscale')}>
              <IconGrayscale />
            </OptionButton>
            <OptionLabel>{t('accessibility_text_grayscale')}</OptionLabel>
          </OptionCell>

          <OptionCell>
            <OptionButton
              type="button"
              onClick={() => setIsInverted(!isInverted)}
              title={t('accessibility_text_invert')}>
              <IconInvert />
            </OptionButton>
            <OptionLabel>{t('accessibility_text_invert')}</OptionLabel>
          </OptionCell>

          <OptionCell>
            <OptionButton
              type="button"
              onClick={() => setBigCursor(!bigCursor)}
              title={t('accessibility_text_biggerCursor')}>
              <IconCursor />
            </OptionButton>
            <OptionLabel>{t('accessibility_text_biggerCursor')}</OptionLabel>
          </OptionCell>

          <OptionCell>
            <OptionButton
              type="button"
              onClick={() => {
                setBigCursor(false);
                handleResetZoom();
                setIsGrayscale(false);
                setIsInverted(false);
              }}
              title={t('accessibility_text_undoChanges')}>
              <IconRevert />
            </OptionButton>
            <OptionLabel>{t('accessibility_text_undoChanges')}</OptionLabel>
          </OptionCell>
        </Grid>

        <ButtonRow>
          <CloseButton
            type="button"
            onClick={() => {
              onClose();
              openShortcuts();
            }}
            title={t('shortcuts_title')}>
            {t('accessibility_text_shortcuts')}
          </CloseButton>
          <CloseButton type="button" onClick={onClose}>
            {t('general_close')}
          </CloseButton>
        </ButtonRow>
      </ModalBox>
    </Backdrop>
  );
};

AccessibilityModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AccessibilityModal;
