import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const SingleProduct = () => {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch("https://dummyjson.com/products/" + id)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    console.log(product);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <ClipLoader size={50} color="#000" />
            </div>
        );
    }

    return <div>Product Name : {product?.title}</div>;
};

export default SingleProduct;
