import React, { useState } from "react";
import { useAuth } from "./auth";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  return (
    <>
      <h1>LoginPage</h1>
      <form onSubmit={loginSubmit}>
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
