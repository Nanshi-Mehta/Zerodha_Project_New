import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "https://zerodha-project-new.vercel.app//signup";
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;