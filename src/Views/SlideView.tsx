import { useNavigate } from "react-router-dom";

import {
  Button,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import { dicrease, increase } from "../redux/pagesReducer";
import { setAnswer } from "../redux/slicesReducer";

import { RootState } from "../redux/store";

import { useDispatch, useSelector } from "react-redux";

import { ProgressBar } from "../components/ProgressBar";

export const SlideView = () => {
  const navigate = useNavigate();

  const questions = useSelector((state: RootState) => state.questions.slides);
  const page = useSelector((state: RootState) => state.pages.page);
  const dispatch = useDispatch();

  const md = useBreakpointValue({ md: true }) ?? false;

  const answer = questions[page].answer ?? "";

  const LeftButton = () => (
    <Button
      border="1px solid"
      borderColor="white.300"
      bg="gray.700"
      p={6}
      w={{ base: "50%", md: "auto" }}
      maxW={{ base: "none", md: 6 }}
      disabled={!questions[page - 1]?.question}
      onClick={() => dispatch(dicrease())}
    >
      <ChevronLeftIcon w={10} h={10} color="white.50" />
    </Button>
  );

  const RightButton = () => (
    <Button
      border="1px solid"
      borderColor="white.300"
      bg="gray.700"
      p={6}
      w={{ base: "50%", md: "auto" }}
      maxW={{ base: "none", md: 6 }}
      disabled={
        !questions[page + 1]?.question &&
        !(
          questions.filter((item) => item.isValid).length >
          questions.length - 1
        )
      }
      onClick={() => {
        !questions[page + 1]?.question
          ? navigate("/result")
          : dispatch(increase());
      }}
    >
      <ChevronRightIcon w={10} h={10} color="white.50" />
    </Button>
  );

  return (
    <>
      <Text color="white.50" mb={6} variant="shadow" size="5xl400">
        Question:
      </Text>

      <Text
        color="green.200"
        mb={{ base: 10, sm: 16 }}
        variant="shadow"
        size="5xl400"
      >
        {questions[page].question}
      </Text>

      <Stack
        w="100%"
        justifyContent="space-between"
        align="center"
        gap={5}
        spacing={0}
        flexDir={{ md: "row", base: "column" }}
        mb={{ base: 45, sm: 90 }}
      >
        {md ? (
          <>
            <LeftButton />

            <Input
              h={50}
              value={answer}
              onChange={(e) =>
                dispatch(
                  setAnswer({ answer: e.target.value, id: questions[page].id })
                )
              }
            />

            <RightButton />
          </>
        ) : (
          <>
            <Input
              h={50}
              value={answer}
              onChange={(e) =>
                dispatch(
                  setAnswer({ answer: e.target.value, id: questions[page].id })
                )
              }
            />

            <HStack w="100%" spacing={4}>
              <LeftButton />

              <RightButton />
            </HStack>
          </>
        )}
      </Stack>

      <ProgressBar />
    </>
  );
};
