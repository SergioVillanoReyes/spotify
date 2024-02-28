const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  if(typeof window !== "undefined"){
    return localStorage.getItem("token");
  }
  return null;
};

const removeToken = () => localStorage.removeItem("token");

export {
  setToken,
  getToken,
  removeToken
};