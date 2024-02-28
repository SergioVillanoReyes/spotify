/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { getToken } from "@/utils/AuthStorage";
import { apiRelatedArtists, apiGetRecentlyPlayed } from "@/api/Albums";
import Greetin from "@/components/Greeting";
import CarreteCards from "@/components/CarreteCards";
import apiGetToken from "@/api/Login";
import { AuthContext } from "@/context/Auth";
import { authTypes } from "@/reducer/Auth";

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

interface Latest {
  id: string;
  artists?: Artists[];
  nameTrack?: string;
  imageUrl: string;
  name?: string;
  genres?: string[];
  followers?: number;
}

interface Artist {
  id: string;
  name: string;
  images: { url: string }[];
  genres: string[];
  followers: { total: number };
}

const Home: React.FC = () => {
  const router = useRouter();
  const { dispatch } = useContext(AuthContext);
  const searchParams = useSearchParams();

  const [latest, setLatest] = useState<Latest[]>([{id: "", imageUrl: "", artists: [], nameTrack: "" }]);
  const [related, setRelated] = useState<Latest[]>([{id: "", imageUrl: "", name: "", genres: [], followers: 0}]);
  const [relatedTwo, setRelatedTwo] = useState<Latest[]>([{id: "", imageUrl: "", name: "", genres: [], followers: 0}]);
  const [mounted, setMounted] = useState<boolean>(false);  

  const getData = async(): Promise<void> => {
    try {
      const resp = await apiGetRecentlyPlayed();
      if(resp?.data){
        const recently: Latest[] = [];
        resp.data.items.map((rec: any, index: number)=> recently.push({id: rec.track.album.id+index, imageUrl: rec.track.album.images[1].url, artists: rec.track.artists, nameTrack: rec.track.name}));
        setLatest(recently);
      }
      const respRelated = await apiRelatedArtists("2h5syT5XdsQgKLq8Yn1klO");
      if(respRelated?.data){
        const arr = respRelated.data.artists.map((artist: Artist) => ({id: artist.id, imageUrl: artist.images[1].url, name: artist.name, genres: artist.genres, followers: artist.followers?.total}));
        setRelated(arr);
      }
      const respRelatedTwo = await apiRelatedArtists("40Yq4vzPs9VNUrIBG5Jr2i");
      if(respRelatedTwo?.data){
        const arr = respRelatedTwo.data.artists.map((artist: Artist) => ({id: artist.id, imageUrl: artist.images[1].url, name: artist.name, genres: artist.genres, followers: artist.followers?.total}));
        setRelatedTwo(arr);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const saveToken = async(): Promise<void> => {
    const code = searchParams.get("code");
    if(code !== null){
      window.history.replaceState({}, document.title, window.location.pathname);
      try {
        const resp = await apiGetToken(code);
        if(resp?.data){
          dispatch({ type: authTypes.login, payload: resp.data.access_token});
          window.location.reload();
        }
      } catch (error) { 
        console.log("error", error);
      }
    }
  };  
  
  useEffect(() => {
    setMounted(true);
    if(getToken()){
      getData();
    } else {
      router.push("/login");
    }
  }, []);
      
  useEffect(() => {
    if(mounted){
      saveToken();
    }
  }, [mounted]);

  return (
    <div className="home">
      <div className="home-content">
        <div className="home-greetin">
          <Greetin />
        </div>
        <div className="home-last">
          <CarreteCards title="Escuchado recientemente" cards={latest} artist={true} />
        </div>
        <div className="home-related-last">
          <CarreteCards title="Rock de los 90s" cards={relatedTwo} artist={false} />
        </div>
        <div className="home-related-last">
          <CarreteCards title="Porque escuchaste a Nala Sinephro" cards={related} artist={false}/>
        </div>
      </div>
    </div>
  );
};

export default Home;