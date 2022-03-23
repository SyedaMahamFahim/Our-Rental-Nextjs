import { Heading, Box, Text, Center,useColorModeValue } from "@chakra-ui/react";

export default function SectionTitle({ title, desc }) {
  return (
    <Center >
      <Box maxW="32rem">
        <Heading
          mb={4}
          textAlign={"center"}
          fontWeight="semibold"
          lineHeight="shorter"
          fontSize="4rem"
          color={useColorModeValue("black.500", "black.400")}
        >
          {title}
        </Heading>
        <Text fontSize="xl" textAlign={"center"}>
          {desc}
        </Text>
      </Box>
    </Center>
  );
}
