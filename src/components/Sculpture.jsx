import React, { useState } from "react";
import { sculptureList } from "../data.js";

const Sculpture = () => {
    const [sculptureIndex, setSculptureIndex] = useState(0);

    const handleNext = () => {
        if (sculptureIndex === sculptureList.length - 1) return;
        setSculptureIndex(sculptureIndex + 1);
    };
    const handlePrev = () => {
        if (sculptureIndex === 0) return;
        setSculptureIndex(sculptureIndex - 1);
    };

    let currentImage = sculptureList[sculptureIndex].url;

    console.log("rendering sculpture");

    let number = 1;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            {/* Conditional Rendering */}
            {sculptureIndex > 0 && (
                <button
                    onClick={handlePrev}
                    style={{
                        width: "fit-content",
                    }}
                >
                    Prev Image
                </button>
            )}
            {sculptureIndex === sculptureList.length - 1 ? null : (
                <button
                    onClick={handleNext}
                    style={{
                        width: "fit-content",
                    }}
                >
                    Next Image
                </button>
            )}
            <img
                style={{
                    width: "200px",
                    height: "200px",
                }}
                src={currentImage}
                alt=""
            />
        </div>
    );
};

export default Sculpture;
