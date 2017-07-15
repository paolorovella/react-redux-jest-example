import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  };
`;

const Logo = ({ ...props }) => <StyledLogo {...props} />;
export default Logo;
