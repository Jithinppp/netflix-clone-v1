import React, { useEffect, useState } from "react";
import "./Navigation.style.css";
import logo from "../../assets/images/netflix-logo.png";
import userAvatar from "../../assets/images/user-avatar.png";
import { Link } from "react-router-dom";

const Navigation = ({ profilePage }) => {
  const [showBar, setShowBar] = useState(false);

  const navbarBackgroundHandler = () => {
    if (window.scrollY > 100) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarBackgroundHandler);
    // cleanup function
    return () => window.removeEventListener("scroll", navbarBackgroundHandler);
  }, []);

  return (
    <nav className={`nav__container ${showBar && "nav__black"}`}>
      <Link to={"/"} className="logo">
        <img src={logo} alt="logo" />
      </Link>
      {!profilePage && (
        <div className="avatar">
          <Link to={"/profile"}>
            <img src={userAvatar} alt="avatar" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
