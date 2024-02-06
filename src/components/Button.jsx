import React from "react";

/**
 * @type {React.FC}
 * @param {React.ComponentPropsWithoutRef<"button">} props
 * @returns {React.JSX.Element}
 */
const Button = (props) => {
    return <button onClick={props.onClick}>Button</button>;
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
