import React, { useContext } from "react";
import CountContext from "../context/CountContext";

const Button = ({ children }) => {
    console.log("Button Rendering");
    const context = useContext(CountContext);
    return <div>{children}</div>;
};

export default Button;

// function Button({ text = "Something", mynumber = 3, clr = "lightgray" }) {
//     return (
//         <button
//             style={{
//                 color: clr,
//                 backgroundColor: "black",
//                 fontSize: 15,
//             }}
//         >
//             {text}
//             {/* false, 0, "", undefined , null */}
//             {mynumber}
//         </button>
//     );
// }

// // Button.defaultProps = {
// //     text : "Something default",
// //     mynumber : 1,

// // }

// export default Button;
