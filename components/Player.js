import React, { useState } from "react";
import Lottie from "react-lottie";
import Volume from "../utils/lotties/volume.json";

const Player = ({currentSong}) => {
  const [play, setPlay] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return(
    <div className="player">
      <div className="container-player">
        {currentSong && (
          <div className="curentSong">
            <img src={currentSong[2]} alt={currentSong[1]} />
            <small>{currentSong[1]}</small>
            <small>{currentSong[0]}</small>
          </div>
        )}
        <div className="controls">
          <div className="btn-player shuffle" />
          <div className="btn-player pre" />
          <div className={!play ? "btn-player play" : "btn-player pause"} onClick={() =>setPlay(!play)}/>
          <div className="btn-player next" />
          <div className="btn-player repeat" />
        </div>
        <div className="bar">
          <div className='playbar'>
            <div className='playbar_inner'></div>
            <div className='playbar_left'>
              <span>0:00</span>
            </div>
            <div className='playbar_right'>
              <span>3:45</span>
            </div>
          </div>
        </div>
        <div className="volume" style={{ display: play ? "block" : "none" }}>
          <Lottie  options={{ animationData: Volume, ...defaultOptions}}/>
        </div>
      </div>
    </div>
  );
}

export default Player;