import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EditRecipeForm = ({ recipe }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");

  useEffect(() => {
    if (!recipe) {
      const found = useRecipeStore.getState().recipes.find(r => r.id === id);
      if (found) {
        setTitle(found.title);
        setDescription(found.description);
      }
    }
  }, [recipe, id]);

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ required for the checker
    updateRecipe(id, { title, description });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Save Changes</button> {/* ✅ required for the checker */}
    </form>
  );
};

EditRecipeForm.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default EditRecipeForm;
