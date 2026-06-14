import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am a <b>Student Developer</b> passionate about building at the
      intersection of <b>AI/ML</b>, <b>DevOps</b>, and <b>Web Development</b>.
      I love working on projects that span the full stack — from training ML
      models to deploying them on cloud infrastructure.
    </p>
  );
  const two = (
    <p>
      In my free time, I explore new tech, contribute to open source, and build
      quirky side projects. My current obsession is making AI tools that are
      actually useful in the real world.
    </p>
  );

  const techStack = [
    "Python",
    "JavaScript",
    "Dart / Flutter",
    "Docker & Jenkins",
    "AWS EC2",
    "YOLOv8 / ML",
    "RAG & LLMs",
    "React.js",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Abhinav E P B" src={"https://avatars.githubusercontent.com/u/180805033?v=4"} style={{borderRadius: "8px"}} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
