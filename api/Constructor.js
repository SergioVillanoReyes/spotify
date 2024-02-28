import axios from "axios";
import settings from "./_Settings.json";
import { getToken } from "@/utils/AuthStorage";

const { base_url } = settings;

const ConstructorLogin = (timeout = 120000) => {
  const token = getToken();
  const headers = {
    "Authorization": `Bearer ${token}`,
  };

  return axios.create({
    baseURL: base_url,
    headers,
    responseType: "json",
    responseEncoding: "utf8",
    timeout,
    type: "json",
  });
};

export default ConstructorLogin;