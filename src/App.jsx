import { Routes, Route } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Products from "./component/Products/Products";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
