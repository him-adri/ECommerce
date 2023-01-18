import React, { useState } from "react";
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
  const [truncate, setTruncate] = useState(true);

  var truncatedDesc =
    item.title.slice(0, 20) +
    `<p style='color: green; cursor: pointer; margin-top: 1rem; font-size: 0.9rem'>Read More..</p>`;
  var fullDesc =
    item.title +
    "<p style='color: red; cursor:pointer; margin-top: 1rem; font-size: 0.9rem'> Read Less...</p>";

  return (
    <>
      <div className="card-container">
        <a>
          <div className="card">
            <div className="wishlist">
              <button className="favbutton">
                <Favorite className="wishlist-icon" />
              </button>
            </div>
            <div className="image">
              <img className="item-image" src={item.image} />
            </div>
            <div className="image-details">
              <div className="image-title">
                <p
                  onClick={() => setTruncate(!truncate)}
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: truncate ? truncatedDesc : fullDesc,
                  }}
                ></p>
                <div className="rating">
                  {[...Array(Math.round(item.rating.rate))].map((e, i) => (
                    <StarSharpIcon
                      keys={`star-${i}`}
                      className="staricon"
                      aria-hidden="true"
                    />
                  ))}
                  {[...Array(5 - Math.round(item.rating.rate))].map((e, i) => (
                    <StarOutlineSharpIcon
                      keys={`star-${i}`}
                      className="emptystaricon"
                      aria-hidden="true"
                    />
                  ))}
                  <p className="rating-count">{item.rating.count}</p>
                </div>
                <div className="price">
                  <p>$ {item.price}</p>
                </div>
              </div>
            </div>
            <div className="addtocart">
              <button
                className="addtocartbutton"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART_LIST",
                    payload: {
                      id: item.id,
                      image: item.image,
                      description: item.description,
                      price: item.price,
                    },
                  });
                }}
              >
                <ShoppingBagIcon className="shoppingbagicon" />
                <span className="button-text">Add to Cart</span>
              </button>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Card;

// const addToCart = (product_id) => {
//   console.log(product_id, "product_id");
//   const array = cartIds;
//   if (!array.includes(product_id)) {
//     array.push(product_id);
//     setCartIds(array);
//     localStorage.setItem("provis", JSON.stringify(array));
//     const temp = JSON.parse(localStorage.getItem("provis"));
//     console.log(temp);
//     setCartTotal(array.length);
//   } else {
//     const newArray = array.filter((id) => id !== product_id);
//     setCartIds(newArray);
//     localStorage.setItem("provis", JSON.stringify(newArray));
//     const temp = JSON.parse(localStorage.getItem("provis"));
//     console.log(temp);
//     setCartTotal(newArray.length);
//   }
// };
