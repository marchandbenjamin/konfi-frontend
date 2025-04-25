import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Recipes from './components/Recipes';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
