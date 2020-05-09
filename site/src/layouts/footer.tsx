import * as React from 'react';
import { Box, Flex, Text } from '@chakra-ui/core/dist';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <Box bg="gray.600" shadow="sm" py={1}>
      <Flex
        height="100%"
        maxW="containers.xl"
        mx="auto"
        alignItems="center"
        justifyContent="flex-end"
        color="white"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Text>Footer</Text>
      </Flex>
    </Box>
  );
};
