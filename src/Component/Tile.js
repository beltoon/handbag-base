import React from "react";

function Tile({title, text, image}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={image} alt=""/>
        </section>

    )
}

export default Tile