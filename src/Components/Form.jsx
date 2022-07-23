import React, { useState } from 'react';
import styled from 'styled-components';
import { variables } from '../styles/variabes';
import Button from './Button';

const StyledForm = styled.form`
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

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Result = styled.div`
  color: hsl(151, 55%, 50%);
`;

const Form = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [result, setResult] = useState(0);

  const handleCalc = (e) => {
    e.preventDefault();
    const result = Math.round(Math.sqrt(sideA * sideA + sideB * sideB));
    return setResult(result);
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
        <Result>
          O valor da hipotenusa é: <b>{result}</b>.
        </Result>
      ) : null}
      <Button>Calcular</Button>
    </StyledForm>
  );
};

export default Form;
