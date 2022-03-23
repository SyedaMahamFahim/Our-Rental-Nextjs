import {
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Heading,
  Text,
  Icon,
} from "@chakra-ui/react";
import {AiOutlineSearch} from 'react-icons/ai'
import {FaHandsHelping} from 'react-icons/fa'
import {MdArtTrack} from 'react-icons/md'
import SectionTitle from "../SectionTitle/SectionTitle";

export default function HowItsWork() {
  const Feature = (props) => {
    return (
      <Box >
        <Flex
          alignItems="center"
          justifyContent="center"
          w={100}
          h={100}
          mb={4}
          rounded="full"
          color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
        >
          <Icon
            boxSize={55}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <Heading
          as="h3"
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </Heading>
        <Text fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </Text>
      </Box>
    );
  };
  return (
    <Box
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={10}
      b={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SectionTitle
        title={"How Its Work"}
        desc={
          "Facilities for You and Your Family Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
      />

      <Box
        my={10}
        px={8}
        py={20}
        mx={{ sm: 2, md: 3, lg: 20 }}
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="red"
            title="Research Suburbs"
            icon={
              <AiOutlineSearch/>
            }
          >
            Hand crafted dashboards for everything from Recurring Revenue to
            Customer Churn.
          </Feature>

          <Feature
            color="pink"
            title="Instant Valution"
            icon={
              <FaHandsHelping/>
            }
          >
            Your central hub that helps you see, and react to, absolutely
            everything that’s happening.
          </Feature>

          <Feature
            color="yellow"
            title="Track Property"
            icon={
             <MdArtTrack/>
            }
          >
            Stay informed with daily, weekly, or monthly reports on all your
            insights data.
          </Feature>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
