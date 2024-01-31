import React, { useState } from "react";

const Trick = () => {
    const [state, setState] = useState({ name: "John" });

    const handleChangeState = () => {
        setState({ name: "John" });
    };

    console.log("Re-render");
    // components, props and states

    return (
        <div>
            <p>State is {state.name}</p>
            <button onClick={handleChangeState}>Change State</button>
        </div>
    );
};

export default Trick;
