import "./Navbar.css";
import shopppingBagIcon from "../assets/icons/shoppingbag.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar({ shoppingBag }) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <p
            className="logo"
            data-testid="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            Quickshop.
          </p>
        </div>
        <div className="navbar-items">
          <Link to={"/Products"} data-testid="products-link">
            Products
          </Link>
          <div
            className="shopping-bag-div"
            data-testid="shopping-bag-icon-div"
            onClick={() => {
              navigate("/Shoppingbag");
            }}
          >
            <img
              src={shopppingBagIcon}
              alt="shopping bag"
              className="shopping-bag-icon"
            />
            {shoppingBag.length > 0 && (
              <p className="shoppingbag-count" data-testid="shoppingbag-count">
                {shoppingBag.length}
              </p>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
