import { useState } from "react";

const BuyerProfileSideBar = ({children, showPanel}) => {

  const [active, setActive] = useState(1)
  
  let panelChange = (e) => {
    showPanel(e.target.value)
    setActive(e.target.value)
  }

  return (
    <>
      <div className="container buyer-profile-tab mt-5">
        <ul className="nav nav-tabs">
          <li className={`nav-item ${active == 1 && "active"}`}>
           <button className="profile-tab-btn" value={1} onClick={panelChange}>Profile</button>
          </li>
          <li className={`nav-item ${active == 2 && "active"}`}>
            <button className="profile-tab-btn" value={2} onClick={panelChange}>Bills</button>
          </li>
          <li className={`nav-item ${active == 3 && "active"}`}>
            <button className="profile-tab-btn" value={3} onClick={panelChange}>Account</button>
          </li>
          <li className={`nav-item ${active == 4 && "active"}`}>
            <button className="profile-tab-btn" value={4} onClick={panelChange}>Setting</button>
          </li>
        </ul>
      </div>

      {children}
    </>
  );
};

export default BuyerProfileSideBar;