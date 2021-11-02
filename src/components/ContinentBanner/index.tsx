import { Flex, Heading } from '@chakra-ui/react';

interface ContinentBanner {
  bannerUrl: string;
  title: string;
}

export default function ContinentBanner({ bannerUrl, title }: ContinentBanner) {
  return (
    <Flex
      w="100%"
      h="500px"
      pl="36"
      pb="16"
      bgImage={`url(${bannerUrl})`}
      bgPosition="100% 30%"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="flex-end"
    >
      <Heading fontSize="5xl" color="gray.100" fontWeight="500">
        {title}
      </Heading>
    </Flex>
  );
}
