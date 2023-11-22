import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-regular-svg-icons';
import "../assets/navBar.css";
const NavBar = () => {
  return (
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
          </div>
        </nav>
      </div>
  );
};

export default NavBar;