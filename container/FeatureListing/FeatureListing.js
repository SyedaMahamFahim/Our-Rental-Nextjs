import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import PropertyBox from "../../components/PropertyBox/PropertyBox";



const FeatureListing = () => {
 
  return (
    <Box p={10} b={5} w="auto" justifyContent="center" alignItems="center">
      <SectionTitle
        title={"Feature Listing"}
        desc={
          "The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect."
        }
      />

      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
       <PropertyBox/>
       <PropertyBox/>
       <PropertyBox/>
      </Flex>
    </Box>
  );
};



export default FeatureListing;
