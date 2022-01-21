import { FC } from "react";
import styled from "styled-components";

const StyledGlassWrapper = styled.div`
  background: rgba(196, 196, 196, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  border-radius: 15px;
  min-width: 800px;
  padding: 60px 75px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  
  @media (max-width: 990px) {
    min-width: unset;
    margin: 0 25px;
  }

  @media (max-width: 600px) {
    padding: 60px 10px 30px;
    width: 100%;
  }
`;

const StyledContentContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 690px) {
    width: 100%;
  }
`;

export const GlassWrapper: FC = ({ children }) => {
  return (
    <StyledGlassWrapper>
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledGlassWrapper>
  );
};
