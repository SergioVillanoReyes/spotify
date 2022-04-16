import React, { useState } from "react";
import { logout } from "../utils/Auth";

const Header = ({setShowMenu}) => {
  const [showDetail, setShowDetail] = useState(false);
  return(
    <div className="header">
      <img src="/img/menu.png" className="menu" alt="menu" onClick={()=>setShowMenu(true)}/>
      <div className="profile">
        <img src="/img/user.png" className="picture" alt="picture" />
        <p>User</p>
        <div onClick={() => setShowDetail(!showDetail)}  className={!showDetail ? 'triangule' : 'triangule-invert'}/>
        {showDetail && (
          <>
            <div className="detailprofile">
              <p onClick={() =>  logout()}>Cerrar sesión</p>
            </div>
          </>
        )}
      </div>  
    </div>
  );
};

export default Header;