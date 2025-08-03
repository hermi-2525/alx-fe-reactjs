import { useParams } from "react-router-dom";
import { useRecipeStore } from "../stores/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p className="mt-2">{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={id} />
    </div>
  );
};

export default RecipeDetails;
