import React, { useState } from 'react';

const Child = ({onInputChange}) => {

    return(
        <div>
            <input type="text" onChange={(e) => onInputChange(e.target.value)}/>
        </div>
    );
};

export default Child;

