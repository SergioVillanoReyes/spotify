import React, { useState, useEffect } from "react";

interface Artists {
  external_urls: {
      spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Cards {
  id: string;
  artists?: Artists[];
  nameTrack?: string;
  imageUrl: string;
  genres?: string[];
  followers?: number;
  name?: string;
}

interface Props {
    title: string;
    cards: Cards[];
    artist: boolean;
}

const CarreteCards: React.FC<Props> = ({
  title,
  cards,
  artist
}) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [skeleton, setSkeleton] = useState<number[]>([1,2,3,4,5,6,7]);

  useEffect(() => {
    setTimeout(() => {      
      setMounted(true);
      setSkeleton([]);
    }, 800);
  }, []);

  return (
    <div className="carretecards">
      <p className={`carretecards-title ${!mounted && "unmounted"}`}>{title}</p>
      <div className="carretecards-card">
        {mounted ? (
          cards.map((card) => (
            <div className={`carretecards-item item-${artist ? "artist" : "normal"}`} key={card.id}>
              <img 
                src={card.imageUrl} 
                alt={card.id}
                className={`img-${artist ? "artist" : "normal"}`}
              />
              {artist ? (
                <>
                  <p className="name">{card.nameTrack}</p>
                  <div className="artists">
                    {card.artists?.map((names) => (
                      <p key={names.id}>{names.name}, &nbsp;</p>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  <p>{card.name}</p>
                  <p className="followers">Seguidores: {card.followers}</p>
                  <div className="genres">
                    {card.genres?.map((genre, index) => (
                      <p key={index}>{genre}, &nbsp;</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        ):(
          skeleton.map((card) => (
            <div className={`carretecards-item item-${artist ? "artist" : "normal"}`} key={card}>
              <img 
                src="/img/thumb.png" 
                alt="skeleton"
                className={`img-${artist ? "artist" : "normal"} ${!mounted && "unmounted"}`}
              />
              {!mounted && <br />}
              {artist ? (
                <>
                  <p className={`name ${!mounted && "unmounted"}`}>LOREM IPSUM</p>
                  {!mounted && <br />}
                  <div className="artists">
                    <p className={`${!mounted && "unmounted"}`}>Lorem Isa LSAd Lorem Isa LSAd </p>
                  </div>
                </>
              ) : (
                <div>
                  <p className={`${!mounted && "unmounted"}`}>LOREM IPSUM</p>
                  {!mounted && <br />}
                  <p className={`followers ${!mounted && "unmounted"}`}>LOREM IPSUM</p>
                </div>
              )}
            </div>
          ))
        )}      
      </div>
    </div>
  );
};

export default CarreteCards;