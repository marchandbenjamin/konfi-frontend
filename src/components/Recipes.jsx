import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, List, ListItem } from '@chakra-ui/react';
import { getAllRecipes } from '../services/recipeService.js';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes()
      .then((data) => setRecipes(data))
      .catch((error) => {
        console.error('Erreur lors de la récupération des recettes:', error);
      });
  }, []);

  return (
    <Box p={6}>
      <Heading mb={4}>Liste des recettes</Heading>
      <List>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <ListItem key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                <Button variant="link" colorScheme="teal">
                  {recipe.title}
                </Button>
              </Link>
            </ListItem>
          ))
        ) : (
          <ListItem>Aucune recette disponible.</ListItem>
        )}
      </List>
      <Link to="/">
        <Button colorScheme="teal" mt={4}>
          Retour à l'accueil
        </Button>
      </Link>
    </Box>
  );
}

export default Recipes;
