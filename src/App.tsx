import { Routes, Route } from "react-router-dom";

import styled from "styled-components";

import { GlassWrapper } from "./components/GlassWrapper";

import { StyledText } from "./components/styledComponents";
import { StartView } from "./Views/StartView";
import { SlideView } from "./Views/SlideView";
import { ResultView } from "./Views/ResultView";

const StyledApp = styled.div`
  background-color: #1c1d2e;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: Kanit;
  font-weight: SemiBold;
  letter-spacing: 0.065em !important;
  overflowX: hidden;
`;

const StyledTriangles = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url(/images/triangles.svg);
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

export const App = () => {
  return (
    <StyledApp>
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#1c1d2e",
        }}
      />
      <StyledTriangles />
      <GlassWrapper>
        <Routes>
          <Route path="/" element={<StartView />}></Route>

          <Route path="/slide-question" element={<SlideView />}></Route>

          <Route path="/result" element={<ResultView />}></Route>
        </Routes>

        <StyledText color="rgba(255, 255, 255, 0.6)" weight="Light" size="18px">
          Created by Nikita Lazovsky
        </StyledText>
      </GlassWrapper>
    </StyledApp>
  );
};
