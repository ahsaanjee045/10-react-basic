import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        setCount(count - 1);
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                marginTop: "10px",
            }}
        >
            <button onClick={incrementCount} id="inc-btn">
                Increment
            </button>
            <p>
                Count : <span id="count">{count}</span>
            </p>
            <p>
                Count : <span id="count">{count}</span>
            </p>
            <p>
                Count : <span id="count">{count}</span>
            </p>
            <p>
                Count : <span id="count">{count}</span>
            </p>
            <p>
                Count : <span id="count">{count}</span>
            </p>
            <p>
                Count : <span id="count">{count}</span>
            </p>

            <button onClick={decrementCount} id="dec-btn">
                Decrement
            </button>
        </div>
    );
};

export default Counter;
