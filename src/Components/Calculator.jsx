import React from 'react';
import { Wrapper, Header } from '../styles/styles';
import { default as triangle } from '../triangle.svg';
import Form from './Form';

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
