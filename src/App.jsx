import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';
import Recipes from './Recipes';

function Home() {
  return (
    <Box p={6}>
      <Heading mb={4}>Bienvenue sur Konfi</Heading>
      <Link to="/recipes">
        <Button colorScheme="teal">Voir les recettes</Button>
      </Link>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
