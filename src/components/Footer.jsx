import { ReactNode } from 'react';
import Logo from "../images/hyno/Group 11654.png"
import { extendTheme } from '@chakra-ui/react'

import {
  Box,
  Button,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const theme = extendTheme({
  textStyles: {
  
    Link : {
      fontSize: ['3px', '4px'],
      fontWeight: 'light',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
})

const ListHeader = ({ children }: { children: ReactNode }) => {
  
  return (
    <Text fontWeight="light"  fontSize={'16px'} mb={2} fontFamily={"Gilroy-Bold"}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <div>
    <Box mt="0px" 
      bg={useColorModeValue('black', 'black')}
      color={useColorModeValue('gray', 'gray')}>
      <Container as={Stack} maxW={'9xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box ml={10}>
              <img src={Logo}/>
            </Box>
            <Text fontSize={'s'}>
                 
            </Text>

          </Stack>
          <div className='Layer-img'>  

          
            <div className='ISO-Images'> 
              <img src="https://www.hyno.co/img/iso.png" alt="" />
              <img src="https://www.hyno.co/img/iso2.jpeg" alt="" />

              <img src="https://www.hyno.co/img/iso3.jpeg" alt="" />

            </div>
            </div>

          <Stack align={'flex-start'} >
            <ListHeader>Home</ListHeader>
            <Link  textStyle="h1" href={'#'} layerStyle='selected'>About us</Link>
            <Link href={'#'} fontWeight={'Light'} color={"gray"}>Our clints</Link>
            <Link href={'#'}>Our thoughts</Link>
            <Link href={'#'}>Blogs</Link>
            <Link href={'#'}>Careers</Link>
            <Button color={"black"}>WE ARE HIRING</Button>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link href={'#'}>Product development</Link>
            <Link href={'#'}>Build tech forms</Link>
            <Link href={'#'}>Hire Tech Taient</Link>
           
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Verticals</ListHeader>
            <Link href={'#'}>App development</Link>
            <Link href={'#'}>Data science</Link>
            <Link href={'#'}>Product Engineering</Link>
            <Link href={'#'}>Digital transformation</Link>
            <Link href={'#'}>Devops</Link>
            <Link href={'#'}>Quality Assurance</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Quick Links</ListHeader>
            <Link href={'#'}>Case Studies</Link>
            <Link href={'#'}>Culture</Link>
            <Link href={'#'}>News</Link>
            <Link href={'#'}>FAQ's</Link>
           
          </Stack>
        </SimpleGrid>
      </Container>
      <Box></Box>
    </Box>
    </div>
  );
}