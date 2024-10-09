import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Bitwise Industries © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
