import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import StarOutlineSharpIcon from "@mui/icons-material/StarOutlineSharp";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, setProductId, loading } = useProduct();

  useEffect(() => {
    setProductId(id);
  }, [id]);

  return (
    <>
      {(!loading && product?.id) ? (
        <div className="productdetail-container">
          <div className="productdetail-inner">
            <div className="productdetail-image">
              <img src={product.image} />
            </div>
            <div className="productdetail-details">
              <div className="productdetail-title">
                <p>{product.title}</p>
              </div>
              <div className="productdetail-desc">
                <p>{product.description}</p>
              </div>
              {/* <div className="productdetail-rating">
                {[...Array(Math.round(product.rating.rate))].map((e, i) => (
                  <StarSharpIcon
                    keys={`star-${i}`}
                    className="staricon"
                    aria-hidden="true"
                  />
                ))}
                {[...Array(5 - Math.round(product.rating.rate))].map((e, i) => (
                  <StarOutlineSharpIcon
                    keys={`star-${i}`}
                    className="emptystaricon"
                    aria-hidden="true"
                  />
                ))}
                <p className="rating-count">{product.rating.count}</p>
              </div> */}
              <div className="productdetail-price">
                <p>$ {product.price}</p>
              </div>
              <div className="productdetail-button">
                <button className="addtocartbutton">
                  <ShoppingBagIcon className="shoppingbagicon" />
                  <span className="button-text">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <img src={require("../../Assets/loading-gif.gif")}></img>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
