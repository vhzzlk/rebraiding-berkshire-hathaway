import React, { useEffect } from 'react';
import styled from 'styled-components';
import Lenis from 'lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Investments from './components/Investments/Investments';
import Shareholders from './components/Shareholders/Shareholders';
import Reports from './components/Reports/Reports';
import Footer from './components/Footer/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  useEffect(() => {
    // Forçar a começar do topo e não restaurar rolagens de sessões anteriores
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Rolar para o topo logo ao carregar
    window.scrollTo(0, 0);

    // Scrolling 80px deeper to ensure the sticky hero text is completely covered
    // by the section's top background overlap, creating a clean cut.
    const NAVBAR_OFFSET = 80;
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept internal anchor clicks and delegate scrolling to Lenis
    const handleAnchorClick = e => {
      const target = e.currentTarget;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          // Small delay lets the mobile menu close before scrolling
          setTimeout(() => {
            lenis.scrollTo(element, { offset: NAVBAR_OFFSET, duration: 1.5 });
          }, 100);
        }
      }
    };

    // Wait for React to render all links before attaching listeners
    const listenerTimer = setTimeout(() => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));
    }, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(listenerTimer);
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
      lenis.destroy();
    };
  }, []);

  return (
    <AppContainer id="top">
      <Navbar />
      <MainContent>
        <Hero />
        <About />
        <Investments />
        <Shareholders />
        <Reports />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
export default App;
