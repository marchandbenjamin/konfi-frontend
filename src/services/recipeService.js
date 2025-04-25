import api from '../api/apiService';

const getRecipes = async () => {
  const response = await api.get('/api/recipe');
  return response.data;
};

export { getRecipes };
