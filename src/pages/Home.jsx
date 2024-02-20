import "../assets/styles/home.scss";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const recipesPerPage = 18;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://restapi.fr/api/recipes");
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();

        setRecipes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
    : recipes.slice(0, indexOfLastRecipe);

  const loadMoreRecipes = async () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Fonction pour mettre à jour la valeur de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Fonction pour soumettre la recherche
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  return (
    <div>
      <ClipLoader color="#36D7B7" loading={loading} css={override} size={150} />
      {!loading && (
        <section>
          <h1>Découvrez nos nouvelles recettes</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Rechercher une recette..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Rechercher</button>
          </form>

          <div className="recette">
            {currentRecipes &&
              currentRecipes.map((recipe) => (
                <div className="card" key={recipe._id}>
                  <img src={recipe.image} alt="hamburger" />
                  <p>{recipe.title}</p>
                </div>
              ))}
          </div>
          <button className="loadMore" onClick={loadMoreRecipes}>
            Charger plus de recettes
          </button>
        </section>
      )}
    </div>
  );
};

export default Home;
