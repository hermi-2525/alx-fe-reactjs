import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    alert("Recipe deleted!");
    navigate("/"); // Go back to home or recipe list
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 mt-2">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
