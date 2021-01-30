import React from "react";
import "../Layout/Layout.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Helmet } from "react-helmet";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const queryClient = new QueryClient();

export const Layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="photography" />
        <title>Newhomecabinets</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
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
    </QueryClientProvider>
  );
};
