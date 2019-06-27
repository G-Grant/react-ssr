import React from "react";

import './button.less';

export default function Button(props){
    return (
        <div className="ge-button">
            <button>{props.text}</button>
        </div>
    )
}