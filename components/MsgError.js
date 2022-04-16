
import React, { useState } from "react";
import Lottie from "react-lottie";
import Conection from "../utils/lotties/conection.json";


const MsgError = ({ message }) => {
  const [hideMsg, setHideMsg] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return(
    <>
      <div className="error" style={{ display: hideMsg && "none" }}>
        <div className="inner">
          <Lottie  options={{ animationData: Conection, ...defaultOptions}}/>
          { message }
          <p onClick={() => setHideMsg(true)}>X</p>
        </div>
      </div>
    </>
  );
}
export default MsgError;