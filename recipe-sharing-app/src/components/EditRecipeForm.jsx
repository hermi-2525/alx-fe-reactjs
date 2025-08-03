import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title, description });
    alert("Recipe updated!");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block border p-2 my-2"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="block border p-2 my-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Save Changes
      </button>
    </form>
  );
};

export default EditRecipeForm;
