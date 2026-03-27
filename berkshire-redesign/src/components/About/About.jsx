import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 10rem 2rem; 
  background-color: var(--panel-color);
  border-radius: 40px 40px 0 0;
  position: relative;
  z-index: 2;
  margin-top: -5vh; /* Overlap effect */
`;

const Container = styled.div`
  max-width: 1400px; 
  margin: 0 auto; 
  display: grid;
  grid-template-columns: 1fr; 
  gap: 4rem;
  @media (min-width: 1024px) { grid-template-columns: 1fr 1fr; }
`;

const HeadingWrapper = styled.div`
  position: relative;
`;

const Heading = styled(motion.h2)`
  font-family: var(--font-sans); 
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--text-color); 
  font-weight: 500; 
  line-height: 1;
  letter-spacing: -0.04em;
  position: sticky;
  top: 20vh;
`;

const TextContent = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: 3rem;
  padding-top: 5vh;
`;

const Paragraph = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.8rem); 
  color: var(--muted-text); 
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: -0.01em;
`;

const Highlight = styled.span`
  color: var(--text-color);
  font-weight: 500;
`;

export default function About() {
  return (
    <Section id="about">
      <Container>
        <HeadingWrapper>
          <Heading
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our <br/> Philosophy
          </Heading>
        </HeadingWrapper>
        <TextContent>
          <Paragraph
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We are a holding company owning a diverse group of businesses. Our approach isn't driven by short-term market fluctuations, but by finding <Highlight>outstanding businesses</Highlight> with enduring competitive advantages.
          </Paragraph>
          <Paragraph
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Integrity, rational decision-making, and a relentless focus on the long run define every capital allocation we make. We believe in providing autonomy to exceptional management teams.
          </Paragraph>
        </TextContent>
      </Container>
    </Section>
  );
}