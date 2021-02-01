import React from "react";
import "../style/pages/contact.scss";
import { Layout } from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "bg-contact.jpg" }) {
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
      <section className="contact">
        <BackgroundImage
          fluid={data.file.childImageSharp.fluid}
          className="contact__image"
        >
          <div className="contact__headings">
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact__subtitle">We'd love to hear from you!</p>
          </div>
        </BackgroundImage>
        <Form />
      </section>
    </Layout>
  );
};

export default Contact;
