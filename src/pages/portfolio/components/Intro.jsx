 import React from "react";
import "../styles/Intro.css";
import { TypeAnimation } from "react-type-animation";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeInSection from "./FadeInSection";
import GlitchPortrait from "./GlitchPortrait";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-simulation">
        <GlitchPortrait />
      </div>
      <div className="intro-block">
        <div className="intro-title">
          {"hi, "}
          <span className="intro-name">
            <TypeAnimation
              sequence={["_.abhinave"]}
              wrapper="span"
              cursor={false}
              repeat={0}
            />
          </span>
          {" here."}
          <span className="intro-cursor">|</span>
        </div>
        <FadeInSection>
          <div className="intro-desc">
            Student building projects at the intersection of AI, DevOps and
            Web Development. I love creating tools that solve real problems —
            from RAG APIs and security scanners to CI/CD pipelines and ML models.
          </div>
          <a href="mailto:abhinavepb92@gmail.com" className="intro-contact">
            <EmailRoundedIcon />
            {" Say hi!"}
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Intro;
