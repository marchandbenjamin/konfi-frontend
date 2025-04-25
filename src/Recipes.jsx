import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Button, List, ListItem } from '@chakra-ui/react';
import api from './apiService';

function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get('/api/recipe');
                setRecipes(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des recettes:', error);
            }
        };

        fetchRecipes();
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
