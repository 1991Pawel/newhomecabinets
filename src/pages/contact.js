import React from "react";
import "../style/pages/contact.scss";
import { Layout } from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { graphql, useStaticQuery } from "gatsby";
import { Background } from "../components/Background/Background";
import map from "../images/map-point.png";

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
        <section className="contact-map">
          <div className="container">
            <div className="contact-map__content">
              <h2 className="contact-map__title">New Home Cabinets</h2>
              <div className="contact-map__adress">
                adress
                <span>174 Touhy Ct</span>
                <span>Des Plaines, IL 60018</span>
              </div>
              <div className="contact-map__phone">
                PHONE
                <span>(773) 610-7527</span>
                <span>(630) 398-7038</span>
              </div>
              <div className="contact-map__hours">
                HOURS
                <span>Monday to Friday: 8 am to 5:30 pm</span>
                <span>Saturday: 9 am to 1 pm</span>
                <span>Sunday: Closed</span>
              </div>
            </div>
            <div className="contact-map__map">
              <img src={map} alt="map image" />
            </div>
          </div>
        </section>
        <Form />
      </section>
    </Layout>
  );
};

export default Contact;
