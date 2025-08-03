// components/RecipeDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      
      <div className="recipe-actions">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
      </div>
    </div>
  );
};

export default RecipeDetails;