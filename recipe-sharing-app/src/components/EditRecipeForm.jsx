// components/EditRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../recipeStore';
import { useNavigate } from 'react-router-dom'; // Added for navigation after update

const EditRecipeForm = ({ recipe }) => {
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.join('\n'),
    instructions: recipe.instructions.join('\n')
  });
  
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate(); // Added for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Added preventDefault
    const updatedRecipe = {
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
      instructions: formData.instructions.split('\n').filter(line => line.trim())
    };
    updateRecipe(recipe.id, updatedRecipe);
    navigate(`/recipe/${recipe.id}`); // Navigate back to recipe details
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      {/* ... rest of the form remains the same ... */}
    </form>
  );
};

export default EditRecipeForm;