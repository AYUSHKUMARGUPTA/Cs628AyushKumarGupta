import axios from 'axios';

const API_URL = "http://localhost:5050/api/recipes";

export const getRecipes = () => axios.get(API_URL);
export const getRecipeById = (id) => axios.get(`${API_URL}/${id}`);
export const addRecipe = (recipe) => axios.post(API_URL, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${API_URL}/${id}`, recipe);
export const deleteRecipe = (id) => axios.delete(`${API_URL}/${id}`);
