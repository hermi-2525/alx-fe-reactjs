import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ id }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/"); // Redirect to homepage after deletion
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
}
