import React, { useState } from "react";
import "./Search.scss";
const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={query}
        placeholder="Rechercher une recette..."
        onChange={handleChange}
      />
      <button className="search-button" type="submit">
        Rechercher
      </button>
    </form>
  );
};

export default Search;
