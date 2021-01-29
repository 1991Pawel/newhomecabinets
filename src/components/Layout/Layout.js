import React from "react";
import "../Layout/Layout.scss";

import { Helmet } from "react-helmet";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="photography" />
        <title>Newhomecabinets</title>
        <link rel="canonical" href="https://newhomecabinets.com/" />
        <meta
          name="Description"
          content="New Home Cabinets. Extraordinary custom cabinets at the best price. Kitchen cabinets, bathroom vanities and more."
        />
        <html lang="en" />
      </Helmet>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};
