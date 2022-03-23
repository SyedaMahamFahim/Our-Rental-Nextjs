import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex,useColorModeValue,Text} from "@chakra-ui/react";
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../../images/hero-section.png';

const PropertyBox= ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } } , boxWidth) => (
  <Link href={`/property/${externalID}`} passHref  m={20}>
    <Flex flexWrap='wrap' w={'320px'} p='5'm={10} pt='10px' justifyContent='flex-center' cursor='pointer' 
     bg={useColorModeValue("white", "gray.800")}
    shadow="xl"
    mt={5} 
    
  >
      <Box >
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={'320px'} height={260} pt={5} />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
        {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default PropertyBox;