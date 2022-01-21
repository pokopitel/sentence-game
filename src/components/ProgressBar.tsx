import { FC } from "react";

import { useDispatch } from "react-redux";
import { setPage } from "../redux/pagesReducer";

import styled from "styled-components";

import { Question } from "../types";
import { COLORS } from "../conts";

type ProgressBarProps = {
  questions: Question[];
};

const StyledTrackWrapper = styled.div`
  display: flex;
  width: 305px;
  height: 9px;
  background: rgba(75, 75, 75, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  margin-bottom: 80px;
`;

const StyledTrack = styled.div<{
  isValid: boolean;
  borderRadius: string;
  hasDivider: boolean;
}>`

  background-color: ${({ isValid }) =>
    isValid ? COLORS.GREEN : "transparent"};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: 25%;
  border-right: ${({ hasDivider }) =>
    hasDivider ? "1px solid rgba(75, 75, 75, 0.6)" : "none"};
`;

export const ProgressBar: FC<ProgressBarProps> = ({ questions }) => {
  const dispatch = useDispatch();

  const getBorderRadius = (index: number) => {
    if (index === 0) {
      return "15px 0 0 15px";
    }
    if (index === questions.length - 1) {
      return "0  15px 15px 0";
    }
    return "0";
  };

  return (
    <StyledTrackWrapper>
      {questions.map((item, index) => (
        <StyledTrack
          onClick={() => dispatch(setPage({ id: item.id }))}
          key={item.id}
          hasDivider={index !== questions.length - 1}
          borderRadius={getBorderRadius(index)}
          isValid={item.isValid}
        />
      ))}
    </StyledTrackWrapper>
  );
};
