import { Link } from 'react-router-dom';
import { Box, Heading, Button } from '@chakra-ui/react';

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

export default Home; 