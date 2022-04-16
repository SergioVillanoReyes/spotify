import React from "react";

const Cover = ({
  name,
  image,
  artist,
  id,
  detailArtist,
}) => {
  return(
    <div className="cover" onClick={()=> detailArtist(id)}>
      <img src={image.url} alt={name} />
      <p className="album">{name}</p>
      <p className="artist">{artist}</p>
    </div>
  );
};

export default Cover;