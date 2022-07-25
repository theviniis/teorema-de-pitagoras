import React from 'react';
import { Card, CardHeader, Triangle } from '../styles/styles';
import { default as triangle } from '../triangle.svg';
import Form from './Form';

const Calculator = () => {
  return (
    <Card>
      <CardHeader>
        Teorema de Pitágoras <br /> Calculadora
      </CardHeader>
      <Triangle
        src={triangle}
        alt='Imagem de um triângulo retângulo'
        title='Imagem de um triângulo retângulo'
      />
      <p>
        Insira dois lados de um triângulo-retângulo para calcular o valor da
        hipotenusa.
      </p>
      <Form />
    </Card>
  );
};

export default Calculator;
