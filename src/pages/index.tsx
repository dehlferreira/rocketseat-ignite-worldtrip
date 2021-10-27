import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Separator from '../components/Separator';
import Slide from '../components/Slide';

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Woldtrip | Home</title>
      </Head>

      <Header />
      <Banner />
      <Categories />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slide />
    </Flex>
  );
}
