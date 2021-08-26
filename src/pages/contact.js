import React from "react";
import "../style/pages/contact.scss";
import { Layout } from "../components/Layout/Layout";
import { Form } from "../components/Form/Form";
import { graphql, useStaticQuery } from "gatsby";
import { Background } from "../components/Background/Background";
import map from "../images/map.jpg";
import door from "../images/door.png";
import pdf from "../images/guide.pdf";

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
        {/* <Background
          fluidUrl={data.file.childImageSharp.fluid}
          title="Contact Us"
          subtitle="We'd love to hear from you!"
        /> */}
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
              <a
                target="_blank"
                href="https://www.google.com/maps/place/174+Touhy+Ct,+Des+Plaines,+IL+60018/@42.0102303,-87.9218724,17z/data=!3m1!4b1!4m5!3m4!1s0x880fb6c360bcb1e7:0x5fa8eeb919792c4d!8m2!3d42.0102303!4d-87.9196837?shorturl=1"
              >
                <span className="contact-map__route">click to show route</span>
                <img src={map} alt="map image" />
              </a>
            </div>
          </div>
        </section>
        <Form />
      </section>
      <section className="how-to-mesure">
        <div className="how-to-mesure__cta">
          <a href={pdf} target="_blank">
            Print Measurement Guide
          </a>
        </div>
        {/* <h2 className="how-to-mesure__title">
          HOW TO MEASURE YOUR KITCHEN
          <br /> OR BATH FOR <span>NEW HOME CABINETS </span>
        </h2>
        <p className="how-to-mesure__desc">
          A good kitchen design begins with having accurate measurements. The
          correct measurements ensure that the kitchen cabinets will be the
          right size, and luckily, we’ll build you the beautiful, long lasting
          high-end kitchen cabinets you’ve always wanted. Don’t worry, your
          drawings don’t have to be works of art – just easy to read, simple
          sketches.
        </p>
        <div className="how-to-mesure__info">
          <h3>Supplies you need</h3>
          <ul>
            <li>Steel tape measure</li>
            <li>Pencil (preferably colored)</li>
            <li>Eraser</li>
            <li>Graph paper (attached to the guide)</li>
            <li>Small step ladder to reach higher points (if possible)</li>
          </ul>
        </div>
        <div className="how-to-mesure__mesure">
          <div className="how-to-mesure__photo">
            <img src={door} alt="door" />
          </div>
          <p className="how-to-mesure__desc">
            Approximately 36” from the floor, start in one corner and measure
            along the wall until you reach a stopping point (an obstruction, an
            opening or a break in the wall). Measure from one edge of the wall
            to the other, skipping over any windows, appliances, or fixtures.
            Label each of the walls with a number for easy reference.
          </p>
          <h4>Openings, doorways and windows</h4>
          <p className="how-to-mesure__desc">
            After you’ve recorded the entire wall lengths, measure and record
            the wall segments, such as from a corner of the wall to the outside
            trim of a window.
          </p>
          <p className="how-to-mesure__desc">
            Measure all openings, such as windows or doors (example shown), from
            one outside trim edge to the other outside edge. Any trim or casing
            around is part of measurement. Try to label every door or window and
            put measurements (A, B, C) on your layout.
          </p>
          <p className="how-to-mesure__desc how-to-mesure__desc--red">
            Note: Remember to always double check your measurements. Put your
            records in inches.
          </p>
          <h4>Vertical measurements (ceiling height)</h4>
          <p className="how-to-mesure__desc">
            You should take vertical measurements from floor to ceiling. Measure
            from the floor to ceiling in at least four different spots of the
            kitchen
          </p>
          <p className="how-to-mesure__desc how-to-mesure__desc--red">
            Ceiling heights can vary.
          </p>
          <h4>Obstructions</h4>
          <p className="how-to-mesure__desc">
            Draw in any obstructions, such as radiators, pipes, sink plumbing,
            etc., that you either cannot move or do not want to move. Use
            symbols from our provided examples.{" "}
            <span>Note the center of your sink.</span> If you want to change the
            location of your sink cabinet, look under your sink at the drain,
            water supply lines, and electrical. Once you locate these, it will
            help you determine if you will be able to move your sink/appliances
            easily.
          </p>
          <h4>Before photos</h4>
          <p className="how-to-mesure__desc">
            A picture says more than a thousand words. Providing photos of your
            space, combined with layout is very helpful in communicating with
            designers about your layout. Take as many angles as you can,
            including ceiling, openings, windows etc.
          </p>
          <h4>Appliance and fixture information</h4>
          <p className="how-to-mesure__desc">
            Make sure appliances fit in your future kitchen. Remember to bring
            specifications with you. Certain types of appliances may be
            larger/smaller than others.{" "}
          </p>
        </div> */}
      </section>
    </Layout>
  );
};

export default Contact;
