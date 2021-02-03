import React from "react";
import "../Background/Background.scss";
import BackgroundImage from "gatsby-background-image";

export const Background = ({ title, subtitle, fluidUrl }) => {
  return (
    <BackgroundImage fluid={fluidUrl}>
      <div className="background">
        <div className="background__headings">
          <h2 className="background__title">{title}</h2>
          <p className="background__subtitle">{subtitle}</p>
        </div>
      </div>
    </BackgroundImage>
  );
};
