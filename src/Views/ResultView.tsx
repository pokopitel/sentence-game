import { Button, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../redux/store";

import { setPage } from "../redux/pagesReducer";
import { reset } from "../redux/slicesReducer";

import { ProgressBar } from "../components/ProgressBar";

export const ResultView = () => {
  const navigate = useNavigate();

  const questions = useSelector((state: RootState) => state.questions.slides);
  const dispatch = useDispatch();
  return (
    <>
      <Text color="white.50" mb={22} variant="shadow" size="5xl400">
        Your sentence is:
      </Text>

      <Text
        color="green.200"
        mb={{ base: 6, sm: 16 }}
        variant="shadow"
        size="5xl400"
        wordBreak="break-word"
      >
        {[0, 1, 3, 2].map((item) => questions[item].answer + " ")}
      </Text>

      <Button
        p={{ base: "30px 65px", sm: "40px 70px", md: "55px 85px" }}
        mb={{ base: 42, sm: 100 }}
        onClick={() => {
          dispatch(reset());
          dispatch(setPage({ id: 0 }));
          navigate("/");
        }}
      >
        <Text color="green.200" size="5xl400">
          Play again
        </Text>
      </Button>

      <ProgressBar />
    </>
  );
};
