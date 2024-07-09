import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Hero>
      <HeroContent>
        <Title>Don't miss amazing grocery deals</Title>
        <Subtitle>Sign up for the daily newsletter</Subtitle>
        <InputContainer>
          <EmailInput placeholder="Your email address" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </InputContainer>
      </HeroContent>
      <HeroImage src="https://img.freepik.com/free-photo/shopping-cart-full-products-inside-supermarket_123827-28166.jpg" alt="Grocery" />
    </Hero>
  );
};

const Hero = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  padding: 2rem 4rem;
`;

const HeroContent = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const EmailInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 1rem;
  flex: 1;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1rem;
  background: #27ae60;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #219150;
  }
`;

const HeroImage = styled.img`
  max-width: 40%;
`;

export default HeroSection;
