import React, { useEffect } from 'react';
import styled from 'styled-components';
import { navLinks } from '@config';
import { useLanguage } from '../hooks/LanguageContext';
import { useKeyboardShortcuts } from '../hooks/KeyboardShortcutsContext';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
  padding: 20px;
`;

const Modal = styled.div`
  background-color: var(--bg-color);
  color: var(--lightest-text-color);
  padding: 1.75rem;
  border-radius: var(--border-radius);
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--outline-light);
`;

const Title = styled.h3`
  margin: 0 0 1rem;
  font-size: var(--fz-lg);
  color: var(--primary-color);
  font-family: var(--font-mono);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--outline-light);
    font-size: var(--fz-sm);

    &:last-child {
      border-bottom: none;
    }

    kbd {
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      padding: 4px 8px;
      background: var(--light-bg-color);
      border: 1px solid var(--outline-light);
      border-radius: var(--border-radius);
      margin-right: 12px;
      flex-shrink: 0;
    }
  }
`;

const Hint = styled.p`
  margin: 1rem 0 0;
  font-size: var(--fz-xxs);
  color: var(--light-text-color);
`;

const KeyboardShortcuts = () => {
  const { isOpen, openShortcuts, closeShortcuts } = useKeyboardShortcuts();
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = e => {
      const target = e.target;
      const isInput = /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable;

      if (e.key === 'Escape') {
        closeShortcuts();
        return;
      }

      if (e.key === '?' && !e.ctrlKey && !e.metaKey && !e.altKey && !isInput) {
        e.preventDefault();
        if (isOpen) {closeShortcuts();} else {openShortcuts();}
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= 6 && !e.ctrlKey && !e.metaKey && !e.altKey && !isInput) {
        e.preventDefault();
        const link = navLinks[num - 1];
        if (link) {
          const id = link.url.replace('/#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            if (isOpen) {closeShortcuts();}
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openShortcuts, closeShortcuts]);

  if (!isOpen) {return null;}

  const sectionName = name => t(`menu_text_${name}`);

  return (
    <Backdrop
      onClick={closeShortcuts}
      role="dialog"
      aria-modal="true"
      aria-labelledby="shortcuts-title">
      <Modal onClick={e => e.stopPropagation()}>
        <Title id="shortcuts-title">{t('shortcuts_title')}</Title>
        <List>
          <li>
            <kbd>?</kbd>
            <span>{t('shortcuts_help')}</span>
          </li>
          <li>
            <kbd>Esc</kbd>
            <span>{t('shortcuts_close')}</span>
          </li>
          {navLinks.slice(0, 6).map((link, i) => (
            <li key={link.name}>
              <kbd>{i + 1}</kbd>
              <span>{sectionName(link.name)}</span>
            </li>
          ))}
        </List>
        <Hint>{t('shortcuts_hint')}</Hint>
      </Modal>
    </Backdrop>
  );
};

export default KeyboardShortcuts;
