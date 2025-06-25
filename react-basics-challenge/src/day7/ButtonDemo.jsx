import React from "react";
import Button from "./Button";

export default function ButtonDemo() {

    const sayHello =() => {
        alert('Hello From Button.jsx');
    }

    const logSomething = () => {
        console.log('button demo:- button  clicked');
    }
    return(
        <>
        <Button label='Log' onClick={logSomething} style={{backgroundColor: "purple", color: "white", marginLeft: "10px" }}/>

        <Button label='Alert' onClick={sayHello} style={{backgroundColor: "purple", color: "white", marginLeft: "10px" }} />
         </>
    )
}