import React from "react";
import "../styles/Art.css";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";

const Art = () => {
  const topArt = [
    { src: "/assets/art/fishy.jpg", title: "fish" },
    { src: "/assets/art/dali.jpg", title: "dali" },
    { src: "/assets/art/japan.jpg", title: "japan" },
    { src: "/assets/art/space.jpg", title: "space" },
    { src: "/assets/art/11th_grade.jpg", title: "11th grade" },
    { src: "/assets/art/cordyceps.jpg", title: "cordyceps" },
    { src: "/assets/art/IMG_20260413_121039.jpg", title: "apr 13" },
    { src: "/assets/art/IMG_20260508_083109.jpg", title: "may 8" },
    { src: "/assets/art/IMG_20260518_162459.jpg", title: "may 18" },
    { src: "/assets/art/IMG_20260528_113231.jpg", title: "may 28" },
    { src: "/assets/art/IMG_20260603_163651.jpg", title: "jun 3" },
    { src: "/assets/art/IMG_20260604_182519.jpg", title: "jun 4" },
    { src: "/assets/art/IMG_20260605_165201.jpg", title: "jun 5" },
    { src: "/assets/art/IMG_20260610_172322.jpg", title: "jun 10" }
  ];

  return (
    <div id="art">
      <div className="section-header">
        <span className="section-title">/ art</span>
        <Link to="/art" className="explore-link">
          Explore collection
        </Link>
      </div>
      <FadeInSection delay="200ms">
        <div className="art-description">
          A collection of my digital and traditional artwork, exploring different styles and mediums.
        </div>
      </FadeInSection>
      <div className="art-container">
        <div className="art-grid">
          {topArt.map((art, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div className="art-card">
                <img src={art.src} alt={art.title} className="art-image" />
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Art;
