import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Past Work",
          quote: "View some of my past work.",
          content: [
            "I’ve had the opportunity to build websites for a variety of clients, focusing on clean design, functionality, and performance. Each project is tailored to meet specific needs, whether it's a personal portfolio, a business site, or a custom web application. Take a look at a some of my previous works below!",
            <span key="experience-wrapper">
              <a key="experience-link" href="/">
                Past Projects
              </a>
            </span>,
          ],
        }}
        imageSrc={"/images/about.webp"}
      />
    </>
  );
};

export default AboutPage;
