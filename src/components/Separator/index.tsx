import { Flex, Box } from '@chakra-ui/react';

export default function Separator() {
  return (
    <Flex w="100%" my="20" justify="center">
      <Box w="90px" h="2px" bg="gray.700" />
    </Flex>
  );
}
