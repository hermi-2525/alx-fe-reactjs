// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import useRecipeStore from '../recipeStore';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditRecipeForm = ({ recipe }) => {
  const { recipeId } = useParams();
  const [formData, setFormData] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.join('\n'),
    instructions: recipe.instructions.join('\n')
  });
  
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // Explicit event.preventDefault() as required
    e.preventDefault();
    
    const updatedRecipe = {
      title: formData.title,
      description: formData.description,
      ingredients: formData.ingredients.split('\n').filter(line => line.trim()),
      instructions: formData.instructions.split('\n').filter(line => line.trim())
    };
    
    updateRecipe(recipe.id, updatedRecipe);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients (one per line):</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="instructions">Instructions (one per line):</label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* Explicit button element as required */}
      <button type="submit" className="update-button">
        Update Recipe
      </button>
    </form>
  );
};

EditRecipeForm.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default EditRecipeForm;