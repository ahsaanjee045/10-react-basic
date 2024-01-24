import React from "react";
import styles from "./counter.module.css"

const Counter = () => {
    return (
        <div>
            <button className={styles.btn}>Inc</button>
            <p>Count : 0</p>
            <button className={styles.btn}>Dec</button>
        </div>
    );
};

export default Counter;
