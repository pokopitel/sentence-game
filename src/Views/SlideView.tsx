import styled from "styled-components";

//@ts-ignore
import { useBreakpoints } from "react-breakpoints-hook";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { StyledText } from "../components/styledComponents";
import { ProgressBar } from "../components/ProgressBar";

import { BREAKPOINTS, COLORS } from "../conts";
import { dicrease, increase } from "../redux/pagesReducer";
import { useNavigate } from "react-router-dom";
import { setAnswer } from "../redux/slicesReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const StyledChevronButton = styled.button<{
  md: boolean;
  m?: string;
  disabled?: boolean;
}>`
  background: rgba(75, 75, 75, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ md }) => (md ? "unset" : "100%")};
  margin: ${({ m }) => m ?? "unset"};
  ${({ disabled }) => disabled && "opacity:0.5"}
`;

export const StyledInput = styled.input<{ md: boolean }>`
  background: rgba(75, 75, 75, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  padding: 15px;
  width: ${({ md }) => (md ? "100%" : "none")};
  margin: ${({ md }) => (md ? "0 20px" : "0 0 20px")};
  color: ${COLORS.WHITE};
`;

export const SlideView = () => {
  const navigate = useNavigate();
  const questions = useSelector((state: RootState) => state.questions.slides);
  const page = useSelector((state: RootState) => state.pages.page);
  const dispatch = useDispatch();

  const { md } = useBreakpoints(BREAKPOINTS);

  return (
    <>
      <StyledText color={COLORS.WHITE} m="0 0 25px" size={md ? "48px" : "24px"}>
        Question:
      </StyledText>
      <StyledText color={COLORS.GREEN} m="0 0 70px" size={md ? "48px" : "24px"}>
        {questions[page].question}
      </StyledText>
      <div
        style={{
          display: "flex",
          flexDirection: md ? "row" : "column",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: 90,
        }}
      >
        {md ? (
          <>
            <StyledChevronButton
              md={md}
              disabled={!questions[page - 1]?.question}
              onClick={() => dispatch(dicrease())}
            >
              <FaChevronLeft fontSize="20px" color="#FFF" />
            </StyledChevronButton>

            <StyledInput
              md={md}
              value={questions[page].answer}
              onChange={(e) =>
                dispatch(
                  setAnswer({ answer: e.target.value, id: questions[page].id })
                )
              }
            />

            <StyledChevronButton
              md={md}
              disabled={
                !questions[page + 1]?.question &&
                !(questions.filter((item) => item.isValid).length > 0)
              }
              onClick={() => {
                !questions[page + 1]?.question
                  ? navigate("/result")
                  : dispatch(increase());
              }}
            >
              <FaChevronRight fontSize="20px" color="#FFF" />
            </StyledChevronButton>
          </>
        ) : (
          <>
            <StyledInput
              md={md}
              value={questions[page].answer}
              onChange={(e) =>
                dispatch(
                  setAnswer({ answer: e.target.value, id: questions[page].id })
                )
              }
            />
            <div style={{ display: "flex" }}>
              <StyledChevronButton
                md={md}
                disabled={!questions[page - 1]?.question}
                onClick={() => dispatch(dicrease())}
                m="0 15px 0 0"
              >
                <FaChevronLeft fontSize="20px" color="#FFF" />
              </StyledChevronButton>

              <StyledChevronButton
                md={md}
                disabled={
                  !questions[page + 1]?.question &&
                  !(questions.filter((item) => item.isValid).length > 0)
                }
                onClick={() => {
                  !questions[page + 1]?.question
                    ? navigate("/result")
                    : dispatch(increase());
                }}
              >
                <FaChevronRight fontSize="20px" color="#FFF" />
              </StyledChevronButton>
            </div>
          </>
        )}
      </div>

      <ProgressBar questions={questions} />
    </>
  );
};
