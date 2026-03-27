import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  mix-blend-mode: difference;
  color: #fff;
`;

const Logo = styled(motion.a)`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.02em;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  outline: none;
`;

const DesktopMenu = styled.nav`
  display: flex;
  gap: 3rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -4px;
    left: 0;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CtaButton = styled(motion.button)`
  background: transparent;
  color: inherit;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.6rem 1.5rem;
  border-radius: 50px;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #fff;
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: currentColor;
  width: 44px;
  height: 44px;
  position: relative;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const BurgerLine = styled(motion.span)`
  position: absolute;
  width: 18px;
  height: 1.5px;
  background-color: currentColor;
  border-radius: 2px;
`;

const MobileMenu = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--text-color);
  color: var(--bg-color);
  padding: 8rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 999;
  @media (min-width: 769px) {
    display: none !important;
  }
`;

const MobileNavLink = styled(motion.a)`
  font-family: var(--font-sans);
  font-size: 3.5rem;
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1;
  width: fit-content;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Variantes super suaves para as linhas do botão hamburger
  const topMenuVariant = {
    closed: { rotate: 0, y: -4 },
    open: { rotate: 45, y: 0 },
  };
  const bottomMenuVariant = {
    closed: { rotate: 0, y: 4 },
    open: { rotate: -45, y: 0 },
  };

  const navLinkVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <NavHeader
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Logo
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          BH.
        </Logo>

        <DesktopMenu>
          <NavLink
            href="#about"
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Philosophy
          </NavLink>
          <NavLink
            href="#investments"
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Portfolio
          </NavLink>
          <NavLink
            href="#shareholders"
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Partners
          </NavLink>
          <NavLink
            href="#reports"
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Letters
          </NavLink>
          <CtaButton
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.9 }}
          >
            Client Portal
          </CtaButton>
        </DesktopMenu>

        <MenuButton
          onClick={() => setIsOpen(!isOpen)}
          style={{
            zIndex: 1001,
            borderColor: isOpen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.15)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85 }}
          animate={{
            color: isOpen ? 'var(--bg-color)' : '#fff',
          }}
          transition={{ duration: 0.3 }}
        >
          <BurgerLine
            variants={topMenuVariant}
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
          />
          <BurgerLine
            variants={bottomMenuVariant}
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
          />
        </MenuButton>
      </NavHeader>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{
              y: '-100%',
              borderBottomLeftRadius: '100%',
              borderBottomRightRadius: '100%',
            }}
            animate={{
              y: 0,
              borderBottomLeftRadius: '0%',
              borderBottomRightRadius: '0%',
            }}
            exit={{
              y: '-100%',
              borderBottomLeftRadius: '100%',
              borderBottomRightRadius: '100%',
            }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {['Philosophy', 'Portfolio', 'Partners', 'Letters'].map(
              (item, idx) => (
                <MobileNavLink
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + idx * 0.1,
                    ease: 'easeOut',
                  }}
                  whileTap={{ scale: 0.95, color: '#aaa' }}
                >
                  {item}
                </MobileNavLink>
              ),
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}
