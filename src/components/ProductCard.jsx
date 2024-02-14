import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product = {} }) => {
    return (
        <>
            <div>
                <div
                    style={{
                        width: "60rem",
                        height: "35vh",
                        borderBottom: "2px solid lightgray",
                        marginTop: "20px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            direction: "row",
                            marginRight: "20px",
                            marginLeft: "20px",
                        }}
                    >
                        <div style={{ marginRight: "25px" }}>
                            <Link to={`/shop/${product.id}`}>
                                {" "}
                                <img
                                    style={{ width: "250px", height: "220px" }}
                                    src={product.thumbnail}
                                />
                            </Link>
                        </div>
                        <div style={{ width: "30rem" }}>
                            <h3 style={{ marginBlockEnd: "0" }}>
                                {" "}
                                {product.title}
                            </h3>
                            <div
                                style={{
                                    width: "50px",
                                    fontSize: "13px",
                                    marginTop: "3px",
                                    borderRadius: "25%",
                                }}
                            >
                                <p
                                    style={{
                                        color: "white",
                                        backgroundColor: "black",
                                        marginBlockStart: "0",
                                        paddingLeft: "5px",
                                        borderRadius: "50px",
                                    }}
                                >
                                    {product.rating} ⭐️
                                </p>
                            </div>
                            <p> {product.description}</p>
                            <p style={{ marginBlockEnd: "0" }}>
                                Brand : {product.brand}
                            </p>
                            <p
                                style={{
                                    marginBlockEnd: "0",
                                    marginBlockStart: "0",
                                }}
                            >
                                Category : {product.category}
                            </p>
                            <p style={{ marginBlockStart: "0", color: "red" }}>
                                Stock Left : {product.stock}
                            </p>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p
                                style={{
                                    marginBlockEnd: "0",
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                }}
                            >
                                <span>&#36;</span>
                                {product.price}
                            </p>
                            <p
                                style={{
                                    color: "green",
                                    marginBlockStart: "0",
                                    fontSize: "13px",
                                }}
                            >
                                {product.discountPercentage}% off
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
