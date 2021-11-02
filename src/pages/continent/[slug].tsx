import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import ContinentBanner from '../../components/ContinentBanner';

interface ContinentProps {
  continent: {
    uid: string;
    continentBannerUrl: string;
    continentTitle: string;
    continentContent: string;
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>Woldtrip | Post</title>
      </Head>

      <ContinentBanner
        bannerUrl={continent.continentBannerUrl}
        title={continent.continentTitle}
      />
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient();
  const { slug } = params;

  const response = await prismic.getByUID('posts', String(slug), {});

  const continent = {
    uid: response.uid,
    continentBannerUrl: response?.data?.post_image?.url,
    continentTitle: RichText.asText(response?.data?.post_title),
    continentContent: RichText.asText(response?.data?.post_content),
  };

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60, // 1 hour
  };
};
