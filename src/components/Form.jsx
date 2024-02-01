import React, { useState } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

// schema
const userSchema = z.object({
    email: z.string().trim().min(1).email(),
    password: z.string().trim().min(6).max(20),
    username: z.string().trim().min(1).toLowerCase(),
});

// uncontrolled components/inputs - Controlled by DOM
// controlled components/input - Controlled by react state

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        phone: "",
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // it will prevent the default behavior or current event
        let result = userSchema.safeParse(formData);
        if (!result.success) {
            
            toast.error(result.error.format()?.username?._errors[0], {
                position : "top-left",
                duration : 5000
            });
        }
        // you can send the form data to a backend server
        console.log(formData);
    };

    console.log(formData);

    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // let {name : fieldName, value} = e.target

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* how can i get and set value in this field */}
                <input
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    type="text"
                    placeholder="Enter E-Mail"
                />

                <input
                    value={formData.password}
                    onChange={handleChange}
                    type="text"
                    name="password"
                    placeholder="Enter Password"
                />
                <input
                    value={formData.username}
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Enter username"
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Form;
