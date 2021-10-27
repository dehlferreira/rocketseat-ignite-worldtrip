import { Flex, Heading, Text } from '@chakra-ui/react';

import Link from 'next/link';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const continents = [
  {
    id: '1',
    title: 'África',
    text: 'O continente mais antigo',
    image: "url('/temp/europa.png')",
    url: 'https://www.google.com',
  },
  {
    id: '2',
    title: 'Europa',
    text: 'O continente mais antigo',
    image: "url('/temp/europa.png')",
    url: 'https://www.google.com',
  },
  {
    id: '3',
    title: 'Ásia',
    text: 'O continente mais antigo',
    image: "url('/temp/europa.png')",
    url: 'https://www.google.com',
  },
  {
    id: '4',
    title: 'América',
    text: 'O continente mais antigo',
    image: "url('/temp/europa.png')",
    url: 'https://www.google.com',
  },
];

export default function Slide() {
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
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              bgImage="url('/temp/europa.png')"
              bgPosition="100% 30%"
              bgRepeat="no-repeat"
              bgSize="cover"
              textAlign="center"
            >
              <Link href={continent.url}>
                <a>
                  <Heading
                    fontSize={['3xl', '4xl', '5xl']}
                    color="gray.100"
                    fontWeight="bold"
                  >
                    {continent.title}
                  </Heading>
                  <Text
                    fontWeight="bold"
                    color="gray.300"
                    fontSize={['0.8rem', '1xl', '2xl']}
                    mt={['2', '4']}
                  >
                    {continent.text}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
