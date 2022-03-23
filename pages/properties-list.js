import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import SearchFilters from "../components/SearchFilters/SearchFilters";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import PropertyBox from "../components/PropertyBox/PropertyBox";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { BsFilter } from "react-icons/bs";


export default function PropertiesList({ properties }) {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Properties List</title>
        <meta name="description" content="Properties list page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Box>
          <Flex
            onClick={() => setSearchFilters(!searchFilters)}
            cursor="pointer"
            bg="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="black"
            fontSize="lg"
            justifyContent="center"
            alignItems="center"
          >
            <Text>Search Property By Filters</Text>
            <Icon paddingLeft="2" w="7" as={BsFilter} />
          </Flex>
          {searchFilters && <SearchFilters />}
          <Text fontSize="2xl" p="4" fontWeight="bold">
            Properties {router.query.purpose}
          </Text>
        </Box>
    
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
      >
        {properties.map((property) => (
          <PropertyBox property={property} key={property.id} />
        ))}

       
      </Flex>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}
