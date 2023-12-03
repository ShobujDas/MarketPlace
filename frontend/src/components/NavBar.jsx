import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa6";
import "../assets/navBar.css";

import avatar from '/profile-avatar.jpg'
import { getBuyerById, getCategories, logout, sellerById } from "../helpers/api";

const NavBar = ({profileImg}) => {

  const [img, setImg] = useState(profileImg ? profileImg : avatar)
  const [showPfp, setShowPfp] = useState(false)
  const [sideBar, setSideBar] = useState(false)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

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

    (async () => {
      let getCategory = await getCategories()
      setCategories(getCategory)
    })()
  }, [0])

  // logout of session
  let logoutDevice = async () => {
    let result = await logout();
    if(result == 1){
      sessionStorage.clear()
      navigate("/", {replace: true})
    }
  }


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
            <div className={`links ${sideBar ? "bar-open" : ""}`}>
              <ul className="m-0">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/"}>Services</NavLink></li>
                <li>
                  <div className="btn-group">
                  <button type="button" className="btn btn-danger border-0">
                    category
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    {
                      categories.map((e, index) => (
                        <li key={index} className="py-2">
                          <NavLink to={`/services?category=${e._id}&page=1&limit=10`} className="dropdown-item bg-body">{e.categoryName}</NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>
                {
                  (data == null || !data.isSeller) && <li><NavLink to={"/become-seller"}>Become Seller</NavLink></li>
                }
              </ul>
            </div>
            <div className="controls">
              <button type="button" className="control-btn me-4" onClick={() => setSideBar(!sideBar)}><FaBars /></button>
              <button type="button" className="profile-btn" onClick={() => setShowPfp(!showPfp)}>
                <div className="profile-img">
                  <img src={img} alt="profile image" />
                </div>
              </button>
              <div className={`profile-options ${showPfp ? "open" : ""}`}>
                {data == null && <NavLink to={"/login"}>Login</NavLink>}
                {data == null && <NavLink to={"/register/user"}>Register</NavLink>}
                {(data != null && data.isSeller) && <NavLink to={"/dashboard/user"}>Dashboard</NavLink>}
                {(data != null && !data.isSeller) && <NavLink to={"/profile/"+data._id}>Profile</NavLink>}

                {data != null && <button onClick={logoutDevice}>Logout</button>}

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;