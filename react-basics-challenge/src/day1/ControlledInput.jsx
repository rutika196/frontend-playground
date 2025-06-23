import React, { useState } from "react";

const ControlledInput = () => {
    const [value, setValue] = useState('');

    return (
        <div>
                <input type="text" placeholder="Type something..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <p>{value}</p>
        </div>
    )
}

export default ControlledInput;