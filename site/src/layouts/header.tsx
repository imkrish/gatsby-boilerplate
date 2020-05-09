import * as React from 'react';
import { Box, Flex, Button, Heading } from '@chakra-ui/core/dist';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <Box bg="twitter.900" shadow="sm" py={{ base: 4, lg: 3 }}>
      <Flex
        height="100%"
        maxW="containers.xl"
        mx="auto"
        alignItems="center"
        justifyContent="space-between"
        color="white"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Heading
          as="h1"
          fontSize="lg"
          letterSpacing={0.5}
          mb={{ base: 4, lg: 0 }}
        >
          Header
        </Heading>

        <Button variantColor="twitter" variant="outline">
          Button
        </Button>
      </Flex>
    </Box>
  );
};
