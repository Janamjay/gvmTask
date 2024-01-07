/* eslint-disable react/prop-types */

import { useNavigate, useLocation } from "react-router-dom";
import pro from "./ProductDetail.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/CartSlice";

function ProductDetail() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loc = useLocation();
  const product = loc.state.product;
  const isLoggedIn = localStorage.getItem("login-success") === "true";

  if (!product) {
    return <div>No product details available.</div>;
  }
  function handleAdd(product) {
    if (isLoggedIn) {
      dispatch(addItem(product));
    } else {
      nav("/login");
    }
  }

  return (
    <div className={pro.products}>
      <div className={pro.box}>
        <div className={pro.img}>
          <img src={product.image} alt="product" />
        </div>
        <div className={pro.details}>
          <div>
            <h4 >{product.title}</h4>
            <h4>${product.price}</h4>
          </div>
          <div className={pro.btn}>
            <button className={pro.add} onClick={() => handleAdd(product)}>
              Add to cart
            </button>
            <button className={pro.add} onClick={() => nav("/products")}>
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
