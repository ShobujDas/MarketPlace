import React from "react";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <nav className="menuu" tabIndex={0}>
        <div className="smartphone-menu-trigger" />
        <header className="avatar">
          <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
          <h2>John D.</h2>
        </header>
        <ul>
          <li tabIndex={0} className="icon-dashboard">
          <NavLink to={"/dashboard/user"}><span>Dashboard</span></NavLink>
          </li>
          <li tabIndex={0} className="icon-customers">
            <span> <NavLink to={"/dashboard/customers"}>Customers</NavLink></span>
          </li>
          <li tabIndex={0} className="icon-users">
            <span> <NavLink to={"/dashboard/settigns"}>Users</NavLink></span>
          </li>
          <li tabIndex={0} className="icon-settings">
            <span> <NavLink to={"/dashboard/oik"}>Settings</NavLink></span>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
