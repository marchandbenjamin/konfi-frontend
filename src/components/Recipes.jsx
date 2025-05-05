import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, List, ListItem, Flex } from '@chakra-ui/react';
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
    <Flex 
    justify="center" 
    align="center" 
    minH="100vh" 
    w="100%"
    p={6}>
      <Box maxW="600px" w="100%">
        <Heading mb={4} textAlign="center">
          Liste des recettes
        </Heading>
        <List spacing={3}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <ListItem key={recipe.id} textAlign="center">
                <Link to={`/recipes/${recipe.id}`}>
                  <Button variant="link" colorScheme="teal">
                    {recipe.title}
                  </Button>
                </Link>
              </ListItem>
            ))
          ) : (
            <ListItem textAlign="center">Aucune recette disponible.</ListItem>
          )}
        </List>
        <Flex justify="center" mt={6}>
          <Link to="/">
            <Button colorScheme="teal">
              Retour à l'accueil
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Recipes;
