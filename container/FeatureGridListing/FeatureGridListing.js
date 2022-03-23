import {
    Box,
    VStack,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    Heading,
    useColorModeValue,
    Text
  } from '@chakra-ui/react';
import ColoredBtn from '../../components/Buttons/ColoredBtn';
import PropertySlider from '../../components/PropertySlider/PropertySlider';
  


  
  export default function FeatureGridListing() {
    return (
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
            <Heading
          mb={4}
          textAlign={"center"}
          fontWeight="semibold"
          lineHeight="shorter"
          fontSize="4rem"
          color={useColorModeValue("black.500", "black.400")}
        >
        All Propteries
        </Heading>
              <ColoredBtn text={"View All Properties"} url={"/properties-list"}/>
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
             
              <Text fontSize="xl" textAlign={"center"}>
              Provide your customers a story they would enjoy keeping in mind
                the objectives of your website. Pay special attention to the tone
                of voice.
                ay special attention to the tone
                of voice.ay special attention to the tone
                of voice.
        </Text>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <PropertySlider/>
        {/* <PropertyBox/> */}
      </Box>
    );
  }