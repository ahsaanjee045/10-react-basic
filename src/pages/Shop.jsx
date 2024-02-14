import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data.products))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default Shop;
