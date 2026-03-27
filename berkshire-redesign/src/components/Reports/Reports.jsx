import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 10rem 2rem; 
  background-color: var(--bg-color); 
`;

const Container = styled.div`
  max-width: 1400px; 
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 6rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 2rem;
`;

const Title = styled(motion.h2)`
  font-family: var(--font-sans); 
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--text-color); 
  letter-spacing: -0.04em;
  font-weight: 500;
  line-height: 1;
`;

const Sub = styled(motion.span)`
  font-size: 1.2rem;
  color: var(--muted-text);
`;

const Grid = styled.div`
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 1.5rem;
  @media (min-width: 768px) { grid-template-columns: 1fr 1fr; }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
`;

const ReportCard = styled(motion.a)`
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 2rem; 
  background: var(--panel-color);
  border-radius: 20px; 
  min-height: 250px;
`;

const ReportYear = styled.span`
  font-weight: 500; 
  color: var(--text-color); 
  font-size: 3rem;
  letter-spacing: -0.05em;
  line-height: 1;
`;

const ReportDesc = styled.span`
  color: var(--muted-text); 
  font-size: 1.1rem;
`;

export default function Reports() {
  const years = [2024, 2023, 2022, 2021, 2020, 2019];

  return (
    <Section id="reports">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Annual Letters
          </Title>
          <Sub
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Archive
          </Sub>
        </Header>
        <Grid>
          {years.map((year, idx) => (
            <ReportCard 
              key={year} 
              href="#!"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, backgroundColor: "#ffffff", transition: { duration: 0.2, delay: 0 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1, delay: 0 } }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ReportYear>{year}</ReportYear>
              <ReportDesc>Letter to Shareholders &rarr;</ReportDesc>
            </ReportCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}