import React from 'react';
import styled from 'styled-components';
import { variables } from '../styles/variabes';

const StyledButton = styled.button`
  padding: 1rem;
  outline: none;
  font-weight: 700;
  color: white;
  background: none;
  background-color: ${variables.primary};
  font-size: inherit;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  cursor: pointer;
  transition: ease-in 150ms;

  &:hover {
    box-shadow: inset 999em 0 0 0 hsl(191, 70%, 40%);
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
