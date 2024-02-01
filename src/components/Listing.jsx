import React from "react";
import { people } from "../data";

const Listing = () => {
    // let peopleList = [];

    // for (let i = 0; i < people.length; i++) {
    //     console.log(people[i]);
    //     let peopleElement = (
    //         <div>
    //             <img src={getImageUrl(people[i].imageId)} alt="" />
    //             <p>{people[i].name}</p>
    //         </div>
    //     );
    //     peopleList.push(peopleElement);
    // }

    return (
        <div>
            {people.map((person) => {
                return (
                    <div key={person.id}>
                        <img src={getImageUrl(person.imageId)} alt="" />
                        <p>{person.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Listing;

function getImageUrl(imageId) {
    return "https://i.imgur.com/" + imageId + "s.jpg";
}

// import React from "react";

// const App = () => {
//     let fruits = ["Kiwi", "Apple", "Mango", "Banana", "Grapes", "Orange", ];

//     // Declarative way

//     // [];

//     // for (let i = 0; i < fruits.length; i++) {
//     //     let fruitElement = <li>{fruits[i]}</li>;
//     //     renderFruits.push(fruitElement);
//     // }

//     return (
//         <div>
//             <ul>
//                 {fruits.map(function (item, i) {
//                     return <li >{item}</li>;
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default App;

// import React from "react";
// import { people } from "./data";

// const App = () => {
//     console.log(people);
//     return <div>
//         <PersonList/>
//     </div>;
// };

// export default App;

// function PersonList() {
//     const listItems = people.map((person) => (
//         <li key={person.id}>
//             <img src={getImageUrl(person)} alt={person.name} />
//             <p>
//                 <b>{person.name}</b>
//                 {" " + person.profession + " "}
//                 known for {person.accomplishment}
//             </p>
//         </li>
//     ));
//     return <ul>{listItems}</ul>;
// }

// function getImageUrl(person) {
//     return "https://i.imgur.com/" + person.imageId + "s.jpg";
// }
