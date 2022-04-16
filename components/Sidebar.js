import React from "react";

const Sidebar = ({
  setShowInput, 
  showInput, 
  showMenu, 
  setShowMenu,
  setShowDetailArtist,
  searching,
  setDataSearching,
}) => {


  return(
    <div className="sidebar" style={{ display: showMenu && "block" }} >
      <img src="/img/logo_white.png" className="logo_white" alt="logo"/>
      <div className="hr" />
      <div className="section" onClick={()=>[
        setShowInput(false),
        setShowDetailArtist([]),
        searching(""),
        setDataSearching(""),
        setShowMenu(false)]}>
        <img src="/img/home.png" className="icon" alt="icon"/>
        <p>Home</p>
      </div>
      <div className="section" onClick={()=>[
        setShowInput(!showInput),
        setShowDetailArtist([]),
        setShowMenu(false)]}>
        <img src="/img/search.png" className="icon" alt="icon"/>
        <p>Search</p>
      </div>
    </div>
  );
};

export default Sidebar;