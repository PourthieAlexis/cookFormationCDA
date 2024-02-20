import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import LogoCook from "/assets/images/logo.png";

function Header() {
  return (
    <header>
      <div className="logo-menu">
        <FontAwesomeIcon icon={faBars} />
        <img src={LogoCook} alt="logo Cook Formation CDA" />
      </div>
      <div className="groups-buttons">
        <button className="cart">
          <FontAwesomeIcon icon={faBasketShopping} /> Panier
        </button>
        <button className="login">Connexion</button>
      </div>
    </header>
  );
}

export default Header;
