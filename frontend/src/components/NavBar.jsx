import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import "../assets/navBar.css";

import avatar from '/profile-avatar.jpg'

const NavBar = ({profileImg}) => {

  const [img, setImg] = useState(profileImg ? profileImg : avatar)

  const [showPfp, setShowPfp] = useState(false)

  return (
    <>
      <nav className="navbar-section">
        <div className="container">

          <div className="logo">
            <a href="/">
              Trust<span>Home</span>
            </a>
          </div>

          <div className="menu">
            <div className="links">
              <ul className="m-0">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/"}>Services</NavLink></li>
                <li><NavLink to={"/"}>Category</NavLink></li>
                <li><NavLink to={"/become-seller"}>Become Seller</NavLink></li>
              </ul>
            </div>
            <div className="controls">
              <button type="button" className="control-btn me-4"><FaBars /></button>
              <button type="button" className="profile-btn" onClick={() => setShowPfp(!showPfp)}>
                <div className="profile-img">
                  <img src={img} alt="profile image" />
                </div>
                <div className={`profile-options ${showPfp ? "open" : ""}`}>
                  <NavLink to={"/login/user"}>Login</NavLink>

                  <NavLink to={"/register/user"}>Register</NavLink>
                  <NavLink to={"/"}>Dashboard</NavLink>
                  <NavLink to={"/"}>Logout</NavLink>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;