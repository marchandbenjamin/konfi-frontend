import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      flexDirection="column"
      p={4}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
