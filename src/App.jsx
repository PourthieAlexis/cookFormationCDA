import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import AddRecipeForm from "./pages/AddRecipe.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
