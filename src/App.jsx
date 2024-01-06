import { Routes, Route } from "react-router-dom";
import Nav from "./component/nav/Nav";
import Footer from "./component/footer/Footer";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
