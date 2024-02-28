"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import { urlAuth } from "@/api/Login";
import { setToken, getToken } from "@/utils/AuthStorage";

interface LoginData {
  user: string;
  pass: string;
}

const Login: React.FC = () => {
  const router = useRouter();

  const [errors, setErrors] = useState<LoginData>({
    user: "",
    pass: "",
  });
  const [dataLogin, setDataLogin] = useState<LoginData>({
    user: "",
    pass: "",
  });
  const [sendData, setSendData] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setErrors({
      user: "",
      pass: "",
    });
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>):Promise<void> => {
    e.preventDefault();
    if(dataLogin.user.length < 1 || dataLogin.pass.length < 1){
      setErrors({
        ...errors,
        user: dataLogin.user.length < 1 ? "Este campo es obligatorio" : "",
        pass: dataLogin.pass.length < 1 ? "Este campo es obligatorio" : ""
      });
      return;
    }
    try {
      setSendData(!sendData);
      const url = urlAuth;
      window.location.href = url;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const token = getToken();
    if (token !== null){
      router.push("/");
    }
  }, []);

  return(
    <div className="container-login">
      <div className="login-content">
        <div className="login-logo">
          <Image 
            src="/img/logo-white-large.png" 
            alt="logo"
            width={100}
            height={100}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="login-title">
          <p>Inicia sesión en Spotify</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            name="user"
            label="Email o nombre del usuario"
            placeholder="Email o nombre del usuario"
            value={dataLogin.user}
            onChange={onChange}
            error={errors.user}
          />
          <Input
            name='pass'
            label="Contraseña"
            placeholder="Contraseña"
            value={dataLogin.pass}
            onChange={onChange}
            error={errors.pass}
            type="password"
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="login-footer">
          <p>¿Has olvidado tu contraseña?</p>
          <br />
          <p>¿No tienes cuenta?</p>
          <p>Regístrate en Spotify</p>
        </div>
      </div>
    </div>
  );
};

export default Login;