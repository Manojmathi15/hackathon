"use client";
import { useState } from "react";
import { Login } from "./Login";
import { LoginSelector } from "./LoginSelector";

export const LoginHandler = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDoctor, setIsDoctor] = useState<boolean>(false);

  const [selected, setSelected] = useState(false);
  return (
    <>
      {!selected ? (
        <LoginSelector setSelected={setSelected} setIsDoctor={setIsDoctor} />
      ) : (
        <Login
          isSignUp={isSignUp}
          isDoctor={isDoctor}
          setIsSignUp={setIsSignUp}
        />
      )}
    </>
  );
};
