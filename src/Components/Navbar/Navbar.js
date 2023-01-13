import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Navbar.css";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHeader } from "../../Context/HeaderContext";

const Navbar = () => {
  const { favIds, cartIds, favTotal, cartTotal } = useHeader();
  const cartCount = useSelector((state) => state.cartCount);

  return (
    <div className="nav-container">
      <div className="nav-heading">
        <h4 className="heading">
          <span className="first-letter">S</span>hopping{" "}
          <span className="first-letter">A</span>pp{" "}
          <span className="full-stop">.</span>
        </h4>
      </div>
      <div className="nav-items">
        <div className="nav-flex">
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/shop">
              <li>Shop</li>
            </a>
            <a href="/contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="wish-cart-icon">
        <div className="wish-cart-icon-flex">
          <Favorite className="wishlist" />
          <Link to="/Cart">
            <ShoppingBagIcon className="cart"></ShoppingBagIcon>
            {cartCount > 0 ? (
              <span className="cart-length">{cartIds.length}</span>
            ) : (
              0
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
