import { Box, HStack } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../redux/pagesReducer";

import { RootState } from "../redux/store";

export const ProgressBar = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.questions.slides);

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
    <HStack
      w={{ base: "100%", sm: 300 }}
      h={2}
      border="1px solid"
      borderColor="white.300"
      borderRadius={15}
      mb={{ base: 10, sm: 20 }}
      spacing={0}
    >
      {questions.map((item, index) => (
        <Box
          onClick={() => dispatch(setPage({ id: item.id }))}
          key={item.id}
          width={`${100 / questions.length}%`}
          h={2}
          borderRight="1px solid"
          borderColor={index !== questions.length - 1 ? "white.300" : "none"}
          borderRadius={getBorderRadius(index)}
          bg={item.isValid ? "green.200" : "transparent"}
        />
      ))}
    </HStack>
  );
};
