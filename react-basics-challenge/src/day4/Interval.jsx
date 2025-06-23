import React, { useEffect } from 'react';

const Interval = () => {
   
    useEffect(() => {
        const intervalId = setInterval(()=> {
            console.log("Tick");
        }, 1000);

        return() => clearInterval(intervalId);
        

    },[])
    

    return(
        <div>
            <h3>Check console</h3>
        </div>
            
    );
};

export default Interval;