import React, { useState } from "react";

const BindingInput = () => {
    const [inputValue, setInputValue] = useState('');

    const handleReset =() => {
        setInputValue('');
    }



    return(
        <div>
            <h3>Two-way binding with input</h3>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <p>{inputValue}</p>
            <button disabled={!inputValue} onClick={handleReset}>Reset</button>
        </div>

    )
}

export default BindingInput;