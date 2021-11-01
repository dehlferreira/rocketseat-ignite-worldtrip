import Head from 'next/head';
import { Flex, Heading } from '@chakra-ui/react';

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import Slide from '../components/Slide';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Separator from '../components/Separator';
import Categories from '../components/Categories';

import { getPrismicClient } from '../services/prismic';

type Posts = {
  uid: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImageUrl: string;
};

interface PostsProps {
  posts: Posts[];
}

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Woldtrip | Home</title>
      </Head>

      {/* <Header /> */}

      {/* <Banner /> */}
      {/* <Categories /> */}
      {/* <Separator /> */}

      {/* <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading> */}

      {/* <Slide posts={posts} /> */}
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {},
  );

  // const posts = postResponse.results.map(post => {
  //   return {
  //     uid: post?.uid,
  //     bannerTitle: RichText.asText(post?.data?.banner_title),
  //     bannerSubtitle: RichText.asText(post?.data?.banner_subtitle),
  //     // bannerImageUrl: post?.data?.banner_image?.url,
  //   };
  // });

  return {
    props: {
      // posts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
