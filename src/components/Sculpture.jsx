import React, { useState } from "react";
import { sculptureList } from "../data.js";

const Sculpture = () => {
    const [sculptureIndex, setSculptureIndex] = useState(0);

    const handleNext = () => {
        setSculptureIndex(sculptureIndex + 1);
    };

    let currentImage = sculptureList[sculptureIndex].url;

    console.log("rendering sculpture");

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <button
                onClick={handleNext}
                style={{
                    width: "fit-content",
                }}
            >
                Next Image
            </button>
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
