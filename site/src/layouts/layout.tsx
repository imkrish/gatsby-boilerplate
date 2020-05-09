import * as React from 'react';
import { Helmet } from 'react-helmet';
import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Box, Flex, Text } from '@chakra-ui/core/dist';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Helmet
        title="Site Title"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <Box height="100%" maxW="containers.xl" mx="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
};
