import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, List, ListItem } from '@chakra-ui/react';
import { getRecipes } from '../services/recipeService.js'; 

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
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
          recipes.map((recipe, index) => (
            <ListItem key={index}>{recipe.title}</ListItem>
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
