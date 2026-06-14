import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import { Carousel } from "react-bootstrap";
import ExternalLinks from "./ExternalLinks";

const spotlightProjects = {
  "Build-a-RAG-API": {
    title: "build-a-rag-api",
    desc: "A Retrieval-Augmented Generation (RAG) API built in Python, using vector databases and LLM backends to answer queries grounded in custom data.",
    techStack: "PYTHON, RAG, LLMs, VECTOR DB",
    link: "https://github.com/abhinav-e-p-b/Build-a-RAG-API",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=400&fit=crop",
  },
  "AI-Security-Scanner": {
    title: "ai security scanner",
    desc: "An AI-powered security scanner built in Python that performs intelligent vulnerability analysis and threat detection across codebases.",
    techStack: "PYTHON, AI/ML, SECURITY",
    link: "https://github.com/abhinav-e-p-b/AI-Security-Scanner-Python",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
  },
  "License-Plate-Recognition": {
    title: "license plate recognition",
    desc: "Automatic license plate detection using YOLOv8, capable of real-time detection from images and video streams with high accuracy.",
    techStack: "PYTHON, YOLOV8, COMPUTER VISION",
    link: "https://github.com/abhinav-e-p-b/Automatic-License-Plate-Recognition",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
  },
  "APS": {
    title: "aps",
    desc: "A JavaScript-based automation and processing system. A key personal project actively developed and maintained.",
    techStack: "JAVASCRIPT",
    link: "https://github.com/abhinav-e-p-b/APS",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
  },
};

const projects = {
  "DevOps CI/CD Pipeline": {
    desc: "A fully automated CI/CD pipeline deploying a two-tier Flask + MySQL app on AWS EC2 using Jenkins, Docker, and Docker Compose.",
    techStack: "Python (Flask), Docker, Jenkins, AWS EC2, MySQL",
    link: "https://github.com/abhinav-e-p-b/DevOps-Project-Two-Tier-Flask-App",
  },
  "De-Addiction App": {
    desc: "A Flutter mobile app designed to help users track and manage addiction recovery through habit tracking and wellness features.",
    techStack: "Dart, Flutter",
    link: "https://github.com/abhinav-e-p-b/De-Addiction-App",
  },
  "F1 Race Replay": {
    desc: "A Python-based Formula 1 race replay tool that visualises telemetry and race data from F1 sessions.",
    techStack: "Python, Data Visualisation",
    link: "https://github.com/abhinav-e-p-b/f1-race-replay",
  },
  "slow-llm": {
    desc: "A browser extension that throttles LLM response speed — useful for testing streaming UI and pacing AI outputs.",
    techStack: "HTML, Browser Extension",
    link: "https://github.com/abhinav-e-p-b/slow-llm",
    open: "https://slowllm.lav.io",
  },
};

const Projects = () => {
  return (
    <div id="projects">
      <div className="section-header ">
        <span className="section-title">/ software</span>
        <a
          href="https://github.com/abhinav-e-p-b"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all projects
        </a>
      </div>
      <div className="spotlight-projects-desktop">
        <Carousel interval={null}>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <Carousel.Caption>
                <h3>{spotlightProjects[key]["title"]}</h3>
                <div>
                  {spotlightProjects[key]["desc"]}
                  <div className="techStack">
                    {spotlightProjects[key]["techStack"]}
                  </div>
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="spotlight-projects-mobile">
        {Object.keys(spotlightProjects).map((key, i) => (
          <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
            <div className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                </div>
                <ExternalLinks
                  githubLink={spotlightProjects[key]["link"]}
                  openLink={spotlightProjects[key]["open"]}
                />
              </div>

              <a
                href={
                  spotlightProjects[key]["open"] ||
                  spotlightProjects[key]["link"]
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <div className="card-title">
                  {spotlightProjects[key]["title"]}
                </div>
                <div className="spotlight-mobile-image">
                  <img src={spotlightProjects[key]["image"]} alt={key} />
                </div>
              </a>
              <div className="card-desc">{spotlightProjects[key]["desc"]}</div>
              <div className="card-tech">{spotlightProjects[key]["techStack"]}</div>
            </div>
          </FadeInSection>
        ))}
      </div>
      <div className="project-container">
        <ul className="projects-grid">
          {Object.keys(projects).map((key, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li className="projects-card">
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={projects[key]["link"]}
                    openLink={projects[key]["open"]}
                  />
                </div>

                <div className="card-title">{key}</div>
                <div className="card-desc">{projects[key]["desc"]}</div>
                <div className="card-tech">{projects[key]["techStack"]}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
