import React from "react";

export default function Button ({label, onClick, type = 'button', style = {}}) {

    return (
        <button type={type} onClick={onClick} style={style}>{label}</button>
    )
}