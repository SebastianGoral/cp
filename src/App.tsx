import React from "react";
import styled from "@emotion/styled";
import { Panel } from "./_Components/Panel";
const Scene = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;
function App() {
  return (
    <Scene>
      <Panel />
    </Scene>
  );
}

export default App;
