import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section = styled.section`
  padding: 10rem 2rem; 
  background-color: var(--panel-color); 
`;

const Container = styled.div`
  max-width: 1400px; 
  margin: 0 auto;
`;

const Header = styled.div`margin-bottom: 6rem;`;

const Title = styled(motion.h2)`
  font-family: var(--font-sans); 
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--text-color); 
  margin-bottom: 1rem;
  letter-spacing: -0.04em;
  font-weight: 500;
  line-height: 1;
`;

const Grid = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 2rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;

const Card = styled(motion.div)`
  background: var(--bg-color); 
  padding: 4rem 2rem; 
  border-radius: 20px; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start;
  position: relative;
  overflow: hidden;
`;

const CardNumber = styled.div`
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  color: #a0a0a0;
  margin-bottom: 3rem;
`;

const CardTitle = styled.h3`
  font-size: 2rem; 
  color: var(--text-color); 
  margin-bottom: 1rem; 
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const CardDescription = styled.p`
  color: var(--muted-text); 
  font-size: 1.1rem; 
  line-height: 1.5;
`;

export default function Investments() {
  const portfolio = [
    { num: "01", title: "Wholly-Owned", desc: "Operating businesses span insurance, freight rail, energy generation, and manufacturing." },
    { num: "02", title: "Equities", desc: "Substantial positions in major publicly traded companies across key economic sectors." },
    { num: "03", title: "Capital", desc: "Structured allocation designed to preserve wealth and generate compound growth." }
  ];

  return (
    <Section id="investments">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Strategic <br/> Portfolio
          </Title>
        </Header>
        <Grid>
          {portfolio.map((item, idx) => (
            <Card 
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, backgroundColor: "#ffffff", transition: { duration: 0.2, delay: 0 } }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardNumber>{item.num}</CardNumber>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.desc}</CardDescription>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}