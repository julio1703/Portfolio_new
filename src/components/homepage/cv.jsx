// src/components/CV.jsx
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/cv.css";

const CV = () => (
  <div className="cv">
    <Card
      icon={faBriefcase}
      title="CV"
      body={
        <img
          src="/MY_CV.png"                          // <-- absolute path
          onClick={() => window.open("/MY_CV.png", "_blank")}
          alt="Scan to download my CV"
          className="cv-qr"
        />
      }
    />
  </div>
);

export default CV;
