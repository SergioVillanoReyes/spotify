import React, { useState, useEffect } from "react";
import Router from 'next/router';
import Layout from "../components/Layout"
import { setToken, getToken } from "../utils/Auth";
import Lottie from "react-lottie";
import background from "../utils/lotties/background.json";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  useEffect(()=>{
    const resp = getToken();
    if(resp){
      Router.push('/media-player');
    }
  },[]);

  const submit = async()=>{
    try {
      setLoading(true);
      await setToken();
      const resp = getToken();
      if(resp){
        setTimeout(() => {
          Router.push('/media-player');
        },2000)
      }
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <Layout loading={loading} >
      <div className="container-login">
        <img src="/img/logo.png" className="logo" alt="logo"/>
        <button className="btn-primary" onClick={() => submit()}>Iniciar sesión</button>
        <div className="back">
          <Lottie options={{ animationData: background, ...defaultOptions}}/>
        </div>
      </div>
    </Layout>
  )
}
