import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import "../assets/navBar.css";

import avatar from '/profile-avatar.jpg'
import { getBuyerById, sellerById } from "../helpers/api";

const NavBar = ({profileImg}) => {

  const [img, setImg] = useState(profileImg ? profileImg : avatar)

  const [showPfp, setShowPfp] = useState(false)

  let data = JSON.parse(sessionStorage.getItem('buyer'))
  useEffect(() => {
    if(data){
      (async () => {
        let result
        
        if(data.isSeller){
          result = await sellerById(data._id)
        }else{
          result = await getBuyerById(data._id)
        }

        if(result != null){
          setImg(result.img)
        }
      })()
    }
  }, [0])



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
                {
                  (data == null || !data.isSeller) && <li><NavLink to={"/become-seller"}>Become Seller</NavLink></li>
                }
              </ul>
            </div>
            <div className="controls">
              <button type="button" className="control-btn me-4"><FaBars /></button>
              <button type="button" className="profile-btn" onClick={() => setShowPfp(!showPfp)}>
                <div className="profile-img">
                  <img src={img} alt="profile image" />
                </div>
                <div className={`profile-options ${showPfp ? "open" : ""}`}>
                  {data == null && <NavLink to={"/login"}>Login</NavLink> }
                  {data == null && <NavLink to={"/register/user"}>Register</NavLink> }
                  {data != null && <NavLink to={"/dashboard/user"}>Dashboard</NavLink> }               
                  
                  {data != null && <NavLink to={"/"}>Logout</NavLink>}

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