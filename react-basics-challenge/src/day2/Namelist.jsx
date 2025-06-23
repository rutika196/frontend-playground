import React from "react";

const NameList = () => {
    const names = ['Alice', 'Bob', 'Charlie'];

    return (
        <div>
            <ul>
                {names.map((item) => 
                <li key={item}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default NameList;