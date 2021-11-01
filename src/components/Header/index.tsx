import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

export default function Header() {
  // const { asPath } = useRouter();
  // const isHomePage = asPath === '/';
  const isHomePage = true;

  return (
    <Flex
      as="header"
      w="100%"
      h={['50px', '100px']}
      mx="auto"
      alignItems="center"
      justify="center"
      px="1rem"
    >
      <Grid
        w="100%"
        h="100%"
        mx="auto"
        maxW="1160px"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
        alignSelf="start"
      >
        {!isHomePage && (
          // <Link href="/">
          <a>
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </a>
          // </Link>
        )}
        <Image
          src="/logo.svg"
          w="186px"
          justifySelf="center"
          gridColumn="2"
          alt="Logo"
        />
      </Grid>
    </Flex>
  );
}
