import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
        return (
                <div className="works">
                        <Card
                                icon={faBriefcase}
                                title="CV"
                                body={
                                        <div className="works-body">
                                               <div className="cv-qr-wrapper">
                                                       <img
                                                               src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%2Fcv.pdf"
                                                               alt="CV QR Code"
                                                               className="cv-qr"
                                                       />
                                                       <div className="cv-qr-text">Scan to view my CV</div>
                                               </div>
                                        </div>
                                }
                        />
                </div>
        );
};

export default Works;
