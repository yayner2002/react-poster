import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const userInfo = {
      name: "Yayner",
      email: "yayner@email.com",
    };
    login(userInfo);
  };
  return (
    <div>
      <h1>Login Form:</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
