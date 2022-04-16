import React, { useState, useEffect } from "react";
import { GetSearch } from "../api/Search";
import Cover from "./Cover";

const DetailArtist = ({
  album,
  coveralbum,
  nameband,
  date,
  total_tracks,
  tracks,
  copyright,
  setLoading,
  detailArtist,
  setError,
  setCurrentSong,
}) => {

  const [albums, setAlbums] = useState([]);

  const getData = async() => {
    try {
      setLoading(true);
      const resp = await GetSearch(nameband);
      setAlbums(resp.data.albums.items);
    } catch (error) {
      setError(error.message);
    } finally{
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    getData();
  },[]);

  const finalTracks = [];
  tracks.map((x) => finalTracks.push({name: x.name, duration:x.duration_ms}));

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return(
    <>
      <div style={{ backgroundImage: `url(${coveralbum})`, backgroundSize: "cover"}}>
        <div className="detail" style={{ backdropFilter: "blur(8px)" }}>
          <img src={coveralbum} alt={album} className="coveralbum" />
          <div>
            <p className="albumtext">album</p>
            <p className="title">{album}</p>
            <p className="albumtext">{nameband}.<small>{date}</small> / {total_tracks} canciones</p>
          </div>
        </div>
      </div>
      <div className="tracks">
        <p className="titletracks"># TITLE</p>
        <div className="hr" />
        {finalTracks.map((tr, index) => (
          <div  key={index} className="song" onClick={()=>setCurrentSong([tr.name, nameband, coveralbum])}>            
            <p>          
              {index+1} / {tr.name}
            </p>
            <p>
              {millisToMinutesAndSeconds(tr.duration)}
            </p>
          </div>
        ))}
        <small className="copyright">
          {copyright}
        </small>
      </div>
      <div className="more">
        <h1>Mas sobre {nameband}</h1>
        <div className="containercovers">
          {albums.map((release) => (
            <>          
              <Cover 
                key={release.id} 
                name={release.name} 
                image={release.images[0]}
                artist={release.artists[0].name}
                id={release.id}
                detailArtist={detailArtist}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailArtist;