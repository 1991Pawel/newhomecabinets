import React from "react";
import "../style/pages/about.scss";
import { Layout } from "../components/Layout/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { Background } from "../components/Background/Background";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <section className="about">
        <Background
          fluidUrl={data.file.childImageSharp.fluid}
          title="New home cabinets"
          //span
          subtitle="you just dream we bring it to life"
        />

        <p className="about__desc">
        <span>New Home Cabinets</span> is a family-owned business located in Des Plaines, IL, built upon a
        tradition of <span>high standards of service and quality.</span> Each of us plays a role in the service
        you receive from concept to completion. A reliable team of designers, master craftsmen,
        finishers, and installers with many years of experience are committed to work in creating
        custom cabinetry.
        </p>
        <p className="about__desc">
        We are a full-service with complimentary design consultation, and an outstanding customer
        service support team. We can design <span>indoor and outdoor kitchens, bathrooms, laundry
        rooms, wet bars, entertainment centers, garage storage, mudrooms, and more - </span>
        whether you are looking for in-stock, semi-custom or custom cabinets we have the perfect
        option for you.
        </p>
      </section>
    </Layout>
  );
};

export default About;
