import * as React from 'react';
import { Layout } from '../layouts/layout';
import { Text } from '@chakra-ui/core/dist';

interface IndexProps {}

export default (props: IndexProps) => {
  return (
    <Layout>
      <Text>Let's build something</Text>
    </Layout>
  );
};
