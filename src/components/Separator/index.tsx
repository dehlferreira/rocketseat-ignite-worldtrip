import { Flex, Box } from '@chakra-ui/react';

export default function Separator() {
  return (
    <Flex w="100%" my={['9', '20']} justify="center">
      <Box w={['60px', '90px']} h="2px" bg="gray.700" />
    </Flex>
  );
}
