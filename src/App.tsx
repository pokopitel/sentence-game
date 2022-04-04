import { Routes, Route } from "react-router-dom";

import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/react";

import { StartView } from "./Views/StartView";
import { SlideView } from "./Views/SlideView";
import { ResultView } from "./Views/ResultView";

export const App = () => {
  return (
    <HStack
      maxW="100vw"
      minH="100vh"
      minW={320}
      py={4}
      bg="purple.800"
      justifyContent="center"
    >
      <Box
        backgroundImage="url(/images/triangles.svg)"
        backgroundSize="contain"
        transform={{ base: "rotate(90deg)", md: "none" }}
        position="fixed"
        backgroundRepeat="no-repeat"
        w={{ base: "1000px", lg: "100vw" }}
        h={{ base: "1000px", lg: "100vh" }}
      />

      <Flex
        bg="glass.200"
        border="1px solid"
        borderColor="white.300"
        boxShadow="0px 0px 30px rgba(0, 0, 0, 0.3)"
        backdropFilter="blur(12px)"
        borderRadius={15}
        minW={300}
        maxW={{ base: "unset", sm: "800px" }}
        p={{ base: "30px 30px 5px", sm: "60px 75px 30px" }}
        w="calc(100% - 70px)"
        flexDir="column"
        align="center"
      >
        <Routes>
          <Route path="/" element={<StartView />}></Route>

          <Route path="/slide-question" element={<SlideView />}></Route>

          <Route path="/result" element={<ResultView />}></Route>
        </Routes>

        <Text color="white.200" size="lg400">
          Created by Nikita Lazovsky
        </Text>
      </Flex>
    </HStack>
  );
};
