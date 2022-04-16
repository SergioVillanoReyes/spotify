import Router from 'next/router';
const clientId = "ac9ea21a560546699f440e9942448f1a";
const clientSecret = "9ae5e42e641b4622b3dade72a61267e0";

const setToken = async() => {
  const result = await fetch("https://accounts.spotify.com/api/token",{
    method: "POST",
    headers: {
      "Content-Type" : "application/x-www-form-urlencoded",
      'Authorization': 'Basic ' + (btoa(clientId + ':' + clientSecret).toString('base64'))
    },
    body: "grant_type=client_credentials"
  });
  const data = await result.json();
  localStorage.setItem('token', data.access_token);
};

const getToken = () => localStorage.getItem('token');

const logout = () => {
  localStorage.removeItem('token');
  localStorage.clear();
  Router.push('/');
};

export {setToken, getToken, logout};