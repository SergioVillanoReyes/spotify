import React from "react";

const Search = ({searching, show}) => {

  return(
    <input 
      style={{ display: show ? "block" : "none"}}
      type="search"
      className="search"
      placeholder="Buscar artistas, musica o podcast"
      onChange={(e) =>searching(e)}
    />
  );
};

export default Search;