import React from "react";

import { Button, Link } from "@chakra-ui/react";
const ColoredBtn = ({text,url}) => {
  return (
  <Link href={url}>
    <Button
      rounded={"full"}
      size={"lg"}
      fontWeight={"normal"}
      px={6}
      colorScheme={"red"}
      bg={"red.300"}
      _hover={{ bg: "red.500" }}
      
    >
      {text}
    </Button>
    </Link>
   
  );
};

export default ColoredBtn;
