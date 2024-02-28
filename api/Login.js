import ConstructorLogin from "./ConstructorLogin";
import settings from "./_Settings.json";

const { client_id, client_secret, scope, redirect_uri, base_url_login } = settings;

const API = ConstructorLogin();

const apiGetToken = async (code) => {
  const data = { 
    grant_type: "authorization_code", 
    client_id, 
    client_secret, 
    redirect_uri,
    code
  };
  try {
    return await API.post("/api/token", data );
  } catch (error) {
    console.log("error", error);
  }
};

const urlAuth = `${base_url_login}/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}&show_dialog=true`;

export default apiGetToken;
export { urlAuth };