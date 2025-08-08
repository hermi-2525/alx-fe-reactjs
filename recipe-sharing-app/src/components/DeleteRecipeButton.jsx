import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
  };

  return (
    <button onClick={handleDelete} style={{ background: "red", color: "white" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
