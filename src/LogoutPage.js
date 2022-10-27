import React from "react";
import { useAuth } from "./auth";

export const LogoutPage = () => {
  const auth = useAuth();

  const logoutSubmit = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>LogoutPage</h1>
      <form onSubmit={logoutSubmit}>
        <label>Are you sure logout?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};
