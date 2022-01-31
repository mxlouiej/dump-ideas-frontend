import React, { useState } from "react";
import { useNavigate } from "react-router";

type Props = {
  onLogin: (e: React.KeyboardEvent, pass: string) => void;
  onLogout: () => void;
  localUser: string | null;
};

const AuthContext = React.createContext({} as Props);

const AuthProvider = ({ children }: { children: JSX.Element[] }) => {
  let navigate = useNavigate();
  const localUser = localStorage.getItem("admin_authenticated");

  const authorizeLogin = async (e: React.KeyboardEvent, pass: string) => {
    if (e.key === "Enter") {
      await fetch("https://dump-ideas-backend.herokuapp.com/authorize", {
        method: "POST",
        body: JSON.stringify({
          password: pass,
        }),
      })
        .then((res) => {
          res.json().then((r) => {
            if (r.success === true) {
              console.log("Authorized");
              localStorage.setItem("admin_authenticated", r.token);
              navigate("/admin");
            }
          });
        })
        .catch((r) => {
          console.log("Something went wrong", r);
        });
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const value = {
    onLogin: authorizeLogin,
    onLogout: handleLogout,
    localUser: localUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return React.useContext(AuthContext);
};
