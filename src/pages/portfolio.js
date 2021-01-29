import React from "react";
import { Layout } from "../components/Layout/Layout";
import "../style/pages/portfolio.scss";

const Portfolio = () => {
  return (
    <Layout>
      <section className="portoflio">
        <div className="portfolio__image">
          <div className="portfolio__headings">
            <h2 className="portfolio__title">Portfolio</h2>
            <p className="portfolio__subtitle">check our work</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
