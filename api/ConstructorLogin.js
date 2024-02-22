import axios from "axios";
import settings from "./_Settings.json";

const { base_url_login } = settings;

const ConstructorLogin = (timeout = 120000) => {
  const headers = {
    "Content-type": "application/x-www-form-urlencoded"
  };

  return axios.create({
    baseURL: base_url_login,
    headers,
    responseType: "json",
    responseEncoding: "utf8",
    timeout,
    type: "json",
  });
};

export default ConstructorLogin;