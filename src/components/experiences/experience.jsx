import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import "./style/experience.css";

const Experience = (props) => {
       const { date, title, description, link, type } = props;
       const ref = useRef(null);

       useEffect(() => {
               const observer = new IntersectionObserver(
                       (entries) => {
                               entries.forEach((entry) => {
                                       if (entry.isIntersecting) {
                                               entry.target.classList.add("show");
                                               observer.unobserve(entry.target);
                                       }
                               });
                       },
                       { threshold: 0.1 }
               );

               if (ref.current) {
                       observer.observe(ref.current);
               }

               return () => observer.disconnect();
       }, []);

       return (
               <React.Fragment>
                       <div ref={ref} className={`experience ${type}`}>
                               <div className={`experience-left-side ${type}`}> 
                                       <div className="experience-marker">
                                               <FontAwesomeIcon
                                                       icon={type === "education" ? faGraduationCap : faBriefcase}
                                                       className="experience-icon"
                                               />
                                       </div>
                                       <div className="experience-date">{date}</div>
                               </div>

                               <Link to={link}>
                                       <div className="experience-right-side">
                                               <div className="experience-title">{title}</div>
                                               <div className="experience-description">{description}</div>
                                               <div className="experience-link">
                                                       Read Experience{" "}
                                                       <FontAwesomeIcon
                                                               style={{ fontSize: "10px" }}
                                                               icon={faChevronRight}
                                                       />
                                               </div>
                                       </div>
                               </Link>
                       </div>
               </React.Fragment>
       );
};

export default Experience;
