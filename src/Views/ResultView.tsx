//@ts-ignore
import { useBreakpoints } from "react-breakpoints-hook";

import { RootState } from "../redux/store";

import { useNavigate } from "react-router-dom";

import { ProgressBar } from "../components/ProgressBar";
import { StyledButton, StyledText } from "../components/styledComponents";
import { BREAKPOINTS, COLORS } from "../conts";
import { reset } from "../redux/slicesReducer";
import { setPage } from "../redux/pagesReducer";
import { useDispatch, useSelector } from "react-redux";

export const ResultView = () => {
  const navigate = useNavigate();
  const questions = useSelector((state: RootState) => state.questions.slides);
  const dispatch = useDispatch();
  const { md } = useBreakpoints(BREAKPOINTS);

  return (
    <>
      <StyledText color={COLORS.WHITE} m="0 0 45px" size={md ? "48px" : "24px"}>
        Your sentence is:
      </StyledText>

      <StyledText color={COLORS.GREEN} m="0 0 70px" size={md ? "48px" : "24px"}>
        {`${questions[0].answer} ${questions[1].answer} ${questions[3].answer} ${questions[2].answer}`}
      </StyledText>

      <StyledButton
        onClick={() => {
          dispatch(reset());
          dispatch(setPage({ id: 0 }));
          navigate("/");
        }}
      >
        <StyledText
          color={COLORS.GREEN}
          shadow={false}
          size={md ? "48px" : "24px"}
        >
          Play again
        </StyledText>
      </StyledButton>

      <ProgressBar questions={questions} />
    </>
  );
};
