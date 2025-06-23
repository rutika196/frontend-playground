import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [value, setValue] = useState('');

    return(
        <div>
            <h3>Day 3 — Challenge 1: Lifting state up (child to parent value)</h3>
            <Child onInputChange={setValue}/>
            {/* parent displayes value from child input */}

            <p>Parent sees: {value}</p>
        </div>

    );
};

export default Parent;

