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
  display: flex; flex-direction: column; min-height: 100vh;
`;

const MainContent = styled.main`flex: 1;`;

function App() {
  useEffect(() => {
    // Forçar a começar do topo e não restaurar rolagens de sessões anteriores
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Rolar para o topo logo ao carregar
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Interceptar todos os cliques em links internos e gerenciar via Lenis
    const handleAnchorClick = (e) => {
      const target = e.currentTarget;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href !== '#') {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          // Timeout pequeno permite que a UI do botão click feche o menu primeiro
          setTimeout(() => {
            lenis.scrollTo(element, { offset: -50, duration: 1.5 });
          }, 100);
        }
      }
    };

    // Usar timeout para garantir que o React renderizou todos os links primeiro
    setTimeout(() => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.addEventListener('click', handleAnchorClick);
      });
    }, 500);
    
    return () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      lenis.destroy();
    }
  }, []);

  return (
    <AppContainer>
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
