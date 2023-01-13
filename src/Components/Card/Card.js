import React from "react";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import Favorite from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Card.css";
import { useHeader } from "../../Context/HeaderContext";
import Cart from "../../Pages/Cart/Cart";

const Card = ({ item }) => {
  console.log("himadri", item);
  const dispatch = useDispatch();
  const { cartIds, setCartIds, setCartTotal } = useHeader();

  const addToCart = (product_id) => {
    console.log(product_id, "product_id");
    const array = cartIds;
    if (!array.includes(product_id)) {
      array.push(product_id);
      setCartIds(array);
      localStorage.setItem("provis", JSON.stringify(array));
      const temp = JSON.parse(localStorage.getItem("provis"));
      console.log(temp);
      setCartTotal(array.length);
    } else {
      const newArray = array.filter((id) => id !== product_id);
      setCartIds(newArray);
      localStorage.setItem("provis", JSON.stringify(newArray));
      const temp = JSON.parse(localStorage.getItem("provis"));
      console.log(temp);
      setCartTotal(newArray.length);
    }
  };

  return (
    <div className="card">
      <div className="cardLink">
        <div className="wishlist">
          <button className="favButton">
            <Favorite />{" "}
          </button>

          <div className="cardHeader">
            <img className="cardImg" src={item.image}></img>
          </div>

          <div className="cardBody">
            <>
              <p className="cardTitle">{item.title}</p>
            </>
            <div className="rating">
              {[...Array(Math.round(item.rating.rate))].map((e, i) => (
                <StarSharpIcon
                  keys={`star-${i}`}
                  className="StarIcon"
                  aria-hidden="true"
                />
              ))}
              {[...Array(5 - Math.round(item.rating.rate))].map((e, i) => (
                <StarOutlineSharpIcon
                  keys={`star-${i}`}
                  className="emptyStarIcon"
                  aria-hidden="true"
                />
              ))}
              <p className="rating-count">{item.rating.count}</p>
            </div>

            <div>
              <div className="price">
                <span>${item.price}</span>
              </div>
            </div>

            <div className="addtoCart">
              <Link onClick={(e) => addToCart(item.id)}>
                <button
                  className="addtocartButton"
                  onClick={() => {
                    dispatch({ type: "UPDATE_CART_COUNT" });
                    dispatch({
                      type: "ADD_TO_CART_LIST",
                      payload: {
                        id: item.id,
                        description: item.description,
                        price: item.price,
                        image: item.image,
                      },
                    });
                  }}
                >
                  <ShoppingBagIcon className="shoppingCart"></ShoppingBagIcon>
                  <span className="buttonText">Add to cart</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
