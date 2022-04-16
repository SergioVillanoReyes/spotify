import React, { useState, useEffect } from "react";
import Router from 'next/router';
import { getToken } from "../utils/Auth";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ContainerMedia from "../components/ContainerMedia";
import Player from "../components/Player";
import { GetSearch } from "../api/Search";

const MediaPlayer = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [dataSearching, setDataSearching] = useState();
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDetailArtist, setShowDetailArtist] = useState([]);
  const [error, setError] = useState();
  const [currentSong, setCurrentSong] = useState();

  useEffect(()=>{
    const resp = getToken();
    if(!resp){
      Router.push('/');
    }
  },[]);

  const searching = async(e) => {
    try {      
      setDataSearching(e.target.value);
      const resp = await GetSearch(e.target.value);
      setList(resp.data.albums.items);
      setShowInput(true);
    } catch (error) {
      setList("no");
      setShowInput(false);
    }
  };
      
  return(
    <Layout loading={loading} error={error}>
      <div className="main">
        <Sidebar 
          setShowInput={setShowInput}  
          showInput={showInput} 
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setShowDetailArtist={setShowDetailArtist}
          searching={searching}
          setDataSearching={setDataSearching}
        />
        <ContainerMedia 
          dataSearching={dataSearching} 
          searching={searching} 
          list={list}
          showInput={showInput}
          setShowMenu={setShowMenu}
          setLoading={setLoading}
          setShowDetailArtist={setShowDetailArtist}
          showDetailArtist={showDetailArtist}
          setError={setError}
          setCurrentSong={setCurrentSong}
        />
      </div>
      <Player currentSong={currentSong}/>
    </Layout>
  );
};

export default MediaPlayer;