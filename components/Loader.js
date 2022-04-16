
import React from "react";
import Lottie from "react-lottie";
import LoaderAnimation from "../utils/lotties/loader.json";


const Loader = ({ show }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return(
    <>
      <div className="loader" style={{ display: show ? 'flex' : 'none' }}>
        <div className="inner">
          <Lottie  options={{ animationData: LoaderAnimation, ...defaultOptions}}/>
        </div>
      </div>
    </>
  );
}
export default Loader;