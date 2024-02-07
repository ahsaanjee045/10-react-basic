import React, { useEffect, useState } from "react";

const Products = () => {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // mounting
        //updation
    }, []);

    return (
        <div>
            {/* {JSON.stringify(products)} */}
            <button onClick={() => setCount(count + 1)}>Referesh</button>
        </div>
    );
};

export default Products;
