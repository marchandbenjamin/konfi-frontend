const getRecipes = async () => {
    const response = await fetch('http://localhost:8080/api/recipe');
    return await response.json();
};

export { getRecipes };
