import React from 'react';

export default function ChildCounter ({onCounterEvent}) {
    
    return (
        <>
            <button onClick={onCounterEvent}>Counter</button>
        </>
    )
}