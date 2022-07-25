import Calculator from './Components/Calculator';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      {/* Aplly global styles from styled-components */}
      <GlobalStyles />
      <Calculator />
    </>
  );
}

export default App;
