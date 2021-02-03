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
          title="Newhomecabinets"
          //span
          subtitle="you just dream we bring it to life"
        />

        <p className="about__desc">
          From design, to flow, to practical use of space, our cabinets can
          transform your private space into the ideal and wonderful place you
          call home. <span>Whether you are looking</span> for in-stock cabinets,
          semi-custom cabinets or custom cabinets we have the
          <span> perfect cabinet for you</span>.
        </p>
        <p className="about__desc">
          We have many <span>years of experience</span> dealing business with
          multi-housing and property management companies, supplying
          high-quality durable cabinets that is sure to catch the eye! Our
          cabinets are built to last and <span>always look great.</span> At New
          Home Cabinets we can <span>find you the right cabinets</span> for your
          dream home today!
        </p>
      </section>
    </Layout>
  );
};

export default About;
