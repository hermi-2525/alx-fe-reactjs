// components/DeleteRecipeButton.jsx
import useRecipeStore from '../recipeStore';

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

export default DeleteRecipeButton;