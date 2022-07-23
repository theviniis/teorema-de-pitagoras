import React, { useState } from 'react';
import { StyledForm, InputGroup, Result, Error } from '../styles/styles';
import Button from './Button';

const Form = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [result, setResult] = useState(0);

  const handleCalc = (e) => {
    e.preventDefault();
    const result = Math.round(Math.sqrt(sideA * sideA + sideB * sideB));

    if (!sideA || !sideB) {
      return setResult(null);
    } else {
      return setResult(result);
    }
  };

  return (
    <StyledForm onSubmit={handleCalc}>
      <InputGroup>
        <input
          type='number'
          id='Lado A'
          placeholder='Lado A'
          value={sideA}
          onChange={({ target }) => setSideA(target.value)}
        />
        <input
          type='number'
          id='Lado B'
          placeholder='Lado B'
          value={sideB}
          onChange={({ target }) => setSideB(target.value)}
        />
      </InputGroup>
      {result ? (
        <Result>O valor da hipotenusa é: {result}.</Result>
      ) : (
        <Error>Insira pelo menos dois valores.</Error>
      )}
      <Button>Calcular</Button>
    </StyledForm>
  );
};

export default Form;
