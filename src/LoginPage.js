import React, { useState } from "react";
import { useAuth } from "./auth";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    auth.login({ username })
    setUsername("");
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={handleLoginSubmit}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
