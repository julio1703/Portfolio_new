import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import "./styles/cv.css";

const Works = () => {
  // build the absolute URL to your public/cv.pdf
  const cvLink = `${window.location.origin}/cv.pdf`;
  // tell the QR-API to encode THAT URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(cvLink)}`;

  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="CV"
        body={
          <div className="works-body">
            <div className="cv-qr-wrapper">
              {/* when scanned, this QR will contain "https://your-domain.com/cv.pdf" */}
              <img
                src={qrCodeUrl}
                alt="Scan to view my CV"
                className="cv-qr"
              />
              <div className="cv-qr-text">Scan to view my CV</div>
            </div>
            {/* Optional: make it clickable on desktop/mobile browsers */}
            <a
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-download-link"
            >
              Or click here to open your CV
            </a>
          </div>
        }
      />
    </div>
  );
};

export default Works;
