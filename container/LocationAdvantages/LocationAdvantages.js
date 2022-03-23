import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import LocationAdvantagesBox from '../../components/LocationAdvantagesBox/LocationAdvantagesBox'


const LocationAdvantages = () => {
 
  return (
    <Box p={10} b={5} w="auto" justifyContent="center" alignItems="center" mt={9} id="location-advantages">
      <SectionTitle
        title={"Location Advantages"}
        desc={
          "The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect."
        }
      />

      <Flex flexWrap="wrap" justifyContent="center" alignItems="center" b>
      <LocationAdvantagesBox/>
      </Flex>
    </Box>
  );
};



export default LocationAdvantages;
