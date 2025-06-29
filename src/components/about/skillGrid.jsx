import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faJs,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faGitAlt,
    faUnity,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faCode } from "@fortawesome/free-solid-svg-icons";

import "./styles/skillGrid.css";

const skills = [
    { icon: faReact, name: "React" },
    { icon: faJs, name: "JavaScript / ES6" },
    { icon: faNodeJs, name: "Node.js" },
    { icon: faServer, name: "Express.js" },
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faUnity, name: "Unity" },
    { icon: faCode, name: "C#" },
    { icon: faDatabase, name: "MySQL" },
    { icon: faGitAlt, name: "Git" },
];

const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const generateCards = () => {
    const doubled = [...skills, ...skills];
    const shuffled = shuffle(doubled);
    return shuffled.map((skill, idx) => ({
        ...skill,
        id: idx,
        isFlipped: false,
        isMatched: false,
        showName: false,
        isRemoved: false,
    }));
};

const SkillGrid = () => {
    const [cards, setCards] = useState(generateCards());
    const [flipped, setFlipped] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const handleCardClick = (index) => {
        if (disabled) return;
        const card = cards[index];
        if (card.isFlipped || card.isMatched) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);
        setFlipped((prev) => [...prev, index]);
    };

    useEffect(() => {
        if (flipped.length === 2) {
            const [first, second] = flipped;
            if (cards[first].name === cards[second].name) {
                setCards((prev) => {
                    const updated = [...prev];
                    updated[first].isMatched = true;
                    updated[first].showName = true;
                    updated[second].isMatched = true;
                    updated[second].isRemoved = true;
                    return updated;
                });
                setFlipped([]);
            } else {
                setDisabled(true);
                setTimeout(() => {
                    setCards((prev) => {
                        const updated = [...prev];
                        updated[first].isFlipped = false;
                        updated[second].isFlipped = false;
                        return updated;
                    });
                    setFlipped([]);
                    setDisabled(false);
                }, 1000);
            }
        }
    }, [flipped, cards]);

const resetGrid = () => {
    setCards(generateCards());
    setFlipped([]);
    setDisabled(false);
};

const autoFinish = () => {
    setCards((prev) => {
        const seen = {};
        return prev.map((c) => {
            if (seen[c.name]) {
                return { ...c, isFlipped: true, isMatched: true, isRemoved: true };
            } else {
                seen[c.name] = true;
                return { ...c, isFlipped: true, isMatched: true, showName: true };
            }
        });
    });
    setFlipped([]);
};

    const solved = cards.every((c) => c.isMatched);

    return (
        <div className="skill-grid-wrapper">
            <div className="skill-grid">
                {cards.map((card, index) => (
                    card.isRemoved ? null : (
                        <div
                            key={card.id}
                            className={`skill-tile ${card.isFlipped || card.isMatched ? "flipped" : ""} ${card.isMatched ? "matched" : ""}`}
                            onClick={() => handleCardClick(index)}
                        >
                            {card.isFlipped || card.isMatched ? (
                                <>
                                    <FontAwesomeIcon icon={card.icon} className="skill-icon" />
                                    {card.showName && <div className="skill-name">{card.name}</div>}
                                </>
                            ) : (
                                <span className="hidden-icon">?</span>
                            )}
                        </div>
                    )
                ))}
            </div>
            <div className="skill-reset-wrapper">
                <button className="skill-reset" onClick={resetGrid}>Reset</button>
                <button className="skill-auto" onClick={autoFinish} disabled={solved}>
                    Auto Finish
                </button>
            </div>
        </div>
    );
};

export default SkillGrid;
