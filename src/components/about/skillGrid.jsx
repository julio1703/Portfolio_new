import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faJs,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import "./styles/skillGrid.css";

const skills = [
    { icon: faReact, name: "React" },
    { icon: faJs, name: "JavaScript" },
    { icon: faNodeJs, name: "Node" },
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faDatabase, name: "SQL" },
    { icon: faGitAlt, name: "Git" },
];

const SkillGrid = () => {
    const [unlocked, setUnlocked] = useState(Array(skills.length).fill(false));

    const handleUnlock = (index) => {
        setUnlocked((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
        });
    };

    const resetGrid = () => {
        setUnlocked(Array(skills.length).fill(false));
    };

    return (
        <div className="skill-grid-wrapper">
            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`skill-tile ${unlocked[index] ? "unlocked" : ""}`}
                        onMouseEnter={() => handleUnlock(index)}
                        onClick={() => handleUnlock(index)}
                    >
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        {unlocked[index] && <span className="skill-xp">+XP</span>}
                    </div>
                ))}
            </div>
            <div className="skill-reset-wrapper">
                <button className="skill-reset" onClick={resetGrid}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default SkillGrid;
