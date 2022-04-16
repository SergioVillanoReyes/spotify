import axios from "axios";
import { getToken } from "../utils/Auth";
import { DOMAIN } from "./_SettingsAPI.json";

async function ConstructorAPI(timeoutRequest = 20000) {
  const timeout = timeoutRequest;
  const token = getToken();
  const headers = {
    "content-type": "application/json",
    Accept: "*/*",
  }
  if (token !== null) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: DOMAIN,
    headers,
    responseType: 'json',
    responseEncoding: 'utf8',
    timeout,
    type: 'json',
  });
}
export default ConstructorAPI;