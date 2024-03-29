import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Logout = () => {
  const { logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name} !</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Logout;
