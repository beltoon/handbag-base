import React from "react";

function buttonDisabled({title}) {
    return (
        <button type="button" disabled onClick={() => console.log({title})}>
            <p>{title}</p>
        </button>
    );
}

export default buttonDisabled