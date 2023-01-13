import axios from "axios";

const {
  createContext,
  Children,
  useState,
  useEffect,
  useContext,
  useReducer,
} = require("react");

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    const getCategories = async () => {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          setCategories(res.data);
          setLoading(false);
        });
    };
    getCategories();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      if (category && category.length > 0) {
        await axios
          .get(`https://fakestoreapi.com/products/category/${category}`)
          .then((res) => {
            setProductList(res.data);
            setLoading(false);
          });
      } else {
        await axios.get("https://fakestoreapi.com/products").then((res) => {
          setProductList(res.data);
          setLoading(false);
        });
      }
    };
    getProducts();
    console.log(productList);
  }, [category]);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      // awit is used coz axios is returned as promiose. To wait for promise we use axioz
      await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        });
    };
    getProduct();
  }, [productId]);

  const values = {
    productList,
    loading,
    product,
    productId,
    setProductId,
    categories,
    setCategory,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
