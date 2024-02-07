import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// useEffect always runs atleat once

const Effect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    // useEffect(() => {
    //     toast.success("Hello user");

    //     // clean up function
    //     return () => {
    //         toast.success("Component Unmounted");
    //     };
    // }, []);

    // this use effect will run on any state update
    // useEffect(() => {
    //     console.log("hello")
    //     toast.success("Hello!");

    //     return () => {
    //         console.log("Unmount")
    //         toast.success("Component Unmounted");
    //     };
    // }, [count, count3]);

    // Re-Rendering
    // it will delete the previous dom
    // create a new dom

    // useEffect(() => {
    //     toast.success("hello world");
    //     // API Call

    //     return () => {
    //         // cleanup function
    //         toast.error("Oops! Component Unmounted");
    //     };
    // }, [count, count2]);

    // console.log("re-rendering");

    return (
        <div>
            <h1>Effect</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Inc Count</button>
            <p>Count3 : {count3}</p>
            <button onClick={() => setCount3(count3 + 1)}>Inc Count</button>
        </div>
    );
};

export default Effect;
