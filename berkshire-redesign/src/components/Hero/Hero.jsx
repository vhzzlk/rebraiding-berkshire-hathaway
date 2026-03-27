import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroWrapper = styled.section`
  height: 150vh; /* Para criar o efeito de lock/scroll */
  position: relative;
`;

const StickyContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  overflow: hidden;
  background-color: var(--bg-color);
  z-index: 1;
`;

const TitleContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-family: var(--font-sans); 
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 500; 
  color: var(--text-color); 
  line-height: 0.9;
  letter-spacing: -0.05em;
  margin-bottom: 2rem;
`;

const Subtitle = styled(motion.p)`
  font-family: var(--font-sans); 
  font-size: clamp(1rem, 1.5vw, 1.5rem);
  color: var(--muted-text); 
  max-width: 600px; 
  line-height: 1.5;
`;

const ImageContainer = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
  filter: grayscale(100%);
  opacity: 0.2;
`;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <HeroWrapper ref={ref} id="hero">
      <StickyContainer>
        <ImageContainer style={{ y: useTransform(scrollYProgress, [0,1], [0, 200]), x: -300, rotate: -5 }} >
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Architecture" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
        </ImageContainer>
        <ImageContainer style={{ y: useTransform(scrollYProgress, [0,1], [0, -100]), x: 300, rotate: 5 }} >
            <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=1974&auto=format&fit=crop" alt="Finance" style={{width: '100%', height:'100%', objectFit: 'cover'}}/>
        </ImageContainer>

        <TitleContainer style={{ y: titleY, opacity, scale }}>
          <Title
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Enduring<br/>Value.
          </Title>
          <Subtitle
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Berkshire Hathaway — fundamental principles of integrity and robust capital allocation since 1839.
          </Subtitle>
        </TitleContainer>
      </StickyContainer>
    </HeroWrapper>
  );
}
