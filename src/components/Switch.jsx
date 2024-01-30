import React, { useState } from "react";

const Switch = () => {
    const [switchState, setSwitchState] = useState(false);

    const handleSwitchStateChange = () => {
        setSwitchState(!switchState);
        console.log(switchState);
    };

    console.log("Rendering Switch")

    return (
        <div
            onClick={handleSwitchStateChange}
            style={{
                height: "40px",
                width: "100px",
                borderRadius: "25px",
                padding: "2px",
                backgroundColor: switchState ? "lightgreen" : "crimson",
            }}
        >
            <div
                style={{
                    height: "39px",
                    width: "39px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    transform : switchState ? "translateX(61px)" : "translateX(0)"
                }}
            ></div>
        </div>
    );
};

export default Switch;
