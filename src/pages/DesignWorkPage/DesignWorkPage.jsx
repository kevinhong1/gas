import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "About Me",
          content: [
            "Hello, my name is Kevin, and I am a student and web developer based in Port Jefferson, New York.",
            "I have a strong interest in web development, engineering, and finance, and hope to combine my interests to create innovative digital solutions for my clients.",
            "For me, I love building things, solving problems, and the financial side of the world, whether it’s in code, machines, or the world of money. For me, it’s all about learning, constantly improving, and finding creative methods for solutions. And I’m always excited to take on new challenges and see where they lead.",
          ],
        }}
        imageSrc={"/images/design.webp"}
      />
    </>
  );
};

export default DesignWorkPage;
