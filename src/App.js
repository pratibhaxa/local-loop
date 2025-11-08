import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Signup from './Signup';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
        <Box borderWidth={1} px={4} width="full" maxWidth="500px" borderRadius={4} textAlign="center" boxShadow="lg">
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
