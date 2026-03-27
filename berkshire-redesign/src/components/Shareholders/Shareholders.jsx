import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 10rem 2rem;
  background-color: var(--panel-color);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-family: var(--font-sans);
  font-size: clamp(3rem, 6vw, 5rem);
  color: var(--text-color);
  margin-bottom: 2rem;
  letter-spacing: -0.04em;
  font-weight: 500;
  line-height: 1;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.2rem, 2vw, 1.8rem);
  color: var(--muted-text);
  line-height: 1.4;
  margin-bottom: 6rem;
  max-width: 800px;
  font-weight: 400;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
`;

const LinkItem = styled(motion.a)`
  font-family: var(--font-sans);
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 2rem 0;
  border-bottom: 1px solid #eaeaea;
  color: var(--text-color);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom-color: var(--text-color);
  }
`;

export default function Shareholders() {
  const links = [
    'Annual Meeting Information',
    "Owner's Manual",
    'Proxy Materials',
  ];

  return (
    <Section id="shareholders">
      <Container>
        <Title
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          For Our Partners
        </Title>
        <Description
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
        >
          We view our shareholders as partners. Our communication is
          straightforward, focusing on the intrinsic value of the business.
        </Description>
        <LinksContainer>
          {links.map((link, idx) => (
            <LinkItem
              key={idx}
              href="#!"
              onClick={e => e.preventDefault()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{
                x: 10,
                backgroundColor: 'var(--bg-color)',
                transition: { duration: 0.2, delay: 0 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1, delay: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + idx * 0.1,
                ease: 'easeOut',
              }}
            >
              <span>{link}</span>
              <span>&rarr;</span>
            </LinkItem>
          ))}
        </LinksContainer>
      </Container>
    </Section>
  );
}
