import React, { useState, useEffect } from "react";
import { faHeart, faPlay, faPlus, faAngleDown, faBackward, faForward, faRandom, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Player: React.FC = () => {
  const [showCompletePlayer, setShowCompletePlayer] = useState<boolean>(false);
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  
  const handleCompleteScreen = (show: boolean):void => {
    if(currentWidth < 992){
      setShowCompletePlayer(show);
    }
  };

  useEffect(() => {
    const updateWidth = ():void => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    updateWidth();
    setTimeout(() => {
      setMounted(true);
    }, 800);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <div className="player" onClick={() => handleCompleteScreen(true) }>
        <div className="player-content">
          <div className="player-img">
            <img src="/img/green-logo.png" alt="smaching pompink" className={`${!mounted && "opacity-0"}`}/>
          </div>
          <div className="player-info">
            {mounted && (
              <>
                <p>Cancion</p>
                <p>Artista</p>
              </>
            )}
          </div>
          <div className="player-like">
            {mounted && <FontAwesomeIcon icon={faPlus} className="player-icon-like" />}
          </div>
          <div className="player-control">
            {mounted && <TypePlayer currentWidth={currentWidth} />}
          </div>
        </div>
      </div>
      <CompleteScreen show={showCompletePlayer} setShowCompletePlayer={setShowCompletePlayer} />
    </>
  );
};

const TypePlayer: React.FC<{ currentWidth: number }> = ({ currentWidth }) => {
  if(currentWidth > 992){
    return <Controls />;
  } else {
    return <FontAwesomeIcon icon={faPlay} className="player-icon-control" />;
  }
};

interface PlayerProps {
    show: boolean;
    setShowCompletePlayer: (value: boolean) => void;
}

const CompleteScreen: React.FC<PlayerProps> = ({ show, setShowCompletePlayer }) => {
  return (
    <div className={`complete-player ${show ? "show" : "hidde"}-player`}>
      <div className="complete-player-content">
        <div className="complete-player-top">
          <FontAwesomeIcon onClick={() => setShowCompletePlayer(false)} icon={faAngleDown} className="complete-player-close" />
          <p>artista</p>
          <p>...</p>
        </div>
        <img src="/img/green-logo.png" alt="picture" className="complete-player-picture" />
        <div className="complete-player-info">
          <div>
            <p>Cancion</p>
            <p>Artista</p>
          </div>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div className="complete-player-timeline">

        </div>
        <div className="complete-player-controls">
          <Controls />
        </div>
      </div>
    </div>
  );
};

const Controls: React.FC = () => {
  return (
    <div className="controls">
      <div className="controls-content">
        <div className="controls-item">
          <FontAwesomeIcon icon={faRandom} className="controls-button" />
        </div>
        <div className="controls-item">
          <FontAwesomeIcon icon={faBackward} className="controls-button" />
        </div>
        <div className="controls-item">
          <FontAwesomeIcon icon={faPlay} className="controls-button play" />
        </div>
        <div className="controls-item">
          <FontAwesomeIcon icon={faForward} className="controls-button" />
        </div>
        <div className="controls-item">
          <FontAwesomeIcon icon={faRedo} className="controls-button" />
        </div>
      </div>
    </div>
  );
};

export default Player;