import React, { useState } from "react";

export const LoginPage = () => {
  const [username, setUsername] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    console.log(username);
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
