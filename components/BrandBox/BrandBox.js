import React from "react";
import { Box, SimpleGrid,Container } from "@chakra-ui/react";
import Image from "next/dist/client/image";
import BrandsData from "../../StaticData/BrandsData/BrandsData";

const BrandBox = () => {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4}>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        {
          BrandsData.map((val)=>{
            return(
              <>
              <Box key={val.id}>
              <Image src={val.img} alt={val.title} mb={2} width={"80px"} height={"30px"} />
              </Box>
              </>
            )
          }  )
        }

      </SimpleGrid>
    </Box>
  );
};

export default BrandBox;
