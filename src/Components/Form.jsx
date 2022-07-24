import React, { useState } from 'react';
import { StyledForm, InputGroup, Alert, StyledButton } from '../styles/styles';

const Form = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  const handleCalc = (e) => {
    e.preventDefault();
    if (!sideA || !sideB) {
      setError(true);
      return setResult(null);
    } else {
      const result = Math.round(Math.sqrt(sideA * sideA + sideB * sideB));
      setError(false);
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
      {error ? <Alert error>Insira pelo menos dois valores.</Alert> : null}
      {result ? (
        <Alert>
          O valor da hipotenusa é: <b>{result}</b>
        </Alert>
      ) : null}
      <StyledButton>Calcular</StyledButton>
    </StyledForm>
  );
};

export default Form;
