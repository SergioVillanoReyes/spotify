import { setToken, removeToken } from "@/utils/AuthStorage";

const authTypes = {
  login: "LOGIN",
  logout: "LOGOUT",
};

const authInitialState = {
  isLogin: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
  case authTypes.login:
    setToken(action.payload);
    // IR A RAIZ /
    window.location.href = "/";
    return {
      ...state,
      isLogin: true,
    };
  case authTypes.logout:
    removeToken();
    // IR A LOGIN /login
    window.location.href = "/login";
    return {
      isLogin: false,
    };
  default: 
    return state;
  }
};

export {
  authTypes,
  authInitialState,
  authReducer,
};