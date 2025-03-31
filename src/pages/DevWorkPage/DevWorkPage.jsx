import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "Website Development",
          quote: "Building your digital realities from the ground up.",
          content: [
            "I focus on creating websites that are both functional and visually engaging. From simple portfolios to dynamic business sites, I work hard to bring ideas to life through clean, efficient code and thoughtful design.",
            "Using technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js, I build websites that are fast, responsive, and easy to navigate. My goal is to create user-friendly experiences that meet each client’s unique needs.",
            "Performance, security, and accessibility are key considerations for me. I integrate SEO practices, optimize loading speeds, and ensure websites are easy to manage and update.",
            "I aim to make the technical side as seamless as possible for my clients, and from start to finish, I work to the best of my ability to create reliable and well-structured websites that work smoothly and look great.",
          ],
        }}
        imageSrc={"/images/dev.webp"}
      />
    </>
  );
};

export default DevWorkPage;
