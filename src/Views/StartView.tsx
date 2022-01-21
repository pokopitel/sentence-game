//@ts-ignore
import { useBreakpoints } from "react-breakpoints-hook";

import { useNavigate } from "react-router-dom";

import { StyledButton, StyledText } from "../components/styledComponents";

import { BREAKPOINTS, COLORS } from "../conts";

export const StartView = () => {
  const navigate = useNavigate();
  const { md } = useBreakpoints(BREAKPOINTS);

  const onClickStart = () => {
    navigate("/slide-question");
  };

  return (
    <>
      <StyledText color={COLORS.WHITE} m="0 0 18px" size={md ? "48px" : "24px"}>
        Sentence game for
      </StyledText>

      <StyledText
        color={COLORS.GREEN}
        m="0 0 120px"
        size={md ? "48px" : "24px"}
      >
        ThinkEasy
      </StyledText>

      <StyledButton onClick={onClickStart}>
        <StyledText
          shadow={false}
          color={COLORS.GREEN}
          weight="Regular"
          size={md ? "48px" : "24px"}
        >
          Start
        </StyledText>
      </StyledButton>
    </>
  );
};
