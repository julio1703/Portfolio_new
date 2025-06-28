// src/components/CV.jsx
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";          // keep your existing Card wrapper
import "./styles/cv.css";                  // reuse your stylesheet

const CV = () => {
  const cvLink   = "/cv.pdf";                                   // file served by Amplify
  const qrCode   = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(cvLink)}`;

  return (
    <div className="cv">
      <Card
        icon={faBriefcase}
        title="CV"
        body={
          <img
            src={qrCode}
            alt="Scan to download my CV"
            className="cv-qr"
          />
        }
      />
    </div>
  );
};

export default CV;