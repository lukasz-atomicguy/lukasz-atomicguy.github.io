import React, {Component} from "react";


const Display = (props) => {
    return(
        <span className="value">{props.currentCount}</span>
    );
}

export default Display;