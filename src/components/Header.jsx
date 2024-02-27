import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import LogoCook from "/assets/images/logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="logo-menu">
        <FontAwesomeIcon icon={faBars} />
        <img
          src={LogoCook}
          alt="logo Cook Formation CDA"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="groups-buttons">
        <button className="login" onClick={() => navigate("/add-recipe")}>
          Ajouter une recette
        </button>

        <button className="cart">
          <FontAwesomeIcon icon={faBasketShopping} /> Panier
        </button>
        <button className="login">Connexion</button>
      </div>
    </header>
  );
}

export default Header;
