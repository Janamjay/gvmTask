import { useState } from "react";
import { Link } from "react-router-dom";
import navStyles from "./Nav.module.css";
import { useSelector } from "react-redux";
import { RiMenuFoldFill, RiCloseFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("login-success") === "true";
  const userData = localStorage.getItem("currentUser");
  const currentUser = JSON.parse(userData);
  const userName = currentUser?.name;
  const data = useSelector((state) => state.cart);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.setItem("login-success", "false");
    localStorage.removeItem("currentUser");

    window.location.reload();
  };

  return (
    <nav className={navStyles.main}>
      <div className={navStyles.left}>
        <Link to="/">Jaz</Link>
      </div>
      <div className={`${navStyles.right} ${isOpen && navStyles.active}`}>
        <Link to="/products" className={navStyles.navLink}>
          Products
        </Link>
        {isLoggedIn == false ? (
          <>
            <Link to="/login" className={navStyles.navLink}>
              Login
            </Link>
            <Link to="/register" className={navStyles.navLink}>
              Register
            </Link>
          </>
        ) : (
          <Link onClick={handleLogout} className={navStyles.navLink}>
            Logout
          </Link>
        )}
        <Link to="/cart" className={navStyles.navLink}>
          Cart
        </Link>
        {isLoggedIn == true && (
          <Link className={navStyles.navLink}>
            <div className={navStyles.navProfile}>
              <CgProfile /> <span>{userName}</span>
            </div>
          </Link>
        )}
        <Link to="/cart" id={navStyles.c} className={navStyles.navLink}>
          <HiShoppingCart /> <span>{data.length}</span>
        </Link>
      </div>
      <div className={navStyles.navToggle}>
        <Link to="/cart">
          <HiShoppingCart /> <span>{data.length}</span>
        </Link>
        {!isOpen ? (
          <button className={navStyles.menuButton} onClick={toggleMenu}>
            <RiMenuFoldFill />
          </button>
        ) : (
          <button className={navStyles.menuButton} onClick={toggleMenu}>
            <RiCloseFill />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
