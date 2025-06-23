import React, { useEffect } from 'react';

const Mount = () => {
   
    useEffect(() => {
        //mount
        console.log('Component mounted');

    },[])
    

    return(
        <div>
            <h3>Check console</h3>
        </div>
            
    );
};

export default Mount;