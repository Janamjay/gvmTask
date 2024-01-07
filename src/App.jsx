import { Routes, Route } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./component/Products/Products";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
