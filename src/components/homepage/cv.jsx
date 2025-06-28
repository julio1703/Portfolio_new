// src/components/CV.jsx
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";          // keep your existing Card wrapper
import "./styles/cv.css";                  // reuse your stylesheet

const CV = () => {
  return (
    <div className="cv">
      <Card
        icon={faBriefcase}
        title="CV"
        body={
          <img
            src={"MY_CV.png"} // replace with your CV image path
            onClick={() => window.open("../MY_CV.png", "_blank")}
            alt="Scan to download my CV"
            className="cv-qr"
          />
        }
      />
    </div>
  );
};

export default CV;