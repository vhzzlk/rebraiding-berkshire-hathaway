import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 8rem 2rem 5rem;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: -40px;
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 6rem;
  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const Logo = styled.div`
  font-family: var(--font-serif);
  font-size: clamp(3rem, 6vw, 6rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled(motion.a)`
  color: #888888;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  display: inline-block;
  transform-origin: left center;
  &:hover {
    color: #ffffff;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333333;
  padding-top: 2rem;
  color: #555555;
  font-size: 0.9rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <TopSection>
          <Logo>
            Berkshire
            <br />
            Hathaway
          </Logo>
          <Links>
            {['Terms of Use', 'Privacy Policy', 'Contact', 'SEC Filings'].map(
              (text, idx) => (
                <FooterLink
                  key={idx}
                  href="#!"
                  onClick={e => e.preventDefault()}
                  whileHover={{
                    x: 8,
                    color: '#ffffff',
                    transition: { duration: 0.15 },
                  }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                >
                  {text}
                </FooterLink>
              ),
            )}
          </Links>
        </TopSection>
        <BottomSection>
          <p>&copy; {new Date().getFullYear()} Berkshire Hathaway Inc.</p>
          <p>Omaha, Nebraska</p>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
}
