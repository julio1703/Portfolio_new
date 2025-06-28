import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/cv.css";

const CV = () => {
  // now just point at /cv.pdf — Amplify will serve it with the download header
  const cvLink = "/cv.pdf";

  // QR will embed the URI-encoded link
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    cvLink
  )}`;

  return (
    <div className="cv">
      <Card
        icon={faBriefcase}
        title="CV"
        body={
          <div className="cv-body">
            <div className="cv-qr-wrapper">
              <img
                src={qrCodeUrl}
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
