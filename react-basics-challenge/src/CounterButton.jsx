import React, { useState } from "react";

const CounterButton = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        //setCount(count+1);
        setCount(count => count +1);
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Clicked {count} times</button>
        </div>
    )
}

export default CounterButton;