import api from '../api/apiService';

const getAllRecipes = async () => {
  const response = await api.get('/api/recipe');
  return response.data;
};

const getRecipeById = async (recipeId) => {
  const response = await api.get(`/api/recipe/${recipeId}`);
  return response.data;
}

export { getAllRecipes, getRecipeById };
