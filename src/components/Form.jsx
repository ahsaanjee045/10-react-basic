import React, { useState } from "react";

// uncontrolled components/inputs - Controlled by DOM
// controlled components/input - Controlled by react state

const Form = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // it will prevent the default behavior or current event
        console.log(email);
        setEmail("")
    };

    console.log("Email state is : ", email);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* how can i get and set value in this field */}
                <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter E-Mail"
                    id="email"
                />
                <input type="text" placeholder="Enter Password" id="password" />
                <input type="submit" value="Login" />

                <button
                    onClick={() => {
                        setEmail("john@example.com");
                    }}
                    type="button"
                >
                    Set Email (john@example.com)
                </button>
            </form>
        </div>
    );
};

export default Form;
