import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/cv.css";

import cvQr from "./public/MY_CV.png"; 

const CV = () => {
  const cvLink = "/cv.pdf";

  return (
    <div className="cv">
      <Card
        icon={faBriefcase}
        title="CV"
        body={
          <div className="cv-body">
            <div className="cv-qr-wrapper">
              <img
                src={cvQr}
                alt="Scan to download my CV"
                className="cv-qr"
              />
              <div className="cv-qr-text">Scan to download my CV</div>
            </div>
            <a
              href={cvLink}
              download
              className="cv-download-link"
            >
              Or click here to download
            </a>
          </div>
        }
      />
    </div>
  );
};

export default CV;
