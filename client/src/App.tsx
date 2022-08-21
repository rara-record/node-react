import styled from 'styled-components';

import { Chart, Header } from './components';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Chart />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
