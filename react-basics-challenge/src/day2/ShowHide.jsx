import React, { useState } from "react";

const ShowHide = () => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={handleClick}>{visible ? 'HIDE' : 'SHOW'}</button>
            {visible && <p>Conditional rendering</p>}
        </div>
    )
}

export default ShowHide;