import React from "react";

export const First =() => {
    return(
        <p>First Component</p>
    )
}

export const Second = () => {
    return (
        <p>Second Component</p>
    )
}

const FragmentComponent = () => {
    return (
        <>
        <h3>Basic fragment usage</h3>
        <First />
        <Second />
        </>
    )
}

export default FragmentComponent;