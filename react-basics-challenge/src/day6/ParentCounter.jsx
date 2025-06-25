import React, {useState} from 'react';
import ChildCounter from './ChildCounter';

export default function ParentCounter () {
    const [count, setCount] = useState(0);

    const handleEvent = () => {
        setCount(count=>count+1);
    }


    return (
        <>
            <h3>Pass callback from parent to child</h3>
            <ChildCounter onCounterEvent={handleEvent}/>
            <p>Button Clicked {count} times</p>
        </>
    )
}