// components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h2>{recipe.title}</h2>
              </Link>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;