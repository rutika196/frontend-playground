import React, { useState } from "react";

const Toggle = () => {
    const [toggleValue, setToggleValue] = useState(true);

    const handleEvent = () => {
        setToggleValue(toggelValue => !toggelValue);

    }


    return(
        <div>
            <h3>Simple boolean toggle button</h3>
            
            <button onClick={handleEvent}>{toggleValue ? 'OFF' : 'ON'}</button>
            <p>Current State: {toggleValue ? 'ON' : 'OFF'}</p>
        </div>

    )
}

export default Toggle;