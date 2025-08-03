// components/DeleteRecipeButton.jsx
import useRecipeStore from '../recipeStore';
import PropTypes from 'prop-types'; // Added for prop validation

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      if (onDelete) onDelete();
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Recipe
    </button>
  );
};

// Added prop type validation
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onDelete: PropTypes.func
};

export default DeleteRecipeButton;