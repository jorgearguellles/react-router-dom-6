import React from "react";
import { useAuth } from "./auth";

export const LogoutPage = () => {
  const auth = useAuth();
  const handleLogoutSubmit = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <>
      <h1>LogoutPage</h1>
      <form onSubmit={handleLogoutSubmit}>
        <label>Are you sure?</label>
        <button type="submit">Logout</button>
      </form>
    </>
  );
};
