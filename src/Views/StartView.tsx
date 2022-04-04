import { Button, Text } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export const StartView = () => {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate("/slide-question");
  };

  return (
    <>
      <Text color="white.50" mb={4} variant="shadow" size="5xl300">
        Sentence game for
      </Text>

      <Text
        color="green.200"
        mb={{ base: 16, md: 28 }}
        variant="shadow"
        size="5xl300"
      >
        ThinkEasy
      </Text>

      <Button
        p={{ base: "30px 65px", sm: "50px 80px" }}
        mb={{ base: 30, md: 100 }}
        onClick={onClickStart}
      >
        <Text color="green.200" size="5xl300">
          Start
        </Text>
      </Button>
    </>
  );
};
