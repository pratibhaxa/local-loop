import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Welcome = () => {
  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Welcome!</Heading>
        <Text>Your signup was successful.</Text>
      </VStack>
    </Box>
  );
};

export default Welcome;
