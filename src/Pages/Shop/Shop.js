import React from "react";
import Card from "../../Components/Card/Card";
import Category from "../../Components/Category/Category";
import { useProduct } from "../../Context/ProductContext";
import "./Shop.css";

const Shop = () => {
  const { productList, loading } = useProduct();

  return (
    <>
      <div className="shop">
        <Category />
        <div className="shop-container">
          {!loading ? (
            productList?.map((item) => {
              return <Card item={item}></Card>;
            })
          ) : (
            <h1 className="loading">
              <img src={require("../../Assets/loading-gif.gif")}></img>
            </h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Shop;
