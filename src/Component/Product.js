import React from "react";

function Product({title, span, price, image}) {
    return (
        <article>
            <span>{span}</span>
            <img src={image} alt={title}></img>
            <p>{title}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product