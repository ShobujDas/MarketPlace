import { useState } from "react";
import { NavLink } from "react-router-dom";
<<<<<<< HEAD

import { FaBars } from "react-icons/fa6";
=======
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
>>>>>>> 30d016250e3af710f1ee82901efc9d0b8c33510f
import "../assets/navBar.css";

import avatar from '/profile-avatar.jpg'

const NavBar = ({profileImg}) => {

  const [img, setImg] = useState(profileImg ? profileImg : avatar)

  const [showPfp, setShowPfp] = useState(false)

  return (
<<<<<<< HEAD
    <>
      <nav className="navbar-section">
        <div className="container">

          <div className="logo">
            <a href="/">Trust<span>Home</span></a>
=======
      <div className="fromnavbar">
        <nav id="navbarSEction" className="navbar navbar-expand-lg fixed-top shadow-lg">
          <div className="container">
            <a className="navbar-brand" href="/">TrustHome</a>
            <button className="navbar-toggler" type="button"
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TrustHome</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id="navItemSection">
                  <li className="nav-item">
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <a id="navLink" className="nav-link mx-auto-lg" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a id="navLink" className="nav-link mx-auto-lg" href="/contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a id="navLink" className="nav-link mx-auto-lg" href="/contact">Listing</a>
                  </li>
                  <li className="nav-item">
                    <a id="navLink" className="nav-link mx-auto-lg" href="/contact">Event</a>
                  </li>
                </ul>
              </div>
            </div>
            <ul id="loginMain " className="hidden navbar-nav">
              <li className="nav-item">
                <a className="nav-link" id="loginSection" href="/login">
                {/* <FontAwesomeIcon id="loginIcon" className="me-2 rounded" icon={faUser}/> */}
                  Login</a>
              </li>
              <li className="nav-item d-flex">
                <span className="slash"> | </span>
                <a className="nav-link" id="loginSection" href="/register">Register</a>
              </li>
            </ul>
>>>>>>> 30d016250e3af710f1ee82901efc9d0b8c33510f
          </div>

          <div className="menu">
            <div className="links">
              <ul className="m-0">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/"}>Services</NavLink></li>
                <li><NavLink to={"/"}>Category</NavLink></li>
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