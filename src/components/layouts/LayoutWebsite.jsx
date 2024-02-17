import React from "react";
import HeaderWebsite from "../HeaderWebsite";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <div className="container py-3">
      <HeaderWebsite />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWebsite;
