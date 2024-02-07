import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.products);
                setProducts(data.products);
            })
            .catch((err) => console.log(err));
    }, []);

    return <div>
        {/* list the product here */}
    </div>;
};

export default Products;
