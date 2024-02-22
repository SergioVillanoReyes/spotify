import ConstructorLogin from "./ConstructorLogin";
import settings from "./_Settings.json";

const { client_id, client_secret } = settings;

const API = ConstructorLogin();

const apiLogin = async () => {
  const data = { grant_type: "client_credentials", client_id, client_secret };
  try {
    return await API.post("/token", data );
  } catch (error) {
    console.log('error', error);
  }
};

export default apiLogin;