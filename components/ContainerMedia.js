import React, { useState, useEffect } from "react";
import Header from "./Header";
import { GetNewReleases, GetAlbum } from "../api/Albums";
import Cover from "./Cover";
import Search from "./Search";
import DetailArtist from "./DetailArtist";

const ContainerMedia = ({
  searching, 
  list, 
  dataSearching, 
  showInput, 
  setShowMenu,
  setLoading,
  setShowDetailArtist,
  showDetailArtist,
  setError,
  setCurrentSong,
}) => {
  const [newReleases, setNewReleases] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const getData = async() => {
    try {
      setLoading(true);
      const resp = await GetNewReleases();
      setNewReleases(resp.data.albums.items);
      setCompleteList(resp.data.albums.items);
    } catch (error) {
      setError(error.message);
    } finally{
      setLoading(false);
    }
  }

  const detailArtist = async(id) => {
    try {
      setLoading(true);
      const resp = await GetAlbum(id);
      setShowDetailArtist(resp.data);
    } catch (error) {
      setError(error.message);
    } finally{
      setLoading(false);
    }
  };
  
  useEffect(()=>{
    getData();
  },[]);

  useEffect(()=>{
    setNewReleases(list);
    if(list === "no"){
      setNewReleases(completeList);
    }
  },[list]);

  return(
    <div className="container-media"> 
      <Header setShowMenu={setShowMenu} />
      {showDetailArtist.length !== 0 ? (
        <DetailArtist 
          album={showDetailArtist.name}
          coveralbum={showDetailArtist.images[0].url}
          nameband={showDetailArtist.artists[0].name}
          date={showDetailArtist.release_date}
          total_tracks={showDetailArtist.total_tracks}
          tracks={showDetailArtist.tracks.items}
          copyright={showDetailArtist.copyrights[0].text}
          setLoading={setLoading}
          detailArtist={detailArtist}
          setError={setError}
          setCurrentSong={setCurrentSong}
        />
      ) : (

        <>
          <Search searching={searching} show={showInput}/>
          <h1>{dataSearching || "Nuevos Lanzamientos"}</h1>
          <div className="containercovers">
            {newReleases.map((release) => (
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
        </>
      )}
    </div>
  )
};

export default ContainerMedia;