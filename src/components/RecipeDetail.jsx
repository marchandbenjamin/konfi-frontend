import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, List, ListItem } from '@chakra-ui/react';
import { getRecipeById } from '../services/recipeService.js';

function RecipeDetail() {
    const { id: recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        getRecipeById(recipeId)
            .then((data) => setRecipe(data))
            .catch((err) => console.error('Erreur de récupération de la recette', err));
    }, [recipeId]);

    if (!recipe) {
        return <Box p={6}><Text>Chargement...</Text></Box>;
    }
recipeId
    return (
        <Box p={6}>
            <Heading mb={4}>{recipe.title}</Heading>
            <Heading size="md" mt={4} mb={2}>Ingrédients</Heading>
            <List>
                {recipe.ingredients.map((ingredient) => (
                    <ListItem key={ingredient.id}>
                        {ingredient.quantity} {ingredient.unit} de {ingredient.name}
                    </ListItem>
                ))}
            </List>

            <Heading size="md" mt={6} mb={2}>Étapes</Heading>
            <List>
                {recipe.steps.map((step) => (
                    <ListItem key={step.id}>
                        {step.stepOrder}. {step.description}
                    </ListItem>
                ))}
            </List>

            <Link to="/recipes">
                <Button colorScheme="teal" mt={6}>Retour à la liste</Button>
            </Link>
        </Box>
    );
}

export default RecipeDetail;
