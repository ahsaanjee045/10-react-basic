import React, { useContext } from "react";
import CountContext from "../context/CountContext";

const Cart = () => {
    let { user } = useContext(CountContext);
    console.log("Cart rendering");

    return (
        <div className="mx-auto px-6">
            {user ? (
                <p>Here are your cart Items</p>
            ) : (
                <p>Please login to see your cart items</p>
            )}
        </div>
    );
};

export default Cart;
