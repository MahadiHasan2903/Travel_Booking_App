import React, { useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Container, Row, Button } from "reactstrap";
import "./Header.css";
import { toast } from "react-toastify";
import { logoutUser } from "../../redux/action/userAction";
import logo from "../../assets/tour-images/logo.png";
import { useDispatch, useSelector } from "react-redux";

const nav_links = [
  {
    path: "/",
    display: "Home",
  },

  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()); // Dispatch the logoutUser action
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      toast.success("Logout successful!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // Dispatch the loginUserSuccess action to set user data
      dispatch({ type: "loginUserSuccess", payload: { data: storedUser } });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {isLoggedIn ? (
                  <>
                    <h5 className="mb-0">{user.name}</h5>
                    <Button className="btn btn_dark" onClick={handleLogout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary_btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary_btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile_menu" onClick={toggleMenu}>
                <AiOutlineMenu />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
