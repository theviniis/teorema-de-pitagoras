import styled from 'styled-components';
import { variables } from './variabes';

// One single style-sheet page just because the app ir to small.
export const Card = styled.div`
  max-width: 500px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.02),
    100px 100px 80px rgba(0, 0, 0, 0.04);
`;

export const CardHeader = styled.div`
  background-color: ${variables.primary};
  color: white;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 1rem;
  box-shadow: 0px 4px 12px hsla(0, 0%, 0%, 5%);
`;

export const Triangle = styled.img`
  margin: auto;
  max-width: 90%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  input {
    -webkit-appearance: none;
    padding: 0.5rem 1rem;
    display: inline;
    color: inherit;
    border: none;
    border-radius: 0.5rem;
    border: 2px solid ${variables.fcText};
    transition: ease-in 150ms;
    width: 100%;
    font-size: inherit;

    &:focus {
      outline: none;
      border: 2px solid ${variables.primary};
    }
    &:not(:placeholder-shown) {
      border: 2px solid ${variables.primary};
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Alert = styled.span`
  /* Adapt the color of the Alert component based on props */
  color: ${({ error }) => (error ? '#e44252' : '#39c682')};
  background-color: ${({ error }) => (error ? '#e442521f' : '#39c68229')};
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid ${({ error }) => (error ? '#e44252' : '#39c682')};
`;

export const StyledButton = styled.button`
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
