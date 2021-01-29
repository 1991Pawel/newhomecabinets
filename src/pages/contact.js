import React from "react";
import "../style/pages/contact.scss";
import { Layout } from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="contact">
        <div className="contact__image">
          <div className="contact__headings">
            <h2 className="contact__title">Contact Us</h2>
            <p className="contact__subtitle">We'd love to hear from you!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
