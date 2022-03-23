import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimonialsSlider from "../../components/TestimonialsSlider/TestimonialsSlider";



const Testimonials = () => {
 
  return (
    <Box p={10} b={5} w="auto" justifyContent="center" alignItems="center" mt={9} bg={useColorModeValue("#F9FAFB", "gray.600")} id="testimonials">
      <SectionTitle
        title={"Our Client Review"}
        desc={
          "The leading real estate marketplace. Search millions of for-sale and rental listings, compare home values and connect."
        }
      />
      <TestimonialsSlider/>
     
    </Box>
  );
};



export default Testimonials;
