import "../assets/styles/home.scss";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";
import useFetchData from "../hooks/useFetchData";
import Search from "../components/Search/Search";
import RecipeList from "../components/RecipeList/RecipeList";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [localRecipes, setLocalRecipes] = useState([]);
  const recipesPerPage = 18;

  const { data: recipes, loading } = useFetchData(
    "https://restapi.fr/generator",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        times: 18,
        resourceName: "recipes",
        title: {
          type: "sentence",
          range: [1, 3],
        },
        image: {
          type: "image",
          theme: "food",
          height: 1000,
          width: 500,
        },
      }),
    },
    [currentPage]
  );

  useEffect(() => {
    setLocalRecipes(recipes);
  }, [recipes]);

  // Filtrer les recettes en fonction de la valeur de recherche soumise
  useEffect(() => {
    if (submittedSearchTerm) {
      const filtered = recipes.filter((recipe) => {
        return recipe.title
          ?.toLowerCase()
          .includes(submittedSearchTerm.toLowerCase());
      });

      console.log(filtered);

      setFilteredRecipes(filtered);
    }
  }, [submittedSearchTerm, recipes]);

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const currentRecipes = submittedSearchTerm
    ? filteredRecipes.slice(0, indexOfLastRecipe)
    : localRecipes.slice(0, indexOfLastRecipe);

  const loadMoreRecipes = async () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Fonction pour soumettre la recherche
  const handleSubmit = (searchTerm) => {
    setSubmittedSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  const handleDeleteRecipe = (id) => {
    const updatedRecipes = localRecipes.filter((recipe) => recipe._id !== id);
    setLocalRecipes(updatedRecipes);
  };

  return (
    <div>
      <ClipLoader color="#36D7B7" loading={loading} css={override} size={150} />
      {!loading && (
        <section>
          <h1>Découvrez nos nouvelles recettes</h1>

          <Search onSearch={handleSubmit} />

          <RecipeList recipes={currentRecipes} onDelete={handleDeleteRecipe} />

          <button className="loadMore" onClick={loadMoreRecipes}>
            Charger plus de recettes
          </button>
        </section>
      )}
    </div>
  );
};

export default Home;
