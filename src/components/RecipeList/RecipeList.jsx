import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./RecipeList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecipeList = ({ recipes, onDelete }) => {
  const handleDelete = (recipeId) => {
    onDelete(recipeId);
  };
  return (
    <div className="recette">
      {recipes &&
        recipes.map((recipe) => (
          <div className="card" key={recipe._id}>
            <FontAwesomeIcon
              icon={faXmark}
              className="xmark"
              onClick={() => handleDelete(recipe._id)}
            />
            <img src={recipe.image} alt="hamburger" />
            <p>{recipe.title}</p>
          </div>
        ))}
    </div>
  );
};

export default RecipeList;
