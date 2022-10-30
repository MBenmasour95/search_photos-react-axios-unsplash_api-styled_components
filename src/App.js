import styled from "styled-components";
import { Search, Photos } from "./components";

const Wrapper = styled.div`
  height: 100%;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 580px) {
    padding: 15px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Search />
      <Photos />
    </Wrapper>
  );
}

export default App;
