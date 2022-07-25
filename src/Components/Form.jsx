import React, { useState } from 'react';
import { StyledForm, InputGroup, Alert, StyledButton } from '../styles/styles';

const Form = () => {
  // Defines the states of the input fields
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  // Defines the state of result math
  const [result, setResult] = useState(null);
  // Defines an error state
  const [error, setError] = useState(false);

  const handleCalc = (e) => {
    // Prevent default event
    e.preventDefault();
    // Validades if one of two input fields are empty if it is, set result to null and error state to true, returning an error message
    if (!sideA || !sideB) {
      setError(true);
      return setResult(null);
    } else {
      // If its not empty calcs the math and put the value in the result state.
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
      {/* Render the error message if there is and error message */}
      {error ? <Alert error>Insira pelo menos dois valores.</Alert> : null}
      {/* Render the message with the math results */}
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
