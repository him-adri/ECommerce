import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import "./Category.css";
// import { useHeader } from "../../Context/HeaderContext";

const Category = () => {
  const { categories, setCategory } = useProduct();

  return (
    <>
    <div className="main-contain">

      <div className="top-border"></div>

      <nav className="categoryNav">
        <>
          <Link to="/All" className="categoryLink all-nav">
            <p className="categoryLinkText" onClick={() => setCategory("")}>
              All
            </p>
          </Link>
        </>
        {categories &&
          categories.map((i) => (
            <div>
              <Link to={`/${i}`} className="categoryLink">
                <p className="categoryLinkText" onClick={() => setCategory(i)}>
                  {i}
                </p>
              </Link>
            </div>
          ))}
        
      </nav>
      <div className="bottom-border"></div>
    </div>
    </>
  );
};

export default Category;