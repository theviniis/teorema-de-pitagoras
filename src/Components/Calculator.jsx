import React from 'react';
import styled from 'styled-components';
import { variables } from '../styles/variabes';
import { default as triangle } from '../triangle.svg';
import Form from './Form';

const Wrapper = styled.div`
  max-width: 460px;
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

const Header = styled.div`
  background-color: ${variables.primary};
  color: white;
  padding: 2rem 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  white-space: nowrap;
  border-radius: 1rem;
  box-shadow: 0px 4px 12px hsla(0, 0%, 0%, 5%);
`;

const Calculator = () => {
  return (
    <Wrapper>
      <Header>
        Teorema de Pitágoras <br /> Calculadora
      </Header>
      <img
        src={triangle}
        alt='Imagem de um triângulo retângulo'
        title='Imagem de um triângulo retângulo'
        aria-label='Imagem de um triângulo retângulo'
      />
      <p>
        Insira dois lados de um triângulo-retângulo para calcular o valor da
        hipotenusa.
      </p>
      <Form />
    </Wrapper>
  );
};

export default Calculator;
