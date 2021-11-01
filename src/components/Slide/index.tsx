import { Flex, Heading, Text } from '@chakra-ui/react';

// import Link from 'next/link';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

type Post = {
  uid: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerImage: string;
};

interface SlideProps {
  posts: Post[];
}

export default function Slide({ posts }: SlideProps) {
  return (
    <Flex
      w="100%"
      h={['250px', '450px']}
      maxW="1240px"
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {posts?.map(post => (
          <SwiperSlide key={post?.uid}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage={`url(${post?.bannerImage})`}
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              {/* <Link href="#"> */}
              <a href="https://www.google.com.br">
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  {post?.bannerTitle}
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  {post?.bannerSubtitle}
                </Text>
              </a>
              {/* </Link> */}
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
