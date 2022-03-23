import React from "react";
import { Button } from "@chakra-ui/react";

const LightColorBtn = () => {
  return (
    <Button
      rounded={"full"}
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
    >
      How It Works
    </Button>
  );
};

export default LightColorBtn;
