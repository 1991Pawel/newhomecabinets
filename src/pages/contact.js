import React from "react";
import "../style/pages/contact.scss";
import { Layout } from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { graphql, useStaticQuery } from "gatsby";
import { Background } from "../components/Background/Background";

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
        <Background
          fluidUrl={data.file.childImageSharp.fluid}
          title="Contact Us"
          subtitle="We'd love to hear from you!"
        />
        <Form />
      </section>
    </Layout>
  );
};

export default Contact;
