// src/components/CV.jsx
import React, { useState } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/cv.css";

const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

const QRPuzzle = () => {
    const size = 3;
    const pieceSize = 50;
    const pieces = Array.from({ length: size * size }, (_, i) => i);
    const [order, setOrder] = useState(() => shuffle(pieces));

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData("from", index);
    };

    const handleDrop = (e, index) => {
        e.preventDefault();
        const from = parseInt(e.dataTransfer.getData("from"), 10);
        if (from === index) return;
        const newOrder = [...order];
        [newOrder[from], newOrder[index]] = [newOrder[index], newOrder[from]];
        setOrder(newOrder);
    };

    const solved = order.every((val, idx) => val === idx);

    const handleAutoComplete = () => {
        setOrder(pieces);
    };

    return (
        <div className="cv-qr-wrapper">
            <div className="qr-puzzle">
                {order.map((val, idx) => (
                    <div
                        key={idx}
                        className="qr-piece"
                        style={{
                            backgroundImage: "url(mycv.png)",
                            backgroundSize: `${size * pieceSize}px ${size * pieceSize}px`,
                            backgroundPosition: `-${(val % size) * pieceSize}px -${Math.floor(val / size) * pieceSize}px`,
                            width: `${pieceSize}px`,
                            height: `${pieceSize}px`,
                        }}
                        draggable={!solved}
                        onDragStart={(e) => handleDragStart(e, idx)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => handleDrop(e, idx)}
                    ></div>
                ))}
            </div>
            <div className="cv-qr-text">
                {solved ? "Puzzle solved! Scan the QR code." : "Arrange the pieces to reveal the QR code"}
            </div>
            {!solved && (
                <button className="qr-auto-button" onClick={handleAutoComplete}>
                    Auto Complete
                </button>
            )}
        </div>
    );
};

const CV = () => (
    <div className="cv">
        <Card icon={faBriefcase} title="CV" body={<QRPuzzle />} />
    </div>
);

export default CV;
