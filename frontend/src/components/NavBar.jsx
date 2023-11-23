import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import "../assets/navBar.css";
import homePage from "../pages/HomePage.jsx";
import UserLoginPage from "../pages/UserLoginPage.jsx";
const NavBar = () => {
  return (
      <div>
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
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to={homePage}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to="">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to="/">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to="/">Listing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink id="navLink" className="nav-link mx-auto-lg" to="/">Event</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <ul id="loginMain " className="hidden navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" id="loginSection" to={UserLoginPage}><FontAwesomeIcon id="loginIcon" className="me-2 rounded" icon={faUser}/>Login</NavLink>
              </li>
              <li className="nav-item d-flex">
                <span className="slash"> | </span>
                <NavLink className="nav-link" id="loginSection" to="/">Register</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
};

export default NavBar;