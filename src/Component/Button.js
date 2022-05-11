import React from "react";

function Button({title}) {

    return (
        <button type="button"
                onClick={() => console.log({title})}>
            <p>{title}</p>
            </button>
    );
}

export default Button
